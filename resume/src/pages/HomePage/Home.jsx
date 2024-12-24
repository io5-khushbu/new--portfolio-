import "./home.css";
import { Typewriter } from "react-simple-typewriter";
import { AnimationSide } from "../../components/sideBar/MovingSide/animationSide";

export const Home = () => {
  return (
    <>
      <div id="home">
        <div id="homeImage">
          <div id="ex">
            <AnimationSide />
          </div>
          <p className="headName">Khushbu Maurya</p>
          <p className="skill">
            <span className="second-text">
              <p className="first-text">
                I'm&nbsp;
                <span
                  style={{
                    // color: "#1E3F56",
                    // color: "#fff",
                    borderBottom: "4px solid skyBlue",
                  }}
                >
                  <Typewriter
                    words={["Frontend Developer", "Freelancer"]}
                    loop={5}
                    cursor
                    cursorStyle="|"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                  />
                </span>
              </p>
            </span>
          </p>
        </div>
      </div>
    </>
  );
};
