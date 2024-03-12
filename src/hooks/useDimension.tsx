import { useEffect, useState } from "react";

export const useDimension = () => {
  const [dimension, setDimension] = useState<{
    width: number;
    height: number;
  }>({ width: 0, height: 0 });
  const updateDimensions = () => {
    const { innerWidth, innerHeight } = window;
    setDimension({ width: innerWidth, height: innerHeight });
  };
  useEffect(() => {
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  return dimension;
};
