import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Demo from "./components/Demo/Demo";
import Jumbo from "./components/Jumbo/Jumbo";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Container>
        <Demo />
        <Jumbo />
      </Container>
    </div>
  );
}

export default App;
