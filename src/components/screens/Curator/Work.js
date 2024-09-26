import React from "react";
import Point from "./Point";

const Work = () => {
  return (
    <>
      <div className="works md:mx-80 md:my-10">
        <h2 className="text-center md:text-4xl text-lg font-semibold">How it works</h2>
        <div className="steps flex flex-col md:flex-row justify-center gap-5 md:gap-10 md:my-10">
          <Point number={1} first="Sign up," second="create your profile" />
          <Point
            number={2}
            first="Add your experience,"
            second="Upload all your experiences with more images and activities"
        
          />
          <Point
            number={3}
            first="Get bookings"
            second="Wait for the magic to happen"
          />
        </div>
      </div>
    </>
  );
};

export default Work;
