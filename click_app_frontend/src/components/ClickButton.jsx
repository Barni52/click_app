import React, { useState } from "react";

const ClickButton = ({ clickAmount, onClick }) => {
  return (
    <>
      <button
        onClick={onClick}
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Click Me!
      </button>
      <div className="flex items-center justify-center mt-8">
        <h1 className="text-5xl font-bold text-gray-800">{clickAmount}</h1>
      </div>
    </>
  );
};

export default ClickButton;
