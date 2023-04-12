import React from "react";
import { Navbar, SkillsCard } from "./components";
import { JobListing } from "./components";

const Home = ({ user }) => {
  // const logout = () => {
  //   localStorage.removeItem("user");
  //   window.location.reload();
  // };
  return (
    <>
      <Navbar />
      <JobListing />
    </>
  );
};

export default Home;