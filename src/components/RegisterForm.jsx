import { useState } from "react";
import "./CSSRegisterForm.css";

export default function RegisterForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.firstName.trim()) newErrors.firstName = "Името е задължително.";
    if (!formData.lastName.trim()) newErrors.lastName = "Фамилията е задължителна.";
    if (!formData.username.trim()) newErrors.username = "Username е задължителен.";
    if (formData.password.length < 6) newErrors.password = "Паролата трябва да е поне 6 символа.";
    if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = "Паролите не съвпадат.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Регистрацията е успешна!", formData);
      alert("Успешна регистрация!");
      setFormData({
        firstName: "",
        lastName: "",
        username: "",
        password: "",
        confirmPassword: "",
      });
      setErrors({});
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
          <label>Парола:</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} />
          {errors.password && <span className="error">{errors.password}</span>}
        </div>

        <div className="form-group">
          <label>Повторете паролата:</label>
          <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} />
          {errors.confirmPassword && <span className="error">{errors.confirmPassword}</span>}
        </div>

        <button type="submit" className="register-button">Регистрирай се</button>
      </form>
    </div>
  );
}
