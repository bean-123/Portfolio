import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div style={{ textAlign: "center", padding: "6rem 2rem" }}>
      <h1 style={{ fontWeight: "lighter", fontSize: "4rem" }}>404</h1>
      <p style={{ color: "#666", marginBottom: "2rem" }}>
        This page doesn't exist.
      </p>
      <Link to="/" style={{ color: "#333", textDecoration: "underline" }}>
        ← back home
      </Link>
    </div>
  );
};

export default NotFoundPage;
