import { AiFillGithub } from "react-icons/ai";
import { CgWebsite } from "react-icons/cg";
import { motion } from "framer-motion";

const Work = ({ item }) => {
  return (
    <>
      <motion.div layout 
        className="flex flex-col h-52 items-center justify-center gap-3 transform transition ease-out duration-700 select-none rounded-md mt-5 relative"
      >
        <picture
          className="w-72 h-auto overflow-hidden rounded-md xs:w-80"
        >
          <img src={item.img} alt="" className="rounded-md" />
        </picture>

        <p className="text-lg bg-white/30 px-4 py-0.5 rounded-full text-black absolute top-4 left-2 xs:top-1 xs:text-xl">
          {item.title}
        </p>

        <div className="opacity-0 absolute inset-0 bg-black/80 rounded-md hover:opacity-100 duration-1000">
          <p className="text-lg px-4 py-0.5 absolute top-4 left-2 z-30 xs:top-1 xs:text-xl">
            {item.title}
          </p>

          <p className="mx-4 mt-12 h-20 pb-3 overflow-y-auto text-sm xs:text-base xs:mt-10 xs:h-24">
            {item.desription}
          </p>

          {/* <div className='absolute -bottom-3 h-24 w-full bg-black/80 blur-sm'></div> */}

          <div className={`absolute bottom-5 w-full center ${item.demo || item.repo !== "" ? "justify-between" : "justify-center"} px-10 z-20`}>

            {item.repo === "" ? null : (
            <a href={item.repo} target="_blank">
              <button className="btn-primary center gap-2 px-2">
                <AiFillGithub className="text-2xl" />
                <span className="text-xs">Repo</span>
              </button>
            </a>
            )}

            {item.demo === "" ? null : (
              <a href={item.demo} target="_blank">
                <button className="btn-primary center gap-2  px-2">
                  <CgWebsite className="text-2xl" />
                  <span className="text-xs">Demo</span>
                </button>
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Work;
