import { useReducer, useEffect } from "react";
import './add.css'

const initialState = {
  loading: false,
  data: null,
  error: ''
};

function FetchReducer(state, action) {
  switch(action.type) {
    case "start":
      return { ...state, loading: true, error: '' };
    case "success":
      return { ...state, loading: false, data: action.payload };
    case "error":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
}

export default function Reducer_2() {
  const [state, dispatch] = useReducer(FetchReducer, initialState);

  useEffect(() => {
    async function fetchData() {
      try {
        dispatch({ type: "start" });
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        console.log(data);
        dispatch({ type: "success", payload: data });
      } catch (error) {
        dispatch({ type: "error", payload: "" });
      }
    }

    fetchData();
  }, []);

  return(
    <>
      <h1>FETCHING API</h1>
  
      {state.loading && <h2>Loading...</h2>}
  
      {state.error && <h2>{state.error}</h2>}
  
      {state.data && (
        <div className="cards">
          {state.data.map(item => (
            <div key={item.id} className="card">
              <h2>{item.title}</h2>
              <img src={item.image} alt="" />
              <p>{item.category}</p>
              <p>Price: {item.price}</p>
            </div>
          ))}
        </div>
      )}
    </>
  );
  
}