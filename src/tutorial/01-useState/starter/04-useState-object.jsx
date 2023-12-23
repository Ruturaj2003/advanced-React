import { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: 'Jake',
    age: 24,
    hobby: 'reading books',
  });

  const displayPerson = () => {
    setPerson({ name: 'Dona', age: 69, hobby: 'Making Games' });
  };

  return (
    <div>
      <h2>useState object example</h2>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3> Enjoys :{person.hobby}</h3>
      <button className="btn" onClick={displayPerson}>
        Show Next
      </button>
    </div>
  );
};

export default UseStateObject;
