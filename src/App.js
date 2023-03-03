import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Component/Home";
import Register from "./Component/Form/Register";
import Login from "./Component/Form/Login";
import Navbar from "./Component/Navbar/Navbar";
import AddDetails from "./Component/Form/AddDetails";
import Data from "./Component/GetData/Data";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/details" element={<AddDetails />} />
          <Route path="/data" element={<Data />} />

        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
