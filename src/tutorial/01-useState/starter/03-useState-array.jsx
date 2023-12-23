import { useState } from 'react';
import { data } from '../../../data';

const UseStateArray = () => {
  const removeItem = (id) => {
    console.log(id);
    const newPeople = people.filter((person) => {
      return person.id !== id;
    });
    setPeople(newPeople);
  };
  const clearAllItems = () => {
    setPeople([]);
  };

  const [people, setPeople] = useState(data);

  return (
    <div>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id}>
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>Remove</button>
          </div>
        );
      })}
      <br />
      <button className="btn" onClick={clearAllItems}>
        Clear All
      </button>
    </div>
  );
};

export default UseStateArray;
