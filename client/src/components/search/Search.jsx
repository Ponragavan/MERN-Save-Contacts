import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();

  const searchHandler = () => {
    navigate(`/search?q=${keyword}`)
  };
  return (
    <div className="flex max-[500px]:absolute max-[500px]:top-20 max-[500px]:w-11/12 items-center justify-between border rounded-md pl-2 shadow-lg bg-white">
      <div className="flex items-center">
        <img src="./search.png" alt="search" className="w-6 h-6 mr-2" />
        <input
          type="text"
          placeholder="Search with name or email or phone"
          onChange={(e) => setKeyword(e.target.value)}
          className="p-2 outline-none w-80 max-md:w-60 max-sm:w-52"
          value={keyword}
        />
      </div>
      <button
        onClick={searchHandler}
        className="px-4 py-2 text-white transition duration-300 ease-in-out bg-purple-600 rounded-md hover:neon-purple"
      >
        Submit
      </button>
    </div>
  );
};

export default Search;
