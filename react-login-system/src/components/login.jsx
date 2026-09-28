import { useState } from "react";

function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // Demo username and password
    if (username === "admin" && password === "1234") {

      // User information
      const payload = {
        userId: 101,
        role: "Admin"
      };

      // Create simulated JWT/token
      const token = btoa(JSON.stringify(payload));

      // Store token in localStorage
      localStorage.setItem("token", token);

      // Send user information to App
      onLogin(payload);

    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="login-container">

      <h2>Login</h2>

      <form onSubmit={handleLogin}>

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">
          Login
        </button>

      </form>

      {error && <p className="error">{error}</p>}

      <p>Username: admin</p>
      <p>Password: 1234</p>

    </div>
  );
}

export default Login;