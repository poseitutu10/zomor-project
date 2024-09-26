import React from "react";
import Header from "./screens/Header";
import Footer from "./screens/Footer";
import Discover from "./screens/Home/Discover";
import Place from "./screens/Home/Place";
import Joining from "./screens/Home/Joining";
import Reg from "./screens/Home/Reg";

const Home = () => {
  return (
    <>
      <Header />
      <Discover />
      <Place />
      <Joining />
      <Reg />
      <Footer />
    </>
  );
};

export default Home;
