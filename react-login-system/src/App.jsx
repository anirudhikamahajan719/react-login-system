import { useState } from "react";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import "./App.css";

function App() {

  const [user, setUser] = useState(null);

  const handleLogin = (userData) => {
    setUser(userData);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  return (
    <div>

      {!user ? (
        <Login onLogin={handleLogin} />
      ) : (
        <ProtectedRoute>
          <Dashboard
            user={user}
            onLogout={handleLogout}
          />
        </ProtectedRoute>
      )}

    </div>
  );
}

export default App;