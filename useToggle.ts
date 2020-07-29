import { useState, useCallback } from 'react';

export const useToggle = (initial: boolean): [boolean, () => void] => {
  const [open, setOpen] = useState(initial);

  return [
    open,
    useCallback(() => {
      setOpen((status) => !status);
    }, [])
  ];
};

export default useToggle;
