import React from "react";

const Navbar = ({ setQuery }) => {
  const handleSearch = (event) => {
    setQuery(event.target.value);
  };

  return (
    <div className="flex bg-gray-200 p-2 items-center border-none rounded-lg">
      <div className="mr-auto text-green-600 font-semibold">PEXEL</div>
      <div className="flex-grow text-center">
        <div className="inline-flex space-x-2">
          <input
            onChange={handleSearch}
            type="text"
            placeholder="Search for.."
            className="px-24 py-3 border rounded-xl border-none outline-none"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
