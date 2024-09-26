import React from "react";
import group from "../../../assets/group.png";
import { Link } from "react-router-dom";

const Joining = () => {
  return (
    <>
      <div className="h-[30vh] md:h-[60vh] bg-[#3ccf91] md:px-80 flex space-x-5 md:space-x-20 ">
        <div className="left text-center md:w-1/2 flex flex-col justify-center h-full px-5">
          <h2 className="md:text-5xl text-xl text-white font-semibold">
            Become a <span className="text-yellow-500">Curator</span>
          </h2>

          <p className="md:text-lg my-2 md:my-10 text-sm ">
            Earn extra income and unlock new opportunities by curating a local
            experience.
          </p>
          <Link to="/join">
            <button className="md:text-2xl text-sm bg-yellow-500 px-3 py-2  md:px-10 md:py-5 font-semibold text-white rounded-xl">
              Explore More
            </button>
          </Link>
        </div>
        <div className="right md:flex hidden ">
          <img src={group} alt="group-pic" className="" />
        </div>
      </div>
      {/* <div className="content m-5 md:text-center md:text-2xl text-sm md:mx-80 md:my-10">
        <h2>
          Heny selects the best local agents in the world and connects them
          directly with both local and international travelers.
        </h2>
        <h2>
          Our partners are passionate about providing extraordinary experiences
          for travelers and investing in the long-term sustainability of their
          destinations. We connect them with like-minded travelers.
        </h2>
      </div> */}
    </>
  );
};

export default Joining;
