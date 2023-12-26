import { useEffect, useState } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';

const MultipleReturnsFetchData = () => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const resp = await fetch(url);
        const data = await resp.json();
        setUser(data);
      } catch (error) {
        console.log('Well GG WP');
        setIsError(true);
      }
      setIsLoading(false);
    };
    fetchUser();
    console.log(user);
  }, []);

  if (isLoading) {
    return (
      <>
        <h3>Magic is Happening!!.</h3>
        <h4>Please Wait A Moment</h4>
      </>
    );
  }
  if (isError) {
    return <h3>Something went Wrong</h3>;
  }

  return (
    <>
      <h2>Fetch Data </h2>
      <h3>{user.login}</h3>
      <img
        style={{ widht: '150px', borderRadius: '15px' }}
        src={user.avatar_url}
        alt=""
      />
      <h4>
        <a href={user.html_url}>@Follow</a>
      </h4>
      <h4>{user.bio}</h4>
      <h5>{user.company}</h5>
      <h6>{user.location}</h6>
    </>
  );
};
export default MultipleReturnsFetchData;
