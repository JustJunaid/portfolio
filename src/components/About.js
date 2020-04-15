import React from "react"
import styled from "styled-components"

const StyledImgMobile = styled.img`
  border-radius: 50%;
  border: 2px solid lightskyblue;
`

const StyledImgDesktop = styled.img`
  margin-left: 10rem;
  width: 250px;
  border: 2px solid black;
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

const mobileImageSrc =
  "https://lh3.googleusercontent.com/-Wk2Vcc-SbfQ/Xf4HszoFjtI/AAAAAAAAF2g/kh6EwibfGNkhzrkJ2yTqhAqLwB6F4cu6QCEwYBhgLKs0DAMBZVoCPYY5vDoxgAYO-FT4Mh5ggOZ1QtYJRFwrZ5EXwiEY8ncqB2jodNT4hSFukAw9eqTA2ulzXtYv6mtluLQZKab9TbPDqyuniI879nxqVrgnDy5wJdPVeE0hDhDW44cdkt4TxOke-OWQRZcgteQKwfEYbHyfA4oc-Yp-c-PvcWhbUamJ6GNPzy13vaENJc1kAWsDTn6C__-Mt1aLdcjLFF1rfJByaeLLCC7ebPln-lSgqaqS3AnGnJF614f0RkgknnlSCwftccz4LcgjrmunrmoeaGfqrJjilCuTAwd_77qSNw60gfMOqoV_EeTOHR_JqY8ZviohbtktbNCSQBEYLfvXI_3c9DltX8sF-7xeSteJbugvRY9XPshNiy5Kw9Hl97A78mgCG8Aacv0RrHx4FcF6Em7UYlRySgq9Jd3derNubP0DlbS95zIDiUKGBA5ciWqZenLCjBuPVKS3ItGqlJXGvN61-r5A9xTcDytQELfRnDBsLb7vIJTozO0QcWgHU5UWSTyaFAEV5yrG9a375F5RZ13FNT4PaW9IaMs8jVpDxxQVP9TC33mPSECfvJaQBhoHfA6MfS145faOlLoT00gsclzOqYUrvpasw7qXW9AU/w140-h139-p/2019-12-21.jpg"

const desktopImageSrc = "/assets/img/junaid.jpg"

export default function About() {
  return (
    <header className="header h-fullscreen" style={{ paddingTop: 40 }}>
      <div className="container">
        <div className="row gap-y align-items-center h-100">
          <StyledContentDiv className="col-lg-6 col-xs-12 mr-auto content-div">
            <h1 className="fw-600">
              Hello World! <br />I am{" "}
              <span className="text-warning">Junaid Choudhary.</span>
              <br />A <span className="text-info">Full-Stack Developer.</span>
            </h1>
            <p className="lead mt-5 mb-8">
              I usually code in JavaScript And this is probably the most
              shittiest website i have ever built ;) <br />
              The picture you see on your right is the most random picture of
              me, will change it later.
            </p>
            <p className="gap-xy">
              <a className="btn btn-round btn-primary mw-200" href="#subscribe">
                Check out the latest work
              </a>
            </p>
          </StyledContentDiv>

          <StyledImageDiv
            className="col-lg-6 col-xs-12 image-div"
            id="image-div"
          >
            {window.matchMedia("(max-width: 700px)").matches ? (
              <StyledImgMobile src={mobileImageSrc}></StyledImgMobile>
            ) : (
              <StyledImgDesktop src={desktopImageSrc}></StyledImgDesktop>
            )}
          </StyledImageDiv>
        </div>
      </div>
    </header>
  )
}
