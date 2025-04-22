import React from "react";

const SaveButton = ({onSave}) => {
  const save = () => {
    onSave();
  }


  return (
    <button
      onClick={save}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
    >
      Save
    </button>
  );
};

export default SaveButton;
