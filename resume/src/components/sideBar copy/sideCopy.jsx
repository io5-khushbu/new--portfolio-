import "./sideCopy.css";
import Me from "../../assets/Khushbu.jpg";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { IoHome } from "react-icons/io5";
import { IoPersonSharp } from "react-icons/io5";
import { CiFileOn } from "react-icons/ci";
import { BiDockRight } from "react-icons/bi";
import { FcSelfServiceKiosk } from "react-icons/fc";
import { IoIosMail } from "react-icons/io";
import { Link } from "react-scroll";

export const SideCopy = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <>
      <div id="dis768">
        <div className="backColor bG">
          <nav id="navbar">
            <Container>
              <Row className="sideRow">
                <Col xs={6} md={4}>
                  <Image src={Me} roundedCircle id="image" />
                </Col>
              </Row>
            </Container>
            <div className="name">Khushbu Maurya</div>
            <div>
              <ul id="ulList">
                <li className="listItem">
                  <a href="https://www.linkedin.com/in/khushbu-maurya-833004287/">
                    <FaLinkedin />
                  </a>
                </li>
                <li className="listItem">
                  <a href="https://github.com/io5-khushbu">
                    <FaGithub />
                  </a>
                </li>{" "}
                <li className="listItem">
                  <FaInstagram />
                </li>
              </ul>
            </div>
            <div id="selectSec">
              <ul className="listSelect">
                <li className="selectItem">
                  <IoHome className="icon" />
                  <Link
                    className="aSection cursor"
                    activeClass="active"
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                  >
                    Home
                  </Link>
                  {/* <a href="#" className="aSection">
                Home
              </a> */}
                </li>
                <li className="selectItem">
                  <IoPersonSharp className="icon" />
                  <Link
                    className="aSection cursor"
                    activeClass="active"
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                  >
                    About
                  </Link>
                </li>
                <li className="selectItem">
                  <CiFileOn className="icon" />
                  <Link
                    className="aSection cursor"
                    activeClass="active"
                    to="resume"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                  >
                    Resume
                  </Link>
                </li>
                <li className="selectItem">
                  <BiDockRight className="icon" />
                  <Link
                    className="aSection cursor"
                    activeClass="active"
                    to="portfolio"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                  >
                    Portfolio
                  </Link>
                </li>
                <li className="selectItem">
                  <FcSelfServiceKiosk className="icon" />
                  <Link
                    className="aSection cursor"
                    activeClass="active"
                    to="service"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                  >
                    Service
                  </Link>
                </li>
                <li className="selectItem">
                  <IoIosMail className="icon" />
                  <Link
                    className="aSection cursor"
                    activeClass="active"
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div className="lastItem">
              <p className="para2">
                &copy; Copyright <span> {year}</span>
              </p>
            </div>
            <div >
              <p className="para1">
                Designed by{" "}
                <Link
                  className="aSection cursor "
                  activeClass="active"
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                >
                  Khushbu Maurya
                </Link>
              </p>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};
