import React from "react";
import contact from "../../../assets/side.webp";
import { Link } from "react-router-dom";

const Reg = () => {
  return (
    <div className="register my-5 md:my-20 flex justify-center h-[20vh] md:h-[50vh]">
      <div className=" mx-5 md:mx-20 flex justify-center md:gap-20 ">
        <img
          src={contact}
          alt="contact-side-pic"
          className="rounded-3xl md:h-full "
        />
      </div>
      <div className="flex items-center flex-col justify-center space-y-5 md:space-y-10">
        <h2 className="md:text-5xl text-xs text-gray-600 font-serif">Register a new tourist attraction</h2>
        <Link to="/register">
          <button className="md:text-2xl text-sm bg-[#3ccf91] px-3 py-2  md:px-10 md:py-5 font-semibold text-white rounded-xl">
            Register now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Reg;
