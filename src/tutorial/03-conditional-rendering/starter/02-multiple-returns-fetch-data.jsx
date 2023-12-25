import { useEffect, useState } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';

const MultipleReturnsFetchData = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const resp = await fetch(url);
        const data = await resp.json();
        setUser(data);
      } catch (error) {
        console.log('Well GG WP');
      }
    };
    fetchUser();
    console.log(user);
  }, []);
  return (
    <>
      <h2>Fetch Data </h2>
    </>
  );
};
export default MultipleReturnsFetchData;
