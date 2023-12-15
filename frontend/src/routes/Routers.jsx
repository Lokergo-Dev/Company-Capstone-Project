import Home from "../pages/Home";
import About from "../pages/About";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Jobs from "../pages/Jobs/Jobs";
import JobsDetails from "../pages/Jobs/JobsDetails";

<<<<<<< HEAD
import { Routes, Route } from "react-router-dom";
import Biodata from "../pages/Biodata";
=======
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
>>>>>>> d773a788246ffe606c51a4b7f4f18abd56c669a8

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
<<<<<<< HEAD
      <Route path="/jobs" element={<Jobs />} />
      <Route path="/jobs/:id" element={<JobsDetails />} />
=======
      <Route
        path="/jobs"
        element={
          <JobsElement>
            <Jobs />
          </JobsElement>
        } />
>>>>>>> d773a788246ffe606c51a4b7f4f18abd56c669a8
      <Route path="/about" element={<About />} />
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<Signup />} />
      <Route path="/biodata" element={<Biodata />} />
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

