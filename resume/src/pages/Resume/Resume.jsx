import "./resume.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export const Resume = () => {
  const day = new Date();
  const year = day.getFullYear();

  useEffect(() => {
    AOS.init({ duration: 2000 });
  });
  return (
    <>
      <div id="resume">
        {" "}
        <div className="main-resume">
          <h1 id="resume">resume</h1>
          <p id="resumeHR"></p>
          <div data-aos="fade-up" className="colorWord">
            <Container>
              <Row>
                <Col xs={6}>
                  <div>
                    <h1>Sumary</h1>
                  </div>

                  <div className="resumeSummary">
                    <h2>khushbu maurya</h2>
                    <p>
                      Innovative Web Developer(FrontEnd- ReactJS) with 1+ years
                      of experience designing and developing.
                    </p>
                    <ul>
                      <li>street no. 0/A , Hans Nagar , bathinda</li>
                      <li> (+91)-7814827554</li>
                      <li id="email">io5.khushbumourya@gmail.com</li>
                    </ul>
                  </div>
                  <div id="Education">
                    <h2>Education</h2>
                  </div>
                  <div>
                    <div className="resumeSummary">
                      <div>
                        <p>
                          <b>Pursuring MCA</b>
                        </p>
                        <p className="bGDate">
                          <i>{year}</i>
                        </p>
                        <p> Lovely Professional University</p>
                      </div>
                      <div>
                        <p>
                          <b>
                            Diploma in Software Development and Programming{" "}
                          </b>
                        </p>
                        <p className="bGDate">
                          <i> 2022-2023</i>
                        </p>
                        <p>
                          {" "}
                          Jagat Guru Nanak Dev Punjab State Open University
                          Patiala Punjab
                        </p>
                      </div>
                      <div>
                        <p>
                          <b>Graduation</b>
                        </p>
                        <p className="bGDate">
                          <i> 2020-2023</i>
                        </p>
                        <p> Government Rajindra College Bathinda</p>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col xs={6}>
                  <div>
                    <h1>Professional Experience</h1>
                    <div className="resumeSummary">
                      <h2>one year</h2>
                      <p>as a freelancer</p>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </div>
    </>
  );
};
