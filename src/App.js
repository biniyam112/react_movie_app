import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Header } from "./components/header/header";
import { HomePage } from "./home/home_page";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" Component={HomePage} />
        </Routes>
      </Router>
    </>
  );
}
export default App;
