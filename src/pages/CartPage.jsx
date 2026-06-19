import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function CartPage() {
  const { cart, removeFromCart } = useContext(CartContext);

  const totalBill = cart.reduce(
    (total, item) => total + item.price,
    0
  );

  return (
    <div className="cart-page">

      <h1>🛒 My Cart</h1>

      {cart.length === 0 ? (
        <h2>Your Cart is Empty</h2>
      ) : (
        <>
          {cart.map((item) => (
            <div
              className="cart-item"
              key={item.id}
            >

              <img
                src={item.image}
                alt={item.name}
                width="100"
              />

              <div>
                <h2>{item.name}</h2>
                <h3>₹{item.price}</h3>
              </div>

              <button
                onClick={() =>
                  removeFromCart(item.id)
                }
              >
                Remove
              </button>

            </div>
          ))}

          <hr />

          <div className="bill-box">

            <h2>
              Total Items : {cart.length}
            </h2>

            <h1>
              Total Bill : ₹{totalBill}
            </h1>

          </div>

        </>
      )}

    </div>
  );
}

export default CartPage;