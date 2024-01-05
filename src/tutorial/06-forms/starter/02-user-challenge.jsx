import { useState } from 'react';
import { data } from '../../../data';
const UserChallenge = () => {
  const [name, setName] = useState('');
  const [people, setPeople] = useState(data);
  const onSubmit = (e) => {
    e.preventDefault();

    setPeople([...people, { name: name, id: Math.random() + Math.random() }]);
    setName('');
  };

  const handleRemove = (id) => {
    let newPeople = people.filter((person) => person.id !== id);
    // if (person.id !== id) {
    //   return person.name;
    // }

    setPeople(newPeople);

    // setPeople(() => {
    //   return people.map((person) => person.id !== id);
    // });
  };
  return (
    <div>
      <form className="form" onSubmit={onSubmit}>
        <h4>Add User</h4>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input
            type="text"
            className="form-input"
            value={name}
            name="name"
            id="name"
            autoComplete="name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>

      {people.map((person) => (
        <>
          <h4 key={person.id}>{person.name}</h4>
          <button onClick={() => handleRemove(person.id)} className="btn">
            Remove
          </button>
        </>
      ))}
    </div>
  );
};
export default UserChallenge;
