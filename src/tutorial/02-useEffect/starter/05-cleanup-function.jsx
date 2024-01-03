import { useEffect, useState } from 'react';

const CleanupFunction = () => {
  const [isTrue, setIsTrue] = useState(false);
  function handleClick() {
    setIsTrue(!isTrue);
  }
  return (
    <>
      <h2>cleanup function</h2>
      <button onClick={handleClick} className="btn">
        Click Me
      </button>
      {!isTrue || <SecondComponent></SecondComponent>}
    </>
  );
};

const SecondComponent = () => {
  useEffect(() => {
    console.log('hello');
  }, []);

  return <h4>Second Component</h4>;
};

export default CleanupFunction;
