import React from "react";
import { FaBeer } from "react-icons/fa";
import { BiBong, BiBoltCircle } from "react-icons/bi";

export const Navbar = () => {
  return (
    <nav className="flex row w-full bg-slate-500 h-24 justify-between">
      <div className="flex items-center">
        <a className="m-5 font-medium hover:font-black">Home</a>
        <a className="m-5 font-medium hover:font-black">About</a>
        <a className="m-5 font-medium hover:font-black">Contact</a>
      </div>

      <div className="bg-slate-400 flex items-center">
        <FaBeer size={50} className=""></FaBeer>
        <BiBong size={50} className=""></BiBong>
        <BiBoltCircle size={50}></BiBoltCircle>
      </div>
    </nav>
  );
};
