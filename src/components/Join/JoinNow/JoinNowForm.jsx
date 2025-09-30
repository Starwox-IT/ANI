import React, { useState } from "react";

export default function JoinNowForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    background: "",
    reason: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Your application has been submitted!");
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 space-y-12">
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
        className="w-full border border-[#D2D5DA] text-xl rounded-lg p-3 py-6 focus:outline-none focus:ring-2 focus:ring-[#D2D5DA]"
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        className="w-full border border-[#D2D5DA] text-xl rounded-lg p-3 py-6 focus:outline-none focus:ring-2 focus:ring-[#D2D5DA]"
      />
      <input
        type="text"
        name="background"
        placeholder="Background"
        value={formData.background}
        onChange={handleChange}
        className="w-full border border-[#D2D5DA] text-xl rounded-lg p-3 py-6 focus:outline-none focus:ring-2 focus:ring-[#D2D5DA]"
      />
      <textarea
        name="reason"
        placeholder="Why do you want to join?"
        rows="8"
        value={formData.reason}
        onChange={handleChange}
        className="w-full border border-[#D2D5DA] text-xl rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#D2D5DA]"
      />
      <button
        type="submit"
        className="max-w-[390px] bg-[#007E3F] text-white py-3 px-4 mx-auto flex rounded-lg font-semibold hover:bg-green-900"
      >
        Submit Application
      </button>
    </form>
  );
}
