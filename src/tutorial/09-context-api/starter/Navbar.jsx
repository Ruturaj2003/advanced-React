import { useState, createContext, useContext } from 'react';
import NavbarLinks from './NavbarLinks';

export const NavbarContext = createContext();

// Custom Hook
export const useCustomContextHook = () => useContext(NavbarContext);
const Navbar = () => {
  const [user, setUser] = useState({ name: 'Ray' });
  const logOut = () => {
    setUser({
      name: 'Not Ray',
    });
  };
  console.log(user.name);
  return (
    <NavbarContext.Provider value={[user, logOut]}>
      <div>
        <NavbarLinks></NavbarLinks>
      </div>
    </NavbarContext.Provider>
  );
};
export default Navbar;
