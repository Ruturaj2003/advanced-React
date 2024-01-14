import UserContainer from './UserContainer';

const NavbarLinks = ({ user, logOut }) => {
  return (
    <div>
      <UserContainer user={user} logOut={logOut}></UserContainer>
    </div>
  );
};
export default NavbarLinks;
