import { useState } from 'react';

const UserChallenge = () => {
  const [user, setUser] = useState(null);
  function logIn() {
    setUser({ name: 'RAY' });
    console.log(user);
  }
  function logOut() {
    setUser(null);
    console.log(user);
  }
  return (
    <>
      <h2>user challenge</h2>
      {user?.name ? (
        <>
          <h4>Hello {user.name}</h4>
          <button onClick={logOut} className="btn">
            Log Out
          </button>
        </>
      ) : (
        <>
          <h4>Please Log IN</h4>
          <button onClick={logIn} className="btn">
            Log In
          </button>
        </>
      )}
    </>
  );
};

export default UserChallenge;
