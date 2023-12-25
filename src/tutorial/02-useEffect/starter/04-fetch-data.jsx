import { useState, useEffect } from 'react';

const url = 'https://api.github.com/users';

const FetchData = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const retrieveData = async (url) => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data); // Add parentheses to call the json method
        setUsers(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    retrieveData(url);

    console.log(users);
  }, []);
  return (
    <>
      <h2>fetch data example</h2>
      <ul className="users">
        {users.map((user) => {
          return (
            <li className="users-li" key={user.id}>
              <img src={user.avatar_url} alt={user.login} />
              <h3>{user.login}</h3>

              <a className="" href={user.html_url}>
                {' '}
                Follow
              </a>
            </li>
          );
        })}
      </ul>
    </>
  );
};
export default FetchData;
