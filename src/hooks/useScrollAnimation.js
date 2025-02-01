import { useEffect, useState, useRef } from "react";

const useScrollAnimation = (threshold = 0.3) => {
  const [visibleIndexes, setVisibleIndexes] = useState([]);
  const elementsRef = useRef([]); // 요소들의 ref 저장
  const lastScrollY = useRef(0); // 마지막 스크롤 위치 저장
  const [scrollDirection, setScrollDirection] = useState("down"); // 스크롤 방향 추적

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollDirection(currentScrollY > lastScrollY.current ? "down" : "up");
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const observedIndex = elementsRef.current.indexOf(entry.target);

          if (observedIndex !== -1) {
            if (entry.isIntersecting) {
              // ✅ 요소가 화면에 보이면 애니메이션 실행
              setVisibleIndexes((prev) => [
                ...new Set([...prev, observedIndex]),
              ]);
            } else if (!entry.isIntersecting && scrollDirection === "down") {
              // ✅ 스크롤을 내릴 때만 제거 → 다시 내려오면 애니메이션 실행됨
              setVisibleIndexes((prev) =>
                prev.filter((index) => index !== observedIndex)
              );
            }
          }
        });
      },
      { threshold }
    );

    elementsRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [threshold, scrollDirection]);

  return { visibleIndexes, elementsRef };
};

export default useScrollAnimation;
