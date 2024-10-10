import React from "react";
import Cart from "./Pages/Cart";
import Home from "./Pages/Home/Home";

const routes = [
  { path: "/", element: <Home /> },
  { path: "/cart", element: <Cart /> },
];

export default routes;
