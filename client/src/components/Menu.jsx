import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <article className="menu z-50 tablet:hidden bg-203A4C w-36 h-[186px] absolute right-8 flex justify-center items-center mt-6 rounded border border-dashed border-5F6FAB">
      <ul className="flex flex-col items-center gap-y-8 text-body-2 font-IBM">
        <Link to="/">
          <li className="cursor-pointer">Home</li>
        </Link>
        <Link to="/projects">
          <li className="cursor-pointer">Projects</li>
        </Link>
        <Link to="/contact">
          <li className="cursor-pointer">Contact me</li>
        </Link>
      </ul>
    </article>
  );
};

export default Menu;
