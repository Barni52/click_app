import React, { useState, useEffect } from "react";
import axios from "axios";

const LeaderBoard = () => {
  const [scores, setScores] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/scores/ ");
        setScores(response.data);
      } catch (error) {
        console.error("Error fetching scores:", error);
      }
    };
    fetchData();
  }, []);

  scores.sort(function (a, b) {
    return b.score - a.score;
  });

  const scoreItem = scores.map((score, index) => (
    <li
      key={score.id}
      className="mb-4 text-xl font-semibold bg-blue-100 p-3 rounded-lg flex items-center justify-between"
    >
      {index + 1}. : {score.score} clicks
    </li>
  ));

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <ul className="space-y-2">{scoreItem}</ul>
      </div>
    </div>
  );
};

export default LeaderBoard;
