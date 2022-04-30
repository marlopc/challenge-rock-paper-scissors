import React from "react";
import { isWindow } from "./lib/environment";

const isWindowWidthLessThan = (width: number | string) =>
  matchMedia(`(max-width: ${width}px)`).matches;

const getInitialState = (width: number | string) =>
  isWindow() && isWindowWidthLessThan(width);

const useSmallScreen = (width: number = 899) => {
  const [isSmallScreen, setIsSmallScreen] = React.useState(
    getInitialState(width)
  );

  const handleResize = React.useCallback(() => {
    const isSmallScreenNow = isWindowWidthLessThan(width);

    if (isSmallScreen === isSmallScreenNow) return;

    setIsSmallScreen(isSmallScreenNow);
  }, [isSmallScreen, width]);

  React.useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);

  return isSmallScreen;
};

export default useSmallScreen;
