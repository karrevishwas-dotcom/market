import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function CartPage() {
  const { cart, removeFromCart } = useContext(CartContext);

  const total = cart.reduce((sum, item) => {
    return sum + item.price;
  }, 0);

  return (
    <div>
      <h1>My Cart</h1>

      {cart.length === 0 ? (
        <h3>Cart is Empty</h3>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <h2>{item.name}</h2>

              <img
                src={item.image}
                alt={item.name}
                width="120"
              />

              <h3>₹{item.price}</h3>

              <button
                onClick={() => removeFromCart(item.id)}
              >
                Remove
              </button>

              <hr />
            </div>
          ))}

          <h2>Total : ₹{total}</h2>
        </>
      )}
    </div>
  );
}

export default CartPage;