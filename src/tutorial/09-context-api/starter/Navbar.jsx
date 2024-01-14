import { useState } from 'react';
import NavbarLinks from './NavbarLinks';

const Navbar = () => {
  const [user, setUser] = useState({ name: 'Ray' });
  const logOut = () => {
    setUser({
      name: 'Not Ray',
    });
  };
  console.log(user.name);
  return (
    <div>
      <NavbarLinks user={user} logOut={logOut}></NavbarLinks>
    </div>
  );
};
export default Navbar;
