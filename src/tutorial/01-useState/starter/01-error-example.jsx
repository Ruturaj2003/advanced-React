const updateCount = () => {
  count = count + 1;
  console.log(count);
};
let count = 0;

const ErrorExample = () => {
  return (
    <div>
      <h2>useState error example</h2>
      <h4>Count {count}</h4>
      <button className="btn" onClick={updateCount}>
        Click me
      </button>
    </div>
  );
};
export default ErrorExample;
