import React from "react";
import { isWindow } from "./lib/environment";

const smallScreenMediaQuery = "(max-width: 899px)";

const initialState = isWindow() && matchMedia(smallScreenMediaQuery).matches;

const useSmallScreen = () => {
  const [isSmallScreen, setIsSmallScreen] = React.useState(initialState);

  const handleResize = React.useCallback(() => {
    const isSmallScreenNow = matchMedia(smallScreenMediaQuery).matches;

    if (isSmallScreen === isSmallScreenNow) return;

    setIsSmallScreen(isSmallScreenNow);
  }, [isSmallScreen]);

  React.useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);

  return isSmallScreen;
};

export default useSmallScreen;
