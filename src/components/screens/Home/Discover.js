import React from "react";
import discover from "../../../assets/discover.jpg";
import { Link } from "react-router-dom";

const Discover = () => {
  return (
    <div className="md:px-80 md:py-20 bg-green-50 flex flex-col-reverse md:flex-row md:h-[80vh] md:justify-between ">
      <div className="left md:w-1/2 flex flex-col justify-center space-y-5 md:space-y-10 m-5 ">
        <h2 className="md:text-7xl font-serif text-gray-700">
          Discover Where You Want To Go Next
        </h2>
        <p className="md:text-xl text-gray-600 text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique. Duis cursus, mi quis viverra
          ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
        </p>
        <Link to="/experience">
          <button className="md:text-2xl text-sm bg-[#3ccf91] px-3 py-2  md:px-10 md:py-5 font-semibold text-white rounded-xl">
            Explore All Places
          </button>
        </Link>
      </div>
      <div className="right md:w-1/2 flex md:justify-end p-5 md:p-0">
        <img src={discover} className="md:h-full h-[35vh] w-full md:w-4/5 rounded-2xl" />
      </div>
    </div>
  );
};

export default Discover;
