import { useSelector, useDispatch } from 'react-redux';
import counterSlice, { incrementAsync } from './store/modules/counter';

function App() {
  const { counter } = useSelector((state) => state.counter);
  const { decrementCounter, incrementCounter } =  counterSlice.actions;
  const dispatch = useDispatch();

  return (
    <div className="App">
      <p style={{ marginLeft: '2rem' }}>{counter}</p>
      <button onClick={() => dispatch(incrementCounter())}>Increment</button>
      <button onClick={() => dispatch(decrementCounter())}>Decrement</button>
      <button onClick={() => dispatch(incrementAsync(2))}>Increment 2 after 3 seconds</button>
    </div>
  );
}

export default App;
