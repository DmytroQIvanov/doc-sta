import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./Layouts/Header/Index";
import Navigation from "./Layouts/Navigation/Index";

function App() {
  return (
    <>
      <div>
        <Header />
        <Navigation />
      </div>
    </>
  );
}

export default App;
