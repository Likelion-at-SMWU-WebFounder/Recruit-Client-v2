import React from "react";
import styled from "styled-components";
import useScrollAnimation from "../hooks/useScrollAnimation"; // ✅ 훅을 가져오기

const AnimatedWrapper = styled.div`
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  transform: ${(props) =>
    props.isVisible ? "translateY(0)" : "translateY(50px)"};
  transition: opacity 0.8s ease-out, transform 0.8s ease-out;
`;

const AnimatedContainer = ({ children, index = 0 }) => {
  const { visibleIndexes, elementsRef } = useScrollAnimation();

  return (
    <AnimatedWrapper
      ref={(el) => (elementsRef.current[index] = el)} // ✅ ref 자동 적용
      isVisible={visibleIndexes.includes(index)} // ✅ isVisible 자동 적용
    >
      {children}
    </AnimatedWrapper>
  );
};

export default AnimatedContainer;
