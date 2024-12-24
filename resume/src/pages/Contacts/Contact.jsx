import "./style.css";
import { FaLocationDot } from "react-icons/fa6";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { IoMail } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import axios from "axios";
import { useState } from "react";
import { FaArrowAltCircleUp } from "react-icons/fa";
import { Link } from "react-scroll";

export const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      Name: name,
      Email: email,
      Message: message,
    };
    axios
      .post(
        "https://sheet.best/api/sheets/7030f7e6-79be-4792-9008-3cb11ef5b5d2",
        data
      )
      .then((response) => {
        console.log(response);
        setName("");
        setEmail("");
        setMessage("");
      });
  };
  return (
    <>
      <>
        <div id="contact">
          {" "}
          <div className="main-Contact">
            <div>
              <h1 className="Contact-header">Contacts</h1>
              <p id="contactHR"></p>
            </div>
            <div>
              <p className="paraContact">Need to know more about me?</p>
            </div>
            <div id="progressSection" className="contactSections">
              <Container>
                <Row className="row-cont">
                  <Col xs={6}>
                    <div className="bGPart">
                      <div>
                        <ul className="ulItem">
                          <li className="liDetail">
                            <div className="contactDetail">
                              <FaLocationDot className="icons" />
                              <p className="location">Location :</p>
                            </div>
                            <p className="hans">
                              street no. 0/A , Hans Nagar , bathinda
                            </p>
                          </li>
                          <li className="liDetail">
                            <div className="contactDetail">
                              <IoMail className="icons" />
                              <p className="location">email :</p>
                            </div>
                            <p className="hans gmail">
                              io5.khushbumourya@gmail.com
                            </p>
                          </li>{" "}
                          <li className="liDetail">
                            <div className="contactDetail">
                              <FaPhone className="icons" />
                              <p className="location">call :</p>
                            </div>
                            <p className="hans">+91-7814827554</p>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <iFrame
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13792.077963866957!2d74.91640589825727!3d30.207991147462113!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3917328bc465f4f5%3A0x35c4080c189e5066!2sParasram%20Nagar%2C%20Bathinda%2C%20Punjab!5e0!3m2!1sen!2sin!4v1723034739751!5m2!1sen!2sin"
                          width="90%"
                          height="350"
                          style={{
                            border: 0,
                            paddingTop: "5%",
                            paddingLeft: " 15%",
                          }}
                          allowFullScreen=""
                          loading="lazy"
                          referrerpolicy="no-referrer-when-downgrade"
                        ></iFrame>
                      </div>
                    </div>
                  </Col>
                  <Col xs={6}>
                    <div className="contact-form">
                      <form className="form" onSubmit={handleSubmit}>
                        <h5 className="name">your name</h5>
                        <input
                          className="input"
                          type="text"
                          name="username"
                          autoComplete="off"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                        />
                        <h5 className="name"> your email</h5>
                        <input
                          className="input"
                          type="email"
                          name="email"
                          autoComplete="off"
                          required
                          onChange={(e) => setEmail(e.target.value)}
                          value={email}
                        />{" "}
                        <h5 className="name">message</h5>
                        <textarea
                          className="input textArea"
                          name="message"
                          autoComplete="off"
                          required
                          onChange={(e) => setMessage(e.target.value)}
                          cols="30"
                          rows="6"
                          value={message}
                        ></textarea>
                        <button type="submit" className="send" value="send">
                          send message
                        </button>
                      </form>{" "}
                      <div className="footer">
                        <Link
                          className=" cursor"
                          activeClass="active"
                          to="home"
                          spy={true}
                          smooth={true}
                          offset={0}
                          duration={500}
                        >
                          <FaArrowAltCircleUp className="footIcon" />
                        </Link>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
          </div>
        </div>
      </>
    </>
  );
};
