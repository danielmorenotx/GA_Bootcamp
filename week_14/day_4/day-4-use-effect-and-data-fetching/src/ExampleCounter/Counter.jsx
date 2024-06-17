import { useEffect, useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [random, setRandom] = useState(0);
  const [decrease, setDecrease] = useState(0);

  useEffect(()=> {
    console.log("Current Count State ", count);
    // setCount(count + 1)
  }, [])

  useEffect(()=> {
    console.log("Current random State ", random);
  
  }, [random])

  return (
    <>
      <h2>Counter: {count}</h2>
      <h2>Random: {random} </h2>
      <h2>decrease: {decrease} </h2>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          setRandom(Math.random());
        }}
      >
        Get a randum number
      </button>
      <button
        onClick={() => {
          setDecrease(decrease - 1);
        }}
      >
        decrease
      </button>
    </>
  );
};

export default Counter;
