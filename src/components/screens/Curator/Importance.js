import React from "react";
import Point from "./Point";

const Importance = () => {
  return (
    <div className="works md:mx-80 my-10">
      <h2 className="text-center md:text-4xl text-lg font-semibold">
        Why be a Local Curator
      </h2>
      <div className="steps flex flex-col md:flex-row justify-center gap-5 md:gap-10 md:my-10">
        <Point
          number={1}
          first="Gain visibility both locally and internationally"
        />
        <Point number={2} first="Get paid instantly via online means" />
        <Point number={3} first="Chat with clients" />
      </div>
      <div className="btn flex justify-center items-center">
        <button className="bg-yellow-400 mx-auto px-8 py-2 rounded-lg text-sm md:text-base hover:bg-yellow-500 transition-all ease-in duration-300">
          Register Now
        </button>
      </div>
    </div>
  );
};

export default Importance;
