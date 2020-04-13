import React from "react"
import Link from "gatsby-link"
import Layout from "../layouts/index"
import styled from "styled-components"

const H2 = styled.h2`
  font-size: 2.10938rem;
  color: #323d47;
  letter-spacing: 0.5px;
`

export default () => (
  <Layout>
    <header
      class="header text-white h-fullscreen overflow-hidden"
      style={{
        backgroundImage: "linear-gradient(-45deg, #667eea 0%, #764ba2 100%)",
      }}
    >
      <canvas
        class="constellation"
        data-radius="0"
        width="1353"
        height="623"
      ></canvas>
      <div class="container position-static">
        <div class="row align-items-center h-100">
          <div class="col-lg-7">
            <h1 class="display-4 fw-500">Junaid Choudhary</h1>
            <p class="lead mt-5 mb-7 mb-md-9 w-80">
              <strong>TheSaaS</strong> is an elegant, modern and fully
              customizable SaaS and WebApp template powered by Bootstrap 4
            </p>
            <a
              class="btn btn-xl btn-round btn-outline-light w-200 px-6"
              href="#section-demo"
            >
              Explore Demos
            </a>
          </div>

          <div class="col-lg-5 d-none d-lg-block"></div>
        </div>
      </div>
    </header>
  </Layout>
)
