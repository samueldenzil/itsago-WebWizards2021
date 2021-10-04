import React from "react";
import "./App.css";
import Hotels from "./Components/Hotels";
import Navbar from "./Components/Navbar";
import Title from "./Components/Title"
import logo from "./images/logo.png";

function App() {
  return (
    <div className="App">
      <Navbar />      
      <Title />
      <Hotels />

      <div className="footer">
        <img src={logo} alt="" />
        <h3>itsago</h3>
      </div>
    </div>
  );
}

export default App;
