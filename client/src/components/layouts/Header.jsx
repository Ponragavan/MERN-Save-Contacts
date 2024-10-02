import React from "react";
import { useNavigate, useLocation,Link } from "react-router-dom";
import Search from "../search/Search";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const redirectToHome = () => {
    navigate('/');
  };

  return (
    <header className="flex p-6 items-center justify-around">
      <div
        onClick={redirectToHome}
        className="flex gap-3 items-center justify-end cursor-pointer"
      >
        <img src="./cube.png" alt="cube" width={40} />
        <h1 className="text-white uppercase text-2xl font-bold">My Contacts</h1>
      </div>
      {location.pathname !== '/' && <Search />}
      <Link to='/new' className="px-5 py-2 rounded font-semibold transition ease-in-out duration-200 bg-amber-400 hover:neon-amber">
        Add New
      </Link>
    </header>
  );
};

export default Header;
