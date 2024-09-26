import React, { useContext } from "react";
import { PlacesContext } from "../../../utils/Context";
import { attractionSites } from "../../../data/data";

const Description = ({ id }) => {
  const { places } = useContext(PlacesContext);

  const data = places.find((cont) => cont.id == `${id}`);
  return (
    <>
      <div className="w-full h-[10vh] font-semibold text-xl md:h-[20vh] md:text-5xl bg-[#3ccf91] text-white flex justify-center items-center">
        {data.name}
      </div>
      <div className="px-[10%] py-10 md:py-20 flex flex-col-reverse gap-5 md:flex-row md:gap-20">
        <div className="left md:w-1/2">
          <h2 className="md:text-5xl text-lg font-semibold">About Us</h2>
          <p className="md:text-xl text-sm md:tracking-wide my-5">{data.description}</p>
          <p></p>
        </div>
        <div className="right md:w-1/2 ">
          <img src={data.image} className="h-[30vh] md:h-[50vh] w-full sticky top-20 rounded-2xl -z-50" />
        </div>
      </div>
    </>
  );
};

export default Description;
