import { useState } from "react";
import initial from "../../assest/RME_INITIAL.png";
import final from "../../assest/RME_FINAL.png";
import {HiCursorClick} from 'react-icons/hi'
import { motion } from "framer-motion";

const ImgAnimation = () => {
  const [toogle, setToogle] = useState(0);

  const array = [final, initial];

  function changeAnimate() {
    const img = document.getElementById("animation");
    setToogle(toogle + 1);

    if (toogle + 1 > array.length - 1) {
      setToogle(0);
    }
    img.src = array[toogle];

  }
  return (
    <>
      <div>
        <motion.img b
        initial={{ opacity: 0}}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
          src={initial}
          className="w-fit h-96 cursor-pointer"
          onClick={changeAnimate}
          id="animation"
          alt="ilustration"
        />
      </div>
{/*       <BsChatLeft className="absolute -top-2 right-3 text-7xl md:-top-8 md:-right-1 md:text-9xl"/> */}
      <span className="absolute text-xl top-0 right-5 center gap-2 text-gray animate-pulse">Click me <HiCursorClick/></span>
    </>
  );
};

export default ImgAnimation;
