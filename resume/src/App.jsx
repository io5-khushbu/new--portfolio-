import "./App.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import { Side } from "./components/sideBar/side";
import { Main } from "./components/mainPart/Main";
import { SideCopy } from "./components/sideBar copy/sideCopy";
import { useState } from "react";

export const App = () => {
  const [openSideBar, setOpenSideBar] = useState(false);
  return (
    <>
      <Container fluid>
        <Row id="row-section">
          <Col sm={4} id="side-col">
            <SideCopy
              open={openSideBar}
              onClose={() => setOpenSideBar(false)}
            />
          </Col>
          <Col sm={8} id="main-col">
            <Main />
          </Col>
        </Row>
      </Container>
    </>
  );
};
