import React, { useReducer, useState } from 'react';
import { data } from '../../../data';

const defaultState = {
  people: data,
};

const reducer = (state, action) => {
  if (action.type === 'CLEAR_LIST') {
    return {
      people: [],
    };
  }

  if (action.type === 'REMOVE_ITEM') {
    return {
      people: action.newPeople,
    };
  }

  if (action.type === 'RESET_DATA') {
    return {
      people: data,
    };
  }

  throw new Error(`No matching "${action.type}" - action type`);
};

const ReducerBasics = () => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  // const [people, setPeople] = useState(data);

  const removeItem = (id) => {
    let newPeople = state.people.filter((person) => person.id !== id);

    dispatch({
      type: 'REMOVE_ITEM',
      newPeople,
    });
    // setPeople(newPeople);
  };

  const clearList = () => {
    dispatch({
      type: 'CLEAR_LIST',
    });
  };

  const resetData = () => {
    dispatch({
      type: 'RESET_DATA',
    });
  };
  return (
    <div>
      {state.people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>remove</button>
          </div>
        );
      })}

      {state.people.length > 0 ? (
        <button
          className="btn"
          style={{ marginTop: '2rem' }}
          onClick={clearList}
        >
          clear items
        </button>
      ) : (
        <button
          className="btn"
          style={{ marginTop: '2rem' }}
          onClick={resetData}
        >
          Reset Data
        </button>
      )}

      <br />
    </div>
  );
};

export default ReducerBasics;
