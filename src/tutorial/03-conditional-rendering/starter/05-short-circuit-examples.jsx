import { useState } from 'react';

const ShortCircuitExamples = () => {
  // falsy
  const [text, setText] = useState('');
  // truthy
  const [name, setName] = useState('susan');
  const [user, setUser] = useState({ name: 'john' });
  const [isEditing, setIsEditing] = useState(false);

  return (
    <>
      <h2>short circuit - examples</h2>
      <h3>{text || 'Default text'}</h3>
      <div>{name && <DummyComponent name={user.name}></DummyComponent>}</div>
    </>
  );
};

const DummyComponent = ({ name }) => {
  return <h4>my name is {name}</h4>;
};

export default ShortCircuitExamples;
