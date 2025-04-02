import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom"; 
import "./CSSRegisterForm.css";

export default function RegisterForm() {
  const { register } = useAuth;
  const navigate = useNavigate(); 
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.firstName.trim()) newErrors.firstName = "Името е задължително.";
    if (!formData.lastName.trim()) newErrors.lastName = "Фамилията е задължителна.";
    if (!formData.username.trim()) newErrors.username = "Username е задължителен.";
    if (!formData.email.trim() || !formData.email.includes("@")) newErrors.email = "Въведете валиден email.";
    if (formData.password.length < 6) newErrors.password = "Паролата трябва да е поне 6 символа.";
    if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = "Паролите не съвпадат.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      setLoading(true);
      await register(formData.email, formData.password);
      alert("Успешна регистрация!");
      
      setFormData({
        firstName: "",
        lastName: "",
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
      setErrors({});
      
      navigate("/catalog"); 
    } catch (error) {
      setErrors({ firebase: "Грешка при регистрация: " + error.message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="register-container">
      <h1>Регистрация</h1>
      <form onSubmit={handleSubmit} className="register-form">
        <div className="form-group">
          <label>Име:</label>
          <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
          {errors.firstName && <span className="error">{errors.firstName}</span>}
        </div>

        <div className="form-group">
          <label>Фамилия:</label>
          <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
          {errors.lastName && <span className="error">{errors.lastName}</span>}
        </div>

        <div className="form-group">
          <label>Username:</label>
          <input type="text" name="username" value={formData.username} onChange={handleChange} />
          {errors.username && <span className="error">{errors.username}</span>}
        </div>

        <div className="form-group">
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>

        <div className="form-group">
          <label>Парола:</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} />
          {errors.password && <span className="error">{errors.password}</span>}
        </div>

        <div className="form-group">
          <label>Повторете паролата:</label>
          <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} />
          {errors.confirmPassword && <span className="error">{errors.confirmPassword}</span>}
        </div>

        {errors.firebase && <span className="error">{errors.firebase}</span>}

        <button type="submit" className="register-button" disabled={loading}>
          {loading ? "Регистриране..." : "Регистрирай се"}
        </button>
      </form>
    </div>
  );
}
