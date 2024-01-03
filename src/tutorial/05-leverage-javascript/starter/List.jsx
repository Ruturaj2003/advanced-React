import { people } from '../../../data';
const List = () => {
  return (
    <div>
      <h2>List</h2>
      <ul>
        {people.map((peron) => {
          return (
            <li key={peron.name}>
              {peron?.images?.map((img) => {
                console.log(img?.small);
                return <p>{img?.small?.url} </p>;
              })}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default List;
