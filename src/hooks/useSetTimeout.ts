import { useEffect, useRef, useState } from "react";
import type { Dispatch, SetStateAction } from "react";

const useSetTimeout = (
  second: number
): [number, Dispatch<SetStateAction<number>>] => {
  const [index, setIndex] = useState(0);
  const intervalId = useRef<null | NodeJS.Timer>(null);

  useEffect(() => {
    intervalId.current = setTimeout(
      () => setIndex((prevIndex) => (prevIndex < 2 ? prevIndex + 1 : 0)),
      second
    );

    return () => {
      if (intervalId.current !== null) {
        clearTimeout(intervalId.current);
      }
    };
  }, [second, index]);

  return [index, setIndex];
};

export default useSetTimeout;
