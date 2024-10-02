import React, { useEffect, useState } from "react";
import Card from "../contacts/Card";
import Header from "../layouts/Header";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";

const SearchContacts = () => {
  const [keyword, setKeyword] = useState("");
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const [contacts, setContacts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setKeyword(searchParams.get("q"));
  }, [location]);

  useEffect(() => {
    // Set keyword when searchParams change

    // Fetch contacts only if keyword is not empty
    if (keyword) {
      async function getSearchContacts() {
        setIsLoading(true);
        try {
          const response = await axios.get(
            `${import.meta.env.VITE_BACKEND_URL}/search?keywords=${keyword}`
          );
          setContacts(response.data.contacts);
          setIsLoading(false);
        } catch (error) {
          console.log("Error fetching contacts:", error);
        }
      }
      getSearchContacts();
    }
  }, [keyword]);

  return (
    <div>
      <Header />
      <div className="flex gap-5 mt-3 justify-center max-[500px]:translate-y-10">
        <Link to='/contacts'><img src="./left-arrow.png" alt="goback" className="w-8 h-8 p-1 bg-white rounded-full" /></Link>
        <p className="text-lg text-white">
          Search results for '{keyword}'
        </p>
      </div>
      {isLoading ? (
        <span className="absolute w-12 h-12 border-4 rounded-full top-1/4 left-1/2 border-r-purple-600 animate-spin"></span>
      ) : (
        <div className="flex flex-wrap justify-center mt-4 max-[500px]:translate-y-10">
          {contacts.length > 0 ? (
            contacts.map((contact) => (
              <Card key={contact._id} contact={contact} id={contact._id} />
            ))
          ) : (
            <p className="absolute top-1/4 max-[500px]:left-28 text-xl capitalize text-white">
              No contacts available.
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchContacts;
