import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="text-xl font-bold">
          Clicking game
        </Link>
        <div>
          <Link to="/Leaderboard" className="mx-4 hover:text-gray-300">
            Leaderboard
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
