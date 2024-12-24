import "./style.css";
import ProgressBar from "react-bootstrap/ProgressBar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export const Skill = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  });
  return (
    <>
      <div className="main-skill">
        <div>
          <h1 className="skill-header">Skills</h1>
          <p id="skillHR"></p>
        </div>
        <div>
          <p className="paraSkill">
            You can find my progress bar of my skills as following.
          </p>
        </div>
        <div id="progressSection"  data-aos="fade-up">
          <Container>
            <Row className="row-small">
              <Col xs={6} className="col">
                <ul className="ulItem">
                  <li className="liList">
                    <div className="divItem">
                      <h6 className="head">HTML5</h6>
                      <h6 className="percentage">80%</h6>
                    </div>
                    <ProgressBar variant="info" now={80} />
                  </li>
                  <li className="liList">
                    <div className="divItem">
                      <h6 className="head">css3</h6>
                      <h6 className="percentage">80%</h6>
                    </div>
                    <ProgressBar variant="info" now={80} />
                  </li>{" "}
                  <li className="liList">
                    <div className="divItem">
                      <h6 className="head js">javaScript/ES6</h6>
                      <h6 className="percentage">70%</h6>
                    </div>
                    <ProgressBar variant="info" now={70} />
                  </li>
                </ul>
              </Col>
              <Col xs={6} className="col">
                {" "}
                <ul className="ulItem">
                  <li className="liList">
                    <div className="divItem">
                      <h6 className="head">react.js/redux</h6>
                      <h6 className="percentage">65%</h6>
                    </div>
                    <ProgressBar variant="info" now={65} />
                  </li>
                  <li className="liList">
                    <div className="divItem">
                      <h6 className="head">material UI</h6>
                      <h6 className="percentage">72%</h6>
                    </div>
                    <ProgressBar variant="info" now={72} />
                  </li>{" "}
                  <li className="liList">
                    <div className="divItem">
                      <h6 className="head"> BootStrap</h6>
                      <h6 className="percentage">75%</h6>
                    </div>
                    <ProgressBar variant="info" now={75} />
                  </li>
                </ul>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
};
