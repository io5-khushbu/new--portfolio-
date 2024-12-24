import { Home } from "../../pages/HomePage/Home";
import { About } from "../../pages/About/about";
import { Skill } from "../../pages/Skills/Skill";
import { Resume } from "../../pages/Resume/Resume";
import "./main.css";
import { Portfolio } from "../../pages/Portfolio/Portfolio";
import { Service } from "../../pages/Service/Service";
import { Languages } from "../Languages";
import { Contact } from "../../pages/Contacts/Contact";

export const Main = () => {
  return (
    <div id="main">
      <Home />
      <About />
      <Skill />
      <Resume />
      <Portfolio />
      <Service />
      <Languages />
      <Contact />
    </div>
  );
};
