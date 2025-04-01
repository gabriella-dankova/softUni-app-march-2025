import { Link, useNavigate } from "react-router-dom"; // Поправен import
import { useState } from "react";
import { useAuth } from "../context/AuthContext"; // Импортирай useAuth
import "./CSSLoginForm.css";

export default function LoginForm() {
  const { login } = useAuth(); // Използвай Firebase вход
  const navigate = useNavigate(); // Функция за пренасочване

  const [formData, setFormData] = useState({
    email: "", // Промених username на email
    password: "",
  });

  const [error, setError] = useState(""); // За грешки
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Изчисти грешките

    try {
      setLoading(true);
      await login(formData.email, formData.password); // Вход с Firebase
      alert("Успешен вход!");
      navigate("/catalog"); // Пренасочи потребителя към /catalog
    } catch (error) {
      setError("Грешка при вход: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <h2>Вход</h2>
      <form onSubmit={handleSubmit} className="login-form">
        {error && <span className="error">{error}</span>} {/* Показване на грешки */}

        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email" // Променено от username на email
            value={formData.email}
            onChange={handleChange}
            placeholder="Въведете вашия email"
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

        <button type="submit" className="login-button" disabled={loading}>
          {loading ? "Влизане..." : "Вход"}
        </button>

        <div className="register-link">
          <Link to="/registerForm">Регистрирайте се</Link>
        </div>
      </form>
    </div>
  );
}

