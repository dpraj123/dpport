// import logo from './logo.svg';
import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "./pages/Index";

const App = () => {
  return (
    <BrowserRouter basename="/dpraj.xyz">
      <Routes>
        <Route path="/dpraj.xyz" element={<Index />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
