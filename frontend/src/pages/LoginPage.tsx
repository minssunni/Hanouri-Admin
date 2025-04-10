import { useState } from "react";
import { userList } from "../mockData/draftUserList";
import { useNavigate } from "react-router-dom";
import styles from "../styles/LoginPage.module.css";
import Logo from "../assets/hanouri_logo.png";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    const user = userList.find(
      (user) => user.username === username && user.password === password
    );

    if (user) {
      navigate("/");
    } else {
      setError("Invalid username and/or password. Please try again.");
    }
  };

  return (
    <div className={styles.loginPage}>
      <img src={Logo} alt="Logo" />
      <input
        type="text"
        className={styles.username}
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        className={styles.password}
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
};

export default LoginPage;
