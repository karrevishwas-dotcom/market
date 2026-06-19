import { HashRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import ErrorBoundary from "./components/ErrorBoundary";

import Home from "./pages/Home";
import CartPage from "./pages/CartPage";
import Wishlist from "./pages/Wishlist";
import Checkout from "./pages/Checkout";
import Login from "./pages/Login";
import VegetableDetails from "./pages/VegetableDetails";

import Admin from "./pages/Admin";
import AdminProducts from "./pages/AdminProducts";

import ProtectedRoute from "./routes/ProtectedRoute";

import "./App.css";

function App() {
  return (
    <HashRouter>
      <ErrorBoundary>
        <Navbar />

        <Routes>
          <Route
            path="/"
            element={<Home />}
          />

          <Route
            path="/login"
            element={<Login />}
          />

          <Route
            path="/cart"
            element={<CartPage />}
          />

          <Route
            path="/wishlist"
            element={<Wishlist />}
          />

          <Route
            path="/checkout"
            element={
              <ProtectedRoute>
                <Checkout />
              </ProtectedRoute>
            }
          />

          <Route
            path="/vegetable/:id"
            element={<VegetableDetails />}
          />

          <Route
            path="/admin"
            element={<Admin />}
          >
            <Route
              path="products"
              element={<AdminProducts />}
            />
          </Route>

          <Route
            path="*"
            element={
              <h1 style={{ textAlign: "center" }}>
                404 Page Not Found
              </h1>
            }
          />
        </Routes>
      </ErrorBoundary>
    </HashRouter>
  );
}

export default App;