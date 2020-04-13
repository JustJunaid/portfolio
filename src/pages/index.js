import React from "react"
import Layout from "../layouts/index"
import styled from "styled-components"

const StyledImageContainer = styled.div`
  position: relative;
  display: inline-block;
`

const StyledDiv = styled.div`
  position: absolute;
  width: 208px;
  top: 0;
  bottom: 0;
  background: white;
  opacity: 1;

  .right {
    right: 0;
  }
`

export default () => (
  <Layout>
    <header class="header h-fullscreen" style={{ paddingTop: 40 }}>
      <div class="container">
        <div class="row align-items-center h-100">
          <div class="col-lg-6">
            <h1 class="fw-600">
              Hello World! <br />I am{" "}
              <span class="text-warning">Junaid Choudhary.</span>
              <br />A <span class="text-info">Full-Stack Developer.</span>
            </h1>
            <p class="lead mt-5 mb-8">
              I usually code in JavaScript And this is probably the most
              shittiest website i have ever built ;) <br />
              The picture you see on your right is the most random picture of
              me, will change it later.
            </p>
            <p class="gap-xy">
              <a class="btn btn-round btn-primary mw-200" href="#">
                Check out the latest work
              </a>
            </p>
          </div>

          <div class="col-lg-5">
            <StyledImageContainer>
              <StyledDiv></StyledDiv>
              <img src="../assets/img/junaid.jpg" alt="img" />
              <StyledDiv className="right"></StyledDiv>
            </StyledImageContainer>
          </div>
        </div>
      </div>
    </header>
  </Layout>
)
