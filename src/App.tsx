import React from "react";
import "./App.css";
import { Landingpage } from "./list/Pages/landing.tsx";
import "bootstrap/dist/css/bootstrap.min.css";

export const App = () => {
  return (
    <div className="main-container ">
      <Landingpage />
    </div>
  );
};
