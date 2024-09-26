import React from "react";
import Header from "../Header";
import Description from "./Description";
import { useParams } from "react-router-dom";
import Footer from "../Footer";

const Single = () => {
  const { id } = useParams();

  return (
    <>
      <Header />
      <Description id={id} />
      <Footer />
    </>
  );
};

export default Single;
