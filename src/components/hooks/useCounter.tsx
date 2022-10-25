import { useState } from "react";
interface IProp {
  initialCount?: number;
}
const useCounter = ({ initialCount = 0 }: IProp = {}) => {
  const [count, setcount] = useState(initialCount);
  const increment = () => {
    setcount((prev) => prev + 1);
  };
  const decrement = () => {
    setcount((prev) => prev - 1);
  };
  return {
    count,
    increment,
    decrement,
  };
};

export default useCounter;
