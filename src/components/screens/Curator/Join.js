import React from "react";
import group from "../../../assets/group.png";

const Join = () => {
  return (
    <>
      <div className="h-[40vh] md:h-[60vh] bg-[#3ccf91] md:px-80 flex space-x- md:space-x-20 ">
        <div className="left text-center md:w-1/2 flex flex-col justify-center h-full">
          <h2 className="md:text-5xl text-xl text-white font-semibold">
            Join our community of <span className="text-yellow-500">local</span>
          </h2>
          <h2 className="md:text-5xl text-xl text-yellow-500 font-semibold">
            curators
          </h2>
          <p className="md:text-lg text-sm m-5 md:my-10">
            Earn extra income and unlock new opportunities by curating a local
            experience.
          </p>
          <button className="bg-yellow-400 mx-auto px-8 py-2 rounded-lg text-sm md:text-base hover:bg-yellow-500 transition-all ease-in duration-300">
            Register Now
          </button>
        </div>
        <div className="right md:flex hidden ">
          <img src={group} alt="group-pic" className="" />
        </div>
      </div>
      <div className="content m-5 md:text-center md:text-2xl text-sm md:mx-80 md:my-10">
        <h2>
          Heny selects the best local agents in the world and connects them
          directly with both local and international travelers.
        </h2>
        <h2>
          Our partners are passionate about providing extraordinary experiences
          for travelers and investing in the long-term sustainability of their
          destinations. We connect them with like-minded travelers.
        </h2>
      </div>
    </>
  );
};

export default Join;
