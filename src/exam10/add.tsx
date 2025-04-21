import "./add.css";
import { useCart } from "./CartContext";

const App = () => {
  const { state, dispatch } = useCart();

  const products = [
    { id: 1, name: "copybook", price: 200 },
    { id: 2, name: "laptop", price: 210000 },
    { id: 3, name: "headphones", price: 8000 },
    {id: 4, name: "mouse", price: 5000 },
    {id: 5, name: "keyboard", price: 10000 },
    {id: 6, name: "display", price: 50000 },
  ];

  const addToCart = (product) => {
    dispatch({ type: "ADD_TO_CART", payload: product });
  };

  const removeFromCart = (productId) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: productId });
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  const Price = state.cart.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);

  return (
    <div className="appContainer">
      <div className="appContent">
        <div className="productList">
          <h2>products</h2>
          {products.map((product) => (
            <div key={product.id} className="productItem">
              <span className="productName">
                {product.name} - {product.price}₸
              </span>
              <button onClick={() => addToCart(product)} className="addButton">
                buy
              </button>
            </div>
          ))}
        </div>
        <div>
          {state.cart.length > 1 && <h2>korzina</h2>}
          {state.cart.map((item) => (
            <div key={item.id} className="cartItem">
              <span>
                {item.name} - {item.price}₸ x {item.quantity}
              </span>
              <button
                onClick={() => removeFromCart(item.id)}
                className="removeButton"
              >
                delete
              </button>
            </div>
          ))}
          <p>total price:{Price}₸</p>
          {state.cart.length > 1 && (
            <button onClick={clearCart} className="removeButton">
              delete all
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
