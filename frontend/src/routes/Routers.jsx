import Home from "../pages/Home";
import About from "../pages/About";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Jobs from "../pages/Jobs/Jobs";
import JobsDetails from "../pages/Jobs/JobsDetails";

import { Routes, Route } from "react-router-dom";
import Biodata from "../pages/Biodata";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/jobs" element={<Jobs />} />
      <Route path="/jobs/:id" element={<JobsDetails />} />
      <Route path="/about" element={<About />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/biodata" element={<Biodata />} />
    </Routes>
  );
};

export default Routers;
