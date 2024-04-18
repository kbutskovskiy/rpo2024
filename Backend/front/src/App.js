import './App.css';
import React from "react";
import { BrowserRouter, Routes } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";

function App() {
  return (
      <div className="App">
        <BrowserRouter>
          <NavigationBar />
          <div className="container-fluid">
            <Routes>
            </Routes>
          </div>
        </BrowserRouter>
      </div>
  );
}

export default App;
