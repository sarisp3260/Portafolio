
/* icons */
import { BsFileEarmarkFill } from "react-icons/bs";
import { TiHome } from "react-icons/ti";
import { GiSwordwoman } from "react-icons/gi";
import { BiHappyBeaming } from "react-icons/bi";
import { MdContactMail } from "react-icons/md";
import { FaPenFancy } from "react-icons/fa";
import { Link } from "react-router-dom";
import ResponsiveMenu from "./ResponsiveMenu";

const Sidebar = () => {

  return (
    <>
      <div className="hidden fixed left-5 top-52 bottom-52 lg:flex flex-col items-center justify-center gap-4 z-30">

        <Link to="/">
          <div class="tooltip tooltip-right hover:text-blue duration-500" data-tip="Home">
            <TiHome className="text-4xl" />
          </div>
        </Link>

        <Link to="/About">
          <div class="tooltip tooltip-right hover:text-blue duration-500" data-tip="About">
            <BiHappyBeaming className="text-4xl" />
          </div>
        </Link>

        <Link to="/Work/Projects">
          <div class="tooltip tooltip-right hover:text-blue duration-500" data-tip="Work">
            <GiSwordwoman className="text-4xl" />
          </div>
        </Link>

        <Link to="/Curriculum-Vitae">
        <div class="tooltip tooltip-right" data-tip="CV">
          <div className="relative hover:text-blue duration-500">
            <BsFileEarmarkFill className="text-4xl" />
            <span className="absolute inset-0 left-1 top-2 text-black text-sm font-bold">Cv</span>
          </div>
        </div>
        </Link>

        <Link to="/Contact">
          <div class="tooltip tooltip-right hover:text-blue duration-500" data-tip="Contact">
            <MdContactMail className="text-4xl" />
          </div>
        </Link>

        {/* <GiSwordwoman/> */}
      </div>

      <div className="block lg:hidden">
        <ResponsiveMenu/>
      </div>
    </>
  );
};

export default Sidebar;
