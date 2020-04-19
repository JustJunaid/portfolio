import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const StyledImgMobile = styled.img`
  border-radius: 10px;
  border: 2px solid lightskyblue;
  width: 170px;
`

const StyledImgDesktop = styled.img`
  margin-top: -3rem;
  margin-left: 10rem;
  border: 2px solid lightskyblue;
  border-radius: 20px;
`

const StyledImageDiv = styled.div`
  order: 2;
  @media only screen and (max-width: 600px) {
    order: 1;
  }
`

const StyledContentDiv = styled.div`
  order: 1;
  @media only screen and (max-width: 600px) {
    order: 2;
  }
`

const imageSrc = "/assets/img/junaidMobile.jpg"

export default function About() {
  return (
    <header className="header">
      <div className="container">
        <div className="row gap-y align-items-center h-100">
          <StyledContentDiv className="col-lg-6 col-xs-12 mr-auto content-div">
            <h1 className="fw-600">
              Hello World! <br />I am{" "}
              <span className="text-warning">Junaid Choudhary.</span>
              <br />A <span className="text-info">Full-Stack Developer.</span>
            </h1>
            <p className="mt-5 mb-8">
              Junaid is a Javascript Developer over two years of experience in
              Software Development. He specialises in developing web based
              E-commerce applications, mergers and acquisitions, chat bots and
              social networking applications using technologies such as Reactjs
              and Nodejs. <br />
              Junaid possesses good practical knowledge of project management
              and is skilled in executing all facets of project lifecycle
              including scope definition, requirements gathering & building,
              deployment and production support.
            </p>
            <p className="gap-xy">
              <Link
                to="/portfolio"
                className="btn btn-round btn-primary mw-200"
              >
                Check out the latest work
              </Link>
            </p>
          </StyledContentDiv>

          <StyledImageDiv
            className="col-lg-6 col-xs-12 image-div"
            id="image-div"
          >
            {typeof window !== "undefined" &&
            window.matchMedia("(max-width: 700px)").matches ? (
              <StyledImgMobile src={imageSrc}></StyledImgMobile>
            ) : (
              <StyledImgDesktop src={imageSrc}></StyledImgDesktop>
            )}
          </StyledImageDiv>
        </div>
      </div>
    </header>
  )
}
