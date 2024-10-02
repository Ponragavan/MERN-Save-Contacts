import React, { useState } from "react";
import { useNavigate,Link } from "react-router-dom";
import axios from "axios";
import { toast } from 'react-toastify';


const NewContact = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    description: "",
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const goBack = () => {
    window.history.back();
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!data.name || !data.email || !data.phone || !data.description) {
      toast.error("Please fill in all necessary fields");
      return;
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!data.email.match(emailPattern)) {
      toast.error("Invalid email address")
      return;
    }
    const phonePattern = /^\d{10}$/;
    if (!data.phone.match(phonePattern)) {
      toast.error("Invalid phone number");
      return;
    }
    try {
      await axios.post(`${import.meta.env.VITE_BACKEND_URL}/new`, data);
      console.log("Added contact");
      navigate("/contacts");
      toast.success("Contact added successfully");
    } catch (error) {
        toast.error(error.response.data.message);
    }
  };

  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
        <div className="z-10 p-8 bg-white rounded-lg">
          <h2 className="mb-4 text-2xl font-bold">New Contact</h2>
          <input
            type="text"
            name="name"
            onChange={handleChange}
            className="w-full p-2 mb-3 border-2 border-purple-300 rounded-md outline-none focus:neon-purple"
            placeholder="Name"
          />
          <input
            type="text"
            name="email"
            onChange={handleChange}
            className="w-full p-2 mb-3 border-2 border-purple-300 rounded-md outline-none focus:neon-purple"
            placeholder="Email"
          />
          <input
            type="text"
            name="phone"
            onChange={handleChange}
            className="w-full p-2 mb-3 border-2 border-purple-300 rounded-md outline-none focus:neon-purple"
            placeholder="Phone"
          />
          <input
            type="text"
            name="description"
            onChange={handleChange}
            className="w-full p-2 mb-3 border-2 border-purple-300 rounded-md outline-none focus:neon-purple"
            placeholder="Description"
          />
          <div className="flex justify-end">
            <Link onClick={goBack} className="px-4 py-2 mr-2 text-white transition bg-gray-400 rounded hover:bg-gray-500">
              Cancel
            </Link>
            <button
              onClick={handleSubmit}
              className="px-4 py-2 text-white transition bg-blue-500 rounded hover:bg-blue-600"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewContact;
