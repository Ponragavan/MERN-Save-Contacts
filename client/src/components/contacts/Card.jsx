import React, { useState } from "react";
import { Link } from "react-router-dom";

const Card = ({ contact, id, onDelete, onEdit }) => {
  const [showModal, setShowModal] = useState(false);
  const [editedContact, setEditedContact] = useState(contact);

  const deleteHandler = () => {
    onDelete(id);
  };

  const editHandler = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const saveChanges = () => {
    onEdit(id, editedContact);
    setShowModal(false);
  };

  const handleChange = (e) => {
    setEditedContact({ ...editedContact, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="flex flex-col justify-between w-full h-auto p-4 m-1 overflow-hidden transition bg-white rounded shadow-lg sm:w-1/3 md:w-1/4 lg:w-1/6 hover:neon-pink">
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <img src="profile.png" alt="Profile" className="w-8 h-8" />
              <p className="text-lg font-semibold capitalize truncate">
                {contact.name}
              </p>
            </div>
            <div>
              <Link to={`/contact/${contact._id}`} className="hidden sm:flex">
                <img src="./arrow.png" alt="arrow" className="w-6 h-6" />
              </Link>
              <div className="flex gap-2 sm:hidden">
                <button
                  onClick={editHandler}
                  className="px-4 py-2 text-white transition bg-blue-500 rounded hover:bg-blue-600"
                >
                  Edit
                </button>
                <button
                  onClick={deleteHandler}
                  className="px-4 py-2 text-white transition bg-red-500 rounded hover:bg-red-600"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <img src="email.png" alt="Email" className="w-8 h-8" />
              <p className="text-lg font-semibold truncate">{contact.email}</p>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <img src="phone.png" alt="Phone" className="w-8 h-8" />
              <p className="text-lg font-semibold truncate">{contact.phone}</p>
            </div>
            <Link to={`/contact/${contact._id}`} className="sm:hidden">
              <img src="./arrow.png" alt="arrow" className="w-6 h-6" />
            </Link>
          </div>
        </div>
        <div className="hidden gap-2 mt-3 sm:flex">
          <button
            onClick={(e) => editHandler(e)}
            className="w-full px-4 py-2 font-semibold text-white transition bg-blue-500 rounded hover:neon-blue hover:bg-blue-600"
          >
            Edit
          </button>
          <button
            onClick={deleteHandler}
            className="w-full px-4 py-2 font-semibold text-white transition bg-red-500 rounded hover:neon-red hover:bg-red-600"
          >
            Delete
          </button>
        </div>
      </div>
      {/* Modal for editing */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-90">
          <div className="z-10 p-8 bg-white rounded-lg">
            <h2 className="mb-4 text-2xl font-bold">Edit Contact</h2>
            <input
              type="text"
              name="name"
              value={editedContact.name}
              onChange={handleChange}
              className="w-full p-2 mb-3 border-2 border-purple-300 rounded-md outline-none focus:neon-purple"
              placeholder="Name"
            />
            <input
              type="text"
              name="email"
              value={editedContact.email}
              onChange={handleChange}
              className="w-full p-2 mb-3 border-2 border-purple-300 rounded-md outline-none focus:neon-purple"
              placeholder="Email"
            />
            <input
              type="text"
              name="phone"
              value={editedContact.phone}
              onChange={handleChange}
              className="w-full p-2 mb-3 border-2 border-purple-300 rounded-md outline-none focus:neon-purple"
              placeholder="Phone"
            />
            <div className="flex justify-end">
              <button
                onClick={closeModal}
                className="px-4 py-2 mr-2 text-white transition bg-gray-400 rounded hover:bg-gray-500"
              >
                Cancel
              </button>
              <button
                onClick={saveChanges}
                className="px-4 py-2 text-white transition bg-blue-500 rounded hover:bg-blue-600"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Card;
