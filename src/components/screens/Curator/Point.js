import React from "react";

const Point = ({ number, first, second }) => {
  return (
    <div className="point text-center flex flex-col justify-center items-center gap-2 p-5 md:w-1/3">
      <h2 className="md:text-5xl border border-yellow-500 text-yellow-500 rounded-full h-14 w-14 md:h-28 md:w-28 flex items-center justify-center">
        {number}
      </h2>

      <p className="md:text-xl text-sm">{first}</p>
      <p className="md:text-xl text-sm">{second}</p>
    </div>
  );
};

export default Point;
