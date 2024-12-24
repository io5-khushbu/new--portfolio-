import "./about.css";
import Pic1 from "../../assets/lake-2.jpg";
// import Pic2 from "../../assets/pic2.jpg";

import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import { PiGreaterThanThin } from "react-icons/pi";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export const About = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  });

  return (
    <>
      <div id="about">
        <h1 id="about">About</h1>
        <p id="aboutHR"></p>
        <div>
          <p id="aboutPara">
            I'm a Passionate Frontend Developer with One year of Experience as a
            Freelancer. I specialize in HTML, CSS, Bootstrap, JavaScript, ES6+,
            React, Redux, and Material UI. Proficient in developing creating
            user interfaces, writing and testing codes, troubleshooting
            simple/complex issues with code standards, and implementing new
            features based on user feedback.
          </p>
        </div>
        <div className="about_detail">
          <div id="picMy">
            <Container>
              <Row>
                <Col xs={6} md={4}>
                  <Image
                    src={Pic1}
                    rounded
                    className="myPic"
                    data-aos="fade-right"
                  />
                </Col>
                <Col>
                  {" "}
                  <h1 className="h1Frontend" data-aos="fade-left">
                    Frontend Developer (React.JS)
                  </h1>
                  <p id="paraFront" data-aos="fade-left">
                    Developing your dream projects with latest and trending
                    technologies with code quality and standard
                  </p>
                  <div data-aos="fade-left">
                    <ul id="FirstULItem">
                      <li className="liTeam">
                        <PiGreaterThanThin className="iconGreater" />
                        <h6 className="ptitle">birthday :</h6>
                        <p className="paraLine"> 4 january</p>
                      </li>
                      <li className="liTeam">
                        <PiGreaterThanThin className="iconGreater" />
                        <h6 className="ptitle">Linked in :</h6>
                        <p className="paraLine">
                          linkedin.com/in/khushbu-maurya-833004287/
                        </p>
                      </li>{" "}
                      <li className="liTeam">
                        <PiGreaterThanThin className="iconGreater" />
                        <h6 className="ptitle">Phone :</h6>
                        <p className="paraLine"> +91-7814827554</p>
                      </li>{" "}
                      <li className="liTeam">
                        <PiGreaterThanThin className="iconGreater" />
                        <h6 className="ptitle">City :</h6>{" "}
                        <p className="paraLine">Bathinda, Punjab, India</p>
                      </li>
                      <li className="liTeam">
                        <PiGreaterThanThin className="iconGreater" />
                        <h6 className="ptitle">Email :</h6>{" "}
                        <p className="paraLine">io5.khushbumourya@gmail.com</p>
                      </li>{" "}
                      <li className="liTeam">
                        <PiGreaterThanThin className="iconGreater" />
                        <h6 className="ptitle">Freelancer :</h6>{" "}
                        <p className="paraLine">Yes! Available</p>
                      </li>
                    </ul>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
          <div></div>
        </div>
      </div>
    </>
  );
};
