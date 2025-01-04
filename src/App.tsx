import { Outlet } from "react-router";
import "./App.css";
// import { Button } from "./components/ui/button";
import Navbar from "./Navbar/Navbar";
// import { decrement, increment } from "./redux/features/Counter/CounterSlice";
// import { useAppDispatch, useAppSeletor } from "./redux/hook";
// import { RootState } from "./redux/store";

function App() {
  // const dispatch = useAppDispatch();
  // const hadnleIncrement = (amount: number) => {
  //   dispatch(increment(amount));
  // };
  // const hadnleDecrement = (amount: number) => {
  //   dispatch(decrement(amount));
  // };

  // const { count } = useAppSeletor((state: RootState) => state.counter);

  return (
    <div>
      {/* <h1>React Redux</h1>
      <Button onClick={() => hadnleIncrement(5)}>Increment by 5</Button>
      <Button onClick={() => hadnleIncrement(1)}>Increment</Button>
      <div>{count}</div>
      <Button onClick={() => hadnleDecrement(5)}>Decrement by 5</Button>
      <Button onClick={() => hadnleDecrement(1)}>Decrement</Button> */}
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;
