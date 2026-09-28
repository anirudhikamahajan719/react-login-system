function ProtectedRoute({ children }) {
  const token = localStorage.getItem("token");

  if (!token) {
    return <p>Please login to access this page.</p>;
  }

  return children;
}

export default ProtectedRoute;