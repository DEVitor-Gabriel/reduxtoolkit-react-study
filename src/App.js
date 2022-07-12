import { useSelector, useDispatch } from 'react-redux';
import counterSlice from './redux/modules/counter';

function App() {
  const { counter } = useSelector((state) => state.counter);
  const { decrementCounter, incrementCounter } =  counterSlice.actions;
  const dispatch = useDispatch();

  return (
    <div className="App">
      <p>{counter}</p>
      <button onClick={() => dispatch(incrementCounter())}>Increment</button>
      <button onClick={() => dispatch(decrementCounter())}>Decrement</button>
    </div>
  );
}

export default App;
