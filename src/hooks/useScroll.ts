import { useEffect, useState } from "react";

const useScroll = (): boolean => {
  const [isTop, setIsTop] = useState(true);

  useEffect(() => {
    const handleScroll = (): void => {
      if (window.scrollY <= 10) {
        setIsTop(true);
        return;
      }
      setIsTop(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return isTop;
};

export default useScroll;
