import MainLayout from "../layouts/MainLayout";
import { motion } from "framer-motion";
import ImgAnimation from "../components/Sections/ImgAnimation";

const Landing = () => {
  return (
    <>
    <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    >
      <MainLayout>
        <div className="center flex-col gap-5 w-full md:flex-row">
          <div className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 h-full flex flex-col justify-center relative center w-full  md:w-2/4">
            <p className="font-pacifica text-6xl font-black text-center select-none uppercase sm:text-8xl xl:text-[140px]">
              Wellcome
            </p>
            <p className="font-pacifica text-6xl mt-0 font-black text-center select-none uppercase sm:text-8xl xl:text-[140px]">
              to my page
            </p>
          </div>
          <div className="center w-full md:w-1/3 relative">
            <ImgAnimation/>
          </div>
        </div>
      </MainLayout>
    </motion.div>
    </>
  );
};

export default Landing;
