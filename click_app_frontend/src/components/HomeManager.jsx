import React, { useState } from "react";
import ClickButton from "../components/ClickButton";
import SaveButton from "../components/SaveButton";

const HomeManager = () => {
    const [clickAmount, setClickAmount] = useState(0);

    const saveToDB = () => {
      console.log(clickAmount);
      setClickAmount(0);
    };
    
    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="bg-white shadow-md rounded-lg p-6 flex flex-col gap-4">
          <ClickButton
            clickAmount={clickAmount}
            onClick={() => setClickAmount((prev) => prev + 1)}
          />
          <SaveButton onSave={saveToDB} />
        </div>
      </div>
    );
    
}

export default HomeManager

