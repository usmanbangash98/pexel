import React from "react";

const Footer = () => {
  return (
    <div className="flex bg-gray-200 p-2 items-center border-none rounded-lg">
      <div className="mr-auto">
        <a href="https://www.pexels.com">
          Photos provided by <span className="text-green-500">Pexels</span>
        </a>
      </div>
      <div className="flex-grow text-center">
        <div className="inline-flex space-x-2">
          Made with ❤️ by
          <span className="font-semibold text-green-600"> &nbsp; Usman</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
