import { useState } from "react";

export const useCounter = (initialValue: number) => {
  const [counter, setcounter] = useState<number>(initialValue);

  const increaseCounter = (increaseValue: number = 1): void => {
    setcounter((prevCounter) => prevCounter + increaseValue);
  };

  const decreaseCounter = (decreaseValue: number = 1): void => {
    setcounter((prevCounter) => prevCounter - decreaseValue);
  };

  const resetCounter = (): void => {
    setcounter(0);
  };

  return {
    // atributos
    counter,

    // metodos
    increaseCounter,
    decreaseCounter,
    resetCounter,
  };
};
