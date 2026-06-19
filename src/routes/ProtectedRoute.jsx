import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const isLoggedIn = localStorage.getItem("login");

  if (isLoggedIn === "true") {
    return children;
  }

  return <Navigate to="/login" />;
}

export default ProtectedRoute;