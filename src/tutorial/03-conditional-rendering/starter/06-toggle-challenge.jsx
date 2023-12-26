import { useState } from 'react';

const ToggleChallenge = () => {
  const [isTrue, setIsTrue] = useState(false);

  const handleClick = () => {
    setIsTrue(!isTrue);
  };
  return (
    <>
      <h2>toggle challenge</h2>
      <button onClick={handleClick}>Click to Add Text</button>
      <h4>{isTrue && 'You clicked'}</h4>
    </>
  );
};

export default ToggleChallenge;
