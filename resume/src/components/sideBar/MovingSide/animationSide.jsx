import { useState } from "react";
import Me from "../../../assets/Khushbu.jpg";
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
import { RxCross1 } from "react-icons/rx";
import { IoReorderThree } from "react-icons/io5";
import "./style.css";
import Offcanvas from "react-bootstrap/Offcanvas";

export const AnimationSide = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const date = new Date();
  const year = date.getFullYear();
  return (
    <>
      <button onClick={handleShow} className="btnThree">
        <div>
          <IoReorderThree id="threeLines" />
        </div>
      </button>

      <Offcanvas
        show={show}
        onHide={handleClose}
        backdrop="static"
        style={{ width: "35vw" }}
      >
        <div className="backSide">
          <nav id="navbar1">
            <div>
              <RxCross1 id="close1" onClick={handleClose} />
            </div>

            <Container>
              <Row className="sideRow1">
                <Col xs={6} md={4}>
                  <Image src={Me} roundedCircle id="image" />
                </Col>
              </Row>
            </Container>
            <div className="nameMy">Khushbu Maurya</div>
            <div>
              <ul id="ulList">
                <li className="listItem1">
                  <a href="https://www.linkedin.com/in/khushbu-maurya-833004287/">
                    <FaLinkedin />
                  </a>
                </li>
                <li className="listItem1">
                  <a href="https://github.com/io5-khushbu">
                    <FaGithub />
                  </a>
                </li>{" "}
                <li className="listItem1">
                  <FaInstagram />
                </li>
              </ul>
            </div>
            <div id="selectSec1">
              <ul className="listSelect1">
                <li className="selectItem1">
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
                <li className="selectItem1">
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
                <li className="selectItem1">
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
                <li className="selectItem1">
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
                <li className="selectItem1">
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
                <li className="selectItem1">
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
            <div className="lastItem1">
              <p className="para2T">
                &copy; Copyright <span> {year}</span>
              </p>
            </div>
            <div>
              <p className="para1F">
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
      </Offcanvas>
    </>
  );
};
