import React from "react";
import { LuServer } from "react-icons/lu";
import "./service.css";

export const Service = () => {
  return (
    <>
      <div id="service">
        {" "}
        <div className="main-service">
          {" "}
          <div>
            <h1 className="pro-header">service</h1>
            <p id="portHR"></p>
          </div>
          <div>
            <div className="luServer">
              {" "}
              <LuServer />
            </div>
            <h1 className="end">frontend Development</h1>
            <p className="para-set">
              With my experience, I'm pleased to design & build your dream
              project with latest technologies like React.js
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
