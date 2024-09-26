import React from "react";
import Header from "./screens/Header";
import Join from "./screens/Curator/Join";
import Work from "./screens/Curator/Work";
import Local from "./screens/Curator/Local";
import Importance from "./screens/Curator/Importance";
import Footer from "./screens/Footer";

const Curator = () => {
  return (
    <>
      <Header />
      <Join />
      <Work />
      <Local />
      <Importance />
      <Footer />
    </>
  );
};

export default Curator;
