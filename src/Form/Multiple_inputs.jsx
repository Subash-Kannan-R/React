import React, { useState } from "react";

const Multiple_inputs =() => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: ""
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Save to localStorage on submit
    localStorage.setItem("myFormData", JSON.stringify(formData));
    alert("Form data saved!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Name"
      />
      <input
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
      />
      <input
        name="age"
        value={formData.age}
        onChange={handleChange}
        placeholder="Age"
      />
      <button type="submit">Save</button>
    </form>
  );
}
export default Multiple_inputs;