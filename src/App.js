import { useSelector } from 'react-redux';

function App() {
  const { counter } = useSelector((state) => state.counter);

  return (
    <div className="App">
      <p>{counter}</p>
    </div>
  );
}

export default App;
