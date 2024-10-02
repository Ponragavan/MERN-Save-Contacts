import React from "react";
import { Link } from "react-router-dom";

const Content = () => {
  return (
    <main className="flex flex-col items-center mt-4 px-4 lg:px-8 xl:px-16">
      <h1 className="my-2 uppercase text-5xl font-bold bg-gradient-to-b from-purple-200 via-purple-500 to-purple-700 text-transparent bg-clip-text text-center">
        Contact Details
      </h1>
      <p className="text-2xl my-3 text-white text-center">
        The Contact Details storage system used for all.
      </p>
      <p className="text-xl my-3 text-white text-center">
        Both your friend's and your own contact information can be stored.
      </p>
      <Link
        to='/contacts'
        className="bg-purple-600 my-5 px-6 lg:px-10 py-3 text-white font-medium text-lg rounded-full transition ease-in-out duration-200 hover:neon-purple"
      >
        View All Contacts
      </Link>
    </main>
  );
};

export default Content;
