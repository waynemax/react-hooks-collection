import React from 'react';

export const useCounter = (initialValue: number = 0) => {
  const [value, setValue] = React.useState(initialValue);

  const increment = () => setValue(value + 1);
  const decrement = () => setValue(value - 1);

  return [value, increment, decrement];
};

export default useCounter;
