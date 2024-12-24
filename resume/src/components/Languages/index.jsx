import "./style.css";
import ProgressBar from "react-bootstrap/ProgressBar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
export const Languages = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  });
  return (
    <>
      <div className="main-skill">
        <div>
          <h1 className="skill-header">Languages</h1>
          <p id="skillHR"></p>
        </div>
        <div>
          <p className="paraSkill">
            I just love to learn languages. Whether it is Indian language. I
            love to listen songs in Hindi, Punjabi, English.
          </p>
        </div>
        <div id="progressSection" data-aos="fade-up">
          <Container>
            <Row>
              <Col xs={12}>
                <ul className="ulItem1">
                  <li className="liList1">
                    <div className="divItem">
                      <h6 className="head">Hindi (Fluent)</h6>
                      <h6 className="percentage">100%</h6>
                    </div>
                    <ProgressBar variant="info" now={100} />
                  </li>
                  <li className="liList1">
                    <div className="divItem">
                      <h6 className="head">Punjabi (Fluent)</h6>
                      <h6 className="percentage">100%</h6>
                    </div>
                    <ProgressBar variant="info" now={100} />
                  </li>{" "}
                  <li className="liList1">
                    <div className="divItem">
                      <h6 className="head js">English (Fluent)</h6>
                      <h6 className="percentage">70%</h6>
                    </div>
                    <ProgressBar variant="info" now={70} />
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
