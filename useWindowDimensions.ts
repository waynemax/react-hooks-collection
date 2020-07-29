import { useState, useEffect } from 'react';

type Dimensions = { width: number, height: number };

export const useWindowDimensions = (): Dimensions => {
  if (typeof window === 'undefined') {
    return { width: 1200, height: 800 };
  }

  const [windowDimensions, setWindowDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const updateWindowDimensions = ev => {
    setWindowDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener('resize', updateWindowDimensions);

    return () => window.removeEventListener('resize', updateWindowDimensions);
  }, []);

  return windowDimensions;
};

export default useWindowDimensions;
