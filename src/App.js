import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavBar from './components/NavBar/NavBar';
import Demo from './components/Demo/Demo';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Demo />
    </div>
  );
}

export default App;
