// src/App.js
import React from "react";
import Header from "./components/Header";
import Projets from "./components/Projets";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <Projets />
    </div>
  );
}

export default App;
