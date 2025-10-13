import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Formpage = () => {
  const [formData, setFormData] = useState({
    name: "",
    city: "",
    mobile: "",
    email: "",
    role: "TL",
    reason: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Store in localStorage to pass data between pages
    localStorage.setItem("permissionData", JSON.stringify(formData));
    navigate("/letter");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-2xl shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-semibold text-center mb-4">Permission Form</h2>

        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          className="border p-2 rounded w-full mb-3"
          required
        />

        <input
          type="text"
          name="city"
          placeholder="City"
          value={formData.city}
          onChange={handleChange}
          className="border p-2 rounded w-full mb-3"
          required
        />

        <input
          type="tel"
          name="mobile"
          placeholder="Mobile Number"
          value={formData.mobile}
          onChange={handleChange}
          className="border p-2 rounded w-full mb-3"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="border p-2 rounded w-full mb-3"
          required
        />

        <select
          name="role"
          value={formData.role}
          onChange={handleChange}
          className="border p-2 rounded w-full mb-3"
        >
          <option value="TL">Team Lead (TL)</option>
          <option value="MANAGER">Manager</option>
          <option value="GM">General Manager (GM)</option>
        </select>

        <textarea
          name="reason"
          placeholder="Reason for Permission"
          value={formData.reason}
          onChange={handleChange}
          className="border p-2 rounded w-full mb-3 h-24"
          required
        />

        <button
          type="submit"
          className="bg-blue-600 text-white py-2 rounded w-full hover:bg-blue-700 transition"
        >
          Generate Permission Letter
        </button>
      </form>
    </div>
  );
};

export default Formpage;
