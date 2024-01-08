import {React, useState} from "react";
import { CgMenuRound } from "react-icons/cg";
import { BsFileEarmarkFill } from "react-icons/bs";
import { TiHome } from "react-icons/ti";
import { GiSwordwoman } from "react-icons/gi";
import { BiHappyBeaming } from "react-icons/bi";
import { MdContactMail } from "react-icons/md";
import { Link } from "react-router-dom";

const ResponsiveMenu = () => {

    const [menu, setMenu] = useState(false)

  return (
    <>
      <div
        className="fixed left-10 bottom-5 z-30 w-fit h-fit bg-slate-800 rounded-full"
        onClick={() => setMenu(!menu)}
      >
        <CgMenuRound className="text-5xl" />
      </div>
      <div>
        {menu && (
          <div className="fixed left-5 bottom-3 bg-slate-800 h-fit pb-20 px-5 py-5 rounded-md flex flex-col items-center justify-center gap-4 z-20">
            
            <Link to="/" className="center flex-col">
              <TiHome className="text-5xl" />
              <span className="text-sm">Home</span>
            </Link>

            <Link to="/About" className="center flex-col">
              <BiHappyBeaming className="text-5xl" />
              <span className="text-sm">About</span>
            </Link>

            <Link to="/Work/Projects" className="center flex-col">
              <GiSwordwoman className="text-4xl" />
              <span className="text-sm">Work</span>
            </Link>

            <Link to="/Contact" className="center flex-col">
              <MdContactMail className="text-5xl" />
              <span className="text-sm">Contact</span>
            </Link>

            <Link to="/Curriculum-Vitae" className="center flex-col">
              <div className="relative">
                <BsFileEarmarkFill className="text-5xl" />
                <span className="absolute inset-0 left-3.5 top-3.5 text-black text-base font-bold">
                  Cv
                </span>
              </div>
              <span className="text-sm">CV</span>
            </Link>

    
          </div>
        )}
      </div>
    </>
  );
};

export default ResponsiveMenu;
