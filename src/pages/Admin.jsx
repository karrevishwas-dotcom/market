import { Link, Outlet } from "react-router-dom";

function Admin() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Admin Dashboard</h1>

      <Link to="products">
        Manage Products
      </Link>

      <hr />

      <Outlet />
    </div>
  );
}

export default Admin;