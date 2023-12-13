import Home from "../pages/Home";
import Jobs from "../pages/Jobs";
import About from "../pages/About";
import Login from "../pages/Login";
import Signup from "../pages/Signup";

import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route
        path="/jobs"
        element={
          <JobsElement>
            <Jobs />
          </JobsElement>
        } />
      <Route path="/about" element={<About />} />
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
};

function JobsElement({ children }) {
  if (!sessionStorage.getItem("token")) {
    return <Navigate to={"/login"} />;
  } else {
    return <>{children}</>;
  }
}

export default Routers;

