import { useMediaQuery } from "react-responsive";

export const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({
    minWidth: 1251,
  });
  return isDesktop ? children : null;
};

export const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 1250 });
  return isMobile ? children : null;
};
