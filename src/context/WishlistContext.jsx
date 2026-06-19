import { createContext, useState } from "react";

export const WishlistContext = createContext();

function WishlistProvider({ children }) {

  const [wishlist, setWishlist] = useState([]);

  const addToWishlist = (veg) => {

    const exist = wishlist.find(
      (item) => item.id === veg.id
    );

    if (!exist) {
      setWishlist([...wishlist, veg]);
    }
  };

  const removeFromWishlist = (id) => {

    setWishlist(
      wishlist.filter(
        (item) => item.id !== id
      )
    );
  };

  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        addToWishlist,
        removeFromWishlist
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
}

export default WishlistProvider;