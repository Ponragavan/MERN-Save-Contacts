import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../layouts/Header";
import Card from "./Card";
import { toast } from "react-toastify";

const Contacts = () => {
  const [contacts, setContacts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchContacts = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(import.meta.env.VITE_BACKEND_URL);
        setContacts(response.data.contacts);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching contacts:", error);
      }
    };

    fetchContacts();
  }, []);

  const handleDelete = async (id) => {
    if(window.confirm(`Are you sure you want to delete?`)){
      try {
        await axios.delete(`${import.meta.env.VITE_BACKEND_URL}/delete/${id}`);
        toast.success("Contact deleted successfully.");
        setContacts((prevContacts) => prevContacts.filter((contact) => contact._id!== id));
      } catch (error) {
        toast.error(error.response.data.message);
      }
    }
  };

  const handleEdit = async (id, editedContact) => {
    try {
      await axios.put(`${import.meta.env.VITE_BACKEND_URL}/update/${id}`, editedContact);
      toast.success("Contact updated successfully.");
      setContacts((prevContacts) =>
        prevContacts.map((contact) => (contact._id === id ? editedContact : contact))
      );
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <div>
      <Header />
      {isLoading ? (
        <span className="absolute w-12 h-12 border-4 rounded-full top-1/4 left-1/2 border-r-purple-600 animate-spin"></span>
      ) : (
        <div className="flex flex-wrap justify-center mt-12">
          {contacts.length > 0 ? (
            contacts.map((contact) => (
              <Card
                key={contact._id}
                contact={contact}
                id={contact._id}
                onDelete={handleDelete}
                onEdit={handleEdit}
              />
            ))
          ) : (
            <p className="text-xl text-white capitalize">
              No contacts available.
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default Contacts;
