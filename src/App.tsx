import "./App.css";
import { decrement, increment } from "./redux/features/Counter/CounterSlice";
import { useAppDispatch, useAppSeletor } from "./redux/hook";
import { RootState } from "./redux/store";

function App() {
  const dispatch = useAppDispatch();
  const hadnleIncrement = (amount: number) => {
    dispatch(increment(amount));
  };
  const hadnleDecrement = (amount: number) => {
    dispatch(decrement(amount));
  };

  const { count } = useAppSeletor((state: RootState) => state.counter);

  return (
    <div>
      <h1>React Redux</h1>
      <button onClick={() => hadnleIncrement(5)}>Increment by 5</button>
      <button onClick={() => hadnleIncrement(1)}>Increment</button>
      <div>{count}</div>
      <button onClick={() => hadnleDecrement(5)}>Decrement by 5</button>
      <button onClick={() => hadnleDecrement(1)}>Decrement</button>
    </div>
  );
}

export default App;
