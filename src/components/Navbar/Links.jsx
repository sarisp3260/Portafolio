import React from "react";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";

const Links = () => {
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
    <div className="flex relative items-center gap-20">
      <Dropdown items={about} title={"About"} />
      <Dropdown items={work} title={"Work"} />
      <a href="/#Contact">Contact</a>
      <Link to="/Curriculum-Vitae" className="bg-blue text-black py-1 px-3 rounded-md font-medium hover:bg-blue/90">Go to Cv</Link>
    </div>
  );
};

export default Links;
