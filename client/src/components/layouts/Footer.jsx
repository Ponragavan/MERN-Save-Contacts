import React from "react";

const Footer = () => {
  return (
    <footer className="flex flex-col md:flex-row mt-10 gap-10 justify-center items-center lg:items-start px-4">
      <div className="w-full lg:w-1/5 h-72 bg-black rounded-lg p-5 neon-purple mb-10 lg:mb-0">
        <h1 className="text-white text-xl">Accessibility</h1>
        <br />
        <hr />
        <p className="text-stone-300 text-lg">
          Accessible from anywhere with an internet connection, making it
          convenient for users to manage their contacts on-the-go.
        </p>
      </div>
      <div className="w-full lg:w-1/5 h-72 bg-black rounded-lg p-5 neon-purple mb-10 lg:mb-0">
        <h1 className="text-white text-xl">Secure Storage</h1>
        <br />
        <hr />
        <p className="text-stone-300 text-lg">
          Utilizes robust security measures to ensure the safety of stored
          contact details.
        </p>
      </div>
      <div className="w-full lg:w-1/5 h-72 bg-black rounded-lg p-5 neon-purple mb-10 lg:mb-0">
        <h1 className="text-white text-xl">Search Functionality</h1>
        <br />
        <hr />
        <p className="text-stone-300 text-lg">
          Includes a search feature for quick and efficient retrieval of
          specific contact information.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
