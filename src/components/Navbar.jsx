import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">

      <h2 className="logo">
        🥕 Vegetable Market
      </h2>

      <div className="nav-links">

        <Link to="/">
          Home
        </Link>

        <Link to="/cart">
          🛒 Cart
        </Link>

        <Link to="/wishlist">
          ❤️ Wishlist
        </Link>

        <Link to="/checkout">
          💳 Checkout
        </Link>

        <Link to="/login">
          🔑 Login
        </Link>

      </div>

    </nav>
  );
}

export default Navbar;