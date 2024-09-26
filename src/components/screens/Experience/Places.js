import React, { useContext, useState } from "react";
import { PlacesContext } from "../../../utils/Context";
import { CiSearch } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const Places = () => {
  const [search, setSearch] = useState("");
  const { places } = useContext(PlacesContext);

  return (
    <div className="w-full">
      <div className="font-semibold h-[10vh]  bg-[#3ccf91] text-white md:py-10 md:px-40 flex justify-center md:justify-between items-center sticky top-16">
        <h2 className="text-xl md:text-4xl">Places</h2>
        <div className="search items-center gap-5 w-1/4 hidden md:flex">
          <label htmlFor="find">
            <CiSearch
              size={30}
              className="cursor-pointer hover:scale-125 transition duration-300 ease-in-out"
            />
          </label>

          <input
            type="text"
            id="find"
            name="search"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search places by name"
            className="text-lg py-3 bg-transparent outline-none w-[90%] border-b-2 border-gray-600 placeholder:text-white  text-white "
          />
        </div>
      </div>

      <div className="display-places grid grid-cols-1 md:grid-cols-4 md:my-10 md:mx-40 gap-5 md:gap-5">
        {places.map((cont) => {
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
    </div>
  );
};

export default Places;
