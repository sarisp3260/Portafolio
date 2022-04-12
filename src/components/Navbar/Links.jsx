import React from "react";
import { Link} from "react-router-dom";
import Dropdown from "./Dropdown";

const Links = ({responsive , onClick }) => {
  const about = [
    {
      title: "About me",
      link: "/#About"
    },
    {
      title: "Skills",
      link: "/#Skills"
    },
    {
      title: "Testimonials",
      link: "/#Testimonials"
    }
  ];
  const work = [
    {
      title: "Projects",
      link: "/#Projects"
    },
    {
      title: "Branding",
      link: "/#Branding"
    }
  ];

  return (
    <>
      <a href="/#Header" onClick={() => onClick(false) }>Home</a>
      {responsive === 'yes' ?
      <>
        {about.map((item, index) => <><a key={index} href={item.link} onClick={() => onClick(false) }>{item.title}</a></>)}
        
        {work.map((item, index) => <><a key={index} href={item.link} onClick={() => onClick(false) }>{item.title}</a></>)}
      </> 
      : <>
        <Dropdown items={about} title={"About"} />
        <Dropdown items={work} title={"Work"} />
      </> }
      <a href="/#Contact" onClick={() => onClick(false) }>Contact</a>
      <Link to="/Curriculum-Vitae" onClick={() => onClick(false) } className="w-fit bg-gray text-black py-1 px-6 rounded-md font-medium outline outline-transparent hover:outline-offset-2 hover:outline-3 hover:outline-blue transition ease-linear duration-1000 md:bg-transparent md:text-gray ">Go to Cv</Link>
    </>
  );
};

export default Links;
