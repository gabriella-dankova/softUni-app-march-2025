import { Link } from "react-router";
import { useState } from "react";
import "./CSSLoginForm.css";

export default function LoginForm() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Вход с потребител:", formData);
    alert("Успешен вход!");
  };

  return (
    <div className="login-container">
      <h2>Вход</h2>
      <form onSubmit={handleSubmit} className="login-form">
        <div className="form-group">
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Въведете вашето потребителско име"
          />
        </div>

        <div className="form-group">
          <label>Парола:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Въведете паролата си"
          />
        </div>

        <div className="forgot-password">
          <a href="#">Забравена парола?</a>
        </div>

        <button type="submit" className="login-button">
          Вход
        </button>

        <div className="register-link">
          <Link to="/registerForm">Регистрирайте се</Link>
        </div>
      </form>
    </div>
  );
}
