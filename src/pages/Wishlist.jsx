import { useContext } from "react";
import { WishlistContext } from "../context/WishlistContext";

function Wishlist() {

  const {
    wishlist,
    removeFromWishlist
  } = useContext(WishlistContext);

  return (
    <div className="wishlist-page">

      <h1>❤️ My Wishlist</h1>

      {
        wishlist.length === 0 ? (

          <h2>
            Your Wishlist is Empty
          </h2>

        ) : (

          wishlist.map((veg) => (

            <div
              key={veg.id}
              className="wishlist-card"
            >

              <img
                src={veg.image}
                alt={veg.name}
                className="veg-image"
              />

              <h2>{veg.name}</h2>

              <h3>₹{veg.price}</h3>

              <button
                onClick={() =>
                  removeFromWishlist(
                    veg.id
                  )
                }
              >
                ❤️ Remove
              </button>

            </div>

          ))

        )
      }

    </div>
  );
}

export default Wishlist;