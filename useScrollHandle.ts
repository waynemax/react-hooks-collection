import { useEffect } from 'react';

export const useScrollHandle = (scrollListener: () => void) => {
  useEffect(() => {
    window.addEventListener('scroll', scrollListener, {passive: true});

    return () => {
      window.removeEventListener('scroll', scrollListener);
    };
  }, []);
};

export default useScrollHandle;
