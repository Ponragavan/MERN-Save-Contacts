import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const ContactDetails = () => {
  const [contact, setContact] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const fetchContact = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/contact/${id}`);
        setContact(response.data.contact);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching contact:", error);
      }
    };

    fetchContact();
  }, [id]);

  return (
    <div className="flex items-center justify-center min-h-screen px-4 py-10">
      {isLoading ? (
        <span className="absolute w-12 h-12 border-4 rounded-full top-1/4 left-1/2 border-r-purple-600 animate-spin"></span>
      ) : (
        <div className="w-full max-w-lg p-8 bg-white rounded-lg shadow-md">
          <h1 className="mb-6 text-3xl font-bold text-center text-purple-600">
            Contact Details
          </h1>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-bold text-gray-700">
              Name
            </label>
            <p className="text-lg text-gray-900">{contact.name}</p>
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-bold text-gray-700">
              Email
            </label>
            <p className="text-lg text-gray-900">{contact.email}</p>
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-bold text-gray-700">
              Phone
            </label>
            <p className="text-lg text-gray-900">{contact.phone}</p>
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-bold text-gray-700">
              Description
            </label>
            <p className="text-lg text-gray-900">{contact.description}</p>
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-bold text-gray-700">
              Date of Creation
            </label>
            <p className="text-lg text-green-700">
              {new Date(contact.date).toLocaleDateString()}
            </p>
          </div>
          <button
            onClick={() => window.history.back()}
            className="w-full px-4 py-2 mt-4 text-white transition duration-300 ease-in-out bg-purple-600 rounded-md hover:neon-purple"
          >
            Go Back
          </button>
        </div>
      )}
    </div>
  );
};

export default ContactDetails;
