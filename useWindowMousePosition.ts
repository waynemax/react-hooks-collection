import { useState, useEffect } from 'react';

export const useWindowMousePosition = () => {
  let [windowMousePosition, setWindowMousePosition] = useState({
    x: null,
    y: null
  });

  const handleMouseMove = (e) => {
    setWindowMousePosition({
      x: e.pageX,
      y: e.pageY
    });
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return windowMousePosition;
};

export default useWindowMousePosition;
