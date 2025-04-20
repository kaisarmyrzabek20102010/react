import { useReducer } from "react";

export default function Counter() {
  const initialState = {
    count: 0,
  };

  function CountReducer(state, action) {
    if(state.count < 0) {
        return { count: 0 };
    }
    switch (action.type) {
      case "increment":
        return { count: state.count + 1 };
      case "decrement":
        return { count: state.count - 1 };
      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(CountReducer, initialState);

  return (
    <>
      <h1>Count: {state.count}</h1>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
    </>
  );
}
