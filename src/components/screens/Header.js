import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdMenuOpen } from "react-icons/md";

const Header = () => {
  const [active, setActive] = useState(false);
  return (
    <>
      <header className="flex justify-between items-center py-5 px-5 md:px-[15%] shadow-md sticky top-0 bg-white">
        <h2 className="md:text-2xl font-semibold text-[#3ccf91]">
          TouristAttractista
        </h2>
        <nav className="space-x-10 text-lg hidden md:block">
          <Link to="/">Home</Link>
          <Link to="/experience">Experiences</Link>
          <Link to="/join">Become A Curator</Link>
          <Link
            to="/register"
            className="border px-4 py-2 border-[#3ccf91] bg-[#3ccf91] text-white hover:bg-white hover:text-[#3ccf91] transition-all duration-300 ease-in"
          >
            {" "}
            Register new place
          </Link>
        </nav>
        <MdMenuOpen
          size={25}
          className="block md:hidden"
          onClick={() => setActive((prev) => !prev)}
        />
      </header>
      <div
        className={` ${
          active ? "flex" : "hidden"
        } sidebar h-[40vh] flex-col justify-center items-center gap-5 sticky top-16 bg-green-100`}
      >
        <Link to="/" className="border border-[#3ccf91] py-1 px-3">
          Home
        </Link>
        <Link to="/experience" className="border border-[#3ccf91] py-1 px-3">
          Experiences
        </Link>
        <Link to="/join" className="border border-[#3ccf91] py-1 px-3">
          Become A Curator
        </Link>
        <Link
          to="/register"
          className="border px-4 mx-auto py-2 border-[#3ccf91] bg-[#3ccf91] text-white hover:bg-white hover:text-[#3ccf91] transition-all duration-300 ease-in"
        >
          {" "}
          Register new place
        </Link>
      </div>
    </>
  );
};

export default Header;
