import React, { useState, useEffect } from "react";
import ClickButton from "../components/ClickButton";
import SaveButton from "../components/SaveButton";
import axios from "axios";

const HomeManager = () => {
  const [clickAmount, setClickAmount] = useState(0);

  const handleSaveScore = () => {
    if (clickAmount > 0) {
      axios
        .post("http://localhost:5000/api/scores/", { score: clickAmount })
        .then(() => {
          setClickAmount(0);
        });
    }
    console.log(clickAmount);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-6 flex flex-col gap-4">
        <ClickButton
          clickAmount={clickAmount}
          onClick={() => setClickAmount((prev) => prev + 1)}
        />
        <SaveButton onSave={handleSaveScore} />
      </div>
    </div>
  );
};

export default HomeManager;
