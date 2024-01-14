import { useContext } from 'react';
import { useCustomContextHook } from './Navbar';

const UserContainer = () => {
  const [user, logOut] = useCustomContextHook();
  return (
    <div>
      <h2>UserContainer</h2>
      <h3>User is :{user.name} </h3>
      <button onClick={() => logOut()}>Click</button>
    </div>
  );
};
export default UserContainer;
