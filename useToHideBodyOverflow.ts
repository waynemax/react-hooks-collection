import { useEffect } from 'react';

export const useToHideBodyOverflow = () => {
  useEffect(() => {
    document.body.classList.add('overflow-hidden');

    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  });
};

export default useToHideBodyOverflow;
