import React from "react";
import { Route, Routes } from "react-router-dom";
import Cart from "../pages/cart";
import Home from "../pages/home";

const RoutesComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/cart" element={<Cart />}></Route>
      <Route path="*" element={<div>Not Found</div>}></Route>
    </Routes>
  );
};

export default RoutesComponent;
