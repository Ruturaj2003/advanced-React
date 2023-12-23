import { useState } from 'react';

const UseStateBasics = () => {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }
  return (
    <>
      <h2>useState basics</h2>
      <h1>You Clicked {count} times</h1>
      <button className="btn" onClick={handleClick}>
        Click here
      </button>
    </>
  );
};

export default UseStateBasics;
