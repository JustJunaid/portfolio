import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const StyledP = styled.p`
  font-size: 20px;

  @media only screen and (max-width: 600px) {
    font-size: 16px;
  }
`;

export default function About() {
  return (
    <header className="header h-fullscreen" style={{ marginTop: "-7rem" }}>
      <div className="container">
        <div className="row gap-y align-items-center h-100">
          <div className="col-12 mr-auto content-div">
            <h1 className="fw-600" style={{ color: "cadetblue" }}>
              Hey there! <br />I am{" "}
              <span style={{ color: "#ffbbaa" }}>Junaid Choudhary.</span>
              <br />A <span className="text-info">Full-Stack Developer.</span>
            </h1>
            <StyledP>
              Are you looking for someone who not just built the content, but
              the content that sells? <br />
              Well! you are at the right place!{" "}
            </StyledP>
            <p className="gap-xy mt-6">
              <Link
                to="/portfolio"
                className="btn btn-round btn-primary mw-200"
              >
                Check out the latest work
              </Link>
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
