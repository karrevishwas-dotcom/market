import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {

  const [cart, setCart] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    localStorage.setItem(
      "cart",
      JSON.stringify(cart)
    );
  }, [cart]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const removeFromCart = (id) => {
    setCart(
      cart.filter((item) => item.id !== id)
    );
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        search,
        setSearch
      }}
    >
      {children}
    </CartContext.Provider>
  );
};