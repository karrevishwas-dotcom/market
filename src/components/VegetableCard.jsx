import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { WishlistContext } from "../context/WishlistContext";

function VegetableCard({ veg }) {

  const { addToCart } = useContext(CartContext);

  const {
    wishlist,
    addToWishlist,
    removeFromWishlist
  } = useContext(WishlistContext);

  const isWishlisted = wishlist.find(
    (item) => item.id === veg.id
  );

  const handleWishlist = () => {

    if (isWishlisted) {
      removeFromWishlist(veg.id);
    } else {
      addToWishlist(veg);
    }
  };

  return (
    <div className="card">

      <img
        src={veg.image}
        alt={veg.name}
        className="veg-image"
      />

      <h2>{veg.name}</h2>

      <h3>₹{veg.price}</h3>

      <button
        className="cart-btn"
        onClick={() => addToCart(veg)}
      >
        Add To Cart
      </button>

      <br />
      <br />

      <button
        className="wishlist-btn"
        onClick={handleWishlist}
      >
        {isWishlisted
          ? "❤️ Remove Wishlist"
          : "🤍 Add Wishlist"}
      </button>

      <p>

        {isWishlisted
          ? "❤️ Added to Wishlist"
          : "🤍 Not in Wishlist"}

      </p>

    </div>
  );
}

export default VegetableCard;