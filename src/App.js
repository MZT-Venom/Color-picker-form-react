import React, { useState } from 'react';
import styles from './App.module.css'; // CSS module for styling

function Form() {
  const [backgroundColor, setBackgroundColor] = useState('#f1f1f1');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    contact: '',
    email: '',
    description: '',
    color: '#f1f1f1',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleColorChange = (event) => {
    const { value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      color: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setBackgroundColor(formData.color);
  };

  return (
    <div className={styles.screen} style={{ backgroundColor }}>
      <h1 className={styles.title}>Form</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label className={styles.label} htmlFor="firstName">
          First Name:
        </label>
        <input
          className={styles.input}
          type="text"
          id="firstName"
          name="firstName"
          value={formData.firstName}
          onChange={handleInputChange}
          required
        />

        <label className={styles.label} htmlFor="lastName">
          Last Name:
        </label>
        <input
          className={styles.input}
          type="text"
          id="lastName"
          name="lastName"
          value={formData.lastName}
          onChange={handleInputChange}
          required
        />

        <label className={styles.label} htmlFor="contact">
          Contact:
        </label>
        <input
          className={styles.input}
          type="tel"
          id="contact"
          name="contact"
          value={formData.contact}
          onChange={handleInputChange}
          required
        />

        <label className={styles.label} htmlFor="email">
          Email:
        </label>
        <input
          className={styles.input}
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />

        <label className={styles.label} htmlFor="description">
          Description:
        </label>
        <textarea
          className={styles.textarea}
          id="description"
          name="description"
          value={formData.description}
          onChange={handleInputChange}
          required
        />

        <label className={styles.label} htmlFor="color">
          Color:
        </label>
        <input
          className={styles.colorPicker}
          type="color"
          id="color"
          name="color"
          value={formData.color}
          onChange={handleColorChange}
          required
        />

        <button className={styles.submitButton} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;
