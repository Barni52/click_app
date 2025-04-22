import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import NavBar from "./components/NavBar";
import Home from './pages/Home';
import About from './pages/Leaderboard';
import Leaderboard from "./pages/Leaderboard";
import RouterComp from "./components/RouterComp";

function App() {
  return (
    <RouterComp/>
  );
}

export default App;
