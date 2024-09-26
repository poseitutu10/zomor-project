import React from "react";
import { Link } from "react-router-dom";
import { IoLocationOutline } from "react-icons/io5";
import { useContext } from "react";
import { PlacesContext } from "../../../utils/Context";

const Place = () => {
  const { places } = useContext(PlacesContext);
  const data = places.slice(0, 4);
  return (
    <>
      <div className="works md:mx-40 my-5 md:my-20 space-y-5">
        <h2 className="text-center md:text-6xl text-lg font-semibold font-serif text-gray-700">
          Featured Places
        </h2>
        <p className="text-center md:text-xl text-sm text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique.
        </p>

        <div className="display-places grid grid-cols-1 md:grid-cols-4 md:my-10 md:mx-20 gap-5 md:gap-5">
          {data.map((cont) => {
            return (
              <Link to={`/experience/${cont.id}`} key={cont.id}>
                <div key={cont.id} className="p-3 md:p-5">
                  <div>
                    <img
                      src={cont.image}
                      alt="place-pic"
                      className="w-full rounded-2xl h-[20vh] md:h-[40vh] cursor-pointer"
                    />
                  </div>
                  <div className="py-5">
                    <h2 className="md:text-2xl font-semibold">{cont.name}</h2>
                    <div className="flex items-center gap-2">
                      <IoLocationOutline />
                      <h2 className="text-gray-500 md:text-lg">
                        {cont.location}
                      </h2>
                    </div>

                    <h2 className="md:text-lg">
                      Active hours: {cont.open_hour} - {cont.close_hour}
                    </h2>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
        <div className="flex justify-center">
          <Link to="/experience">
            <button className="md:text-2xl text-sm bg-[#3ccf91] px-3 py-2  md:px-10 md:py-5 font-semibold text-white rounded-xl">
              Explore All Places
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Place;
