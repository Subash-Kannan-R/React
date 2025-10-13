import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Letterpage = () => {
  const [data, setData] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const storedData = localStorage.getItem("permissionData");
    if (storedData) {
      setData(JSON.parse(storedData));
    } else {
      navigate("/");
    }
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="bg-white p-8 rounded-2xl shadow-lg max-w-lg w-full">
        <h2 className="text-2xl font-semibold text-center mb-4">
          Permission Letter
        </h2>
        <p className="mb-3">Date: {new Date().toLocaleDateString()}</p>

        <p>To,</p>
        <p>{data.role}</p>
        <p>Company Name</p>
        <p>{data.city}</p>

        <br />
        <p>Dear Sir/Madam,</p>
        <p className="mt-2 leading-relaxed">
          I, <strong>{data.name}</strong> (Email: {data.email}, Mobile: {data.mobile}), 
          am writing to request permission for the following reason: 
        </p>
        <p className="italic mt-2">"{data.reason}"</p>

        <p className="mt-4">
          I kindly request your approval for the same.
        </p>

        <p className="mt-6">Thank you for your consideration.</p>

        <br />
        <p>Sincerely,</p>
        <p><strong>{data.name}</strong></p>
        <p>{data.city}</p>

        <button
          onClick={() => navigate("/")}
          className="mt-6 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
        >
          Back to Form
        </button>
      </div>
    </div>
  );
};

export default Letterpage;
