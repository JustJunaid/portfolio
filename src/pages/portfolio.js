import React from "react"
import Layout from "../layouts"

export default function portfolio() {
  return (
    <Layout>
      <header class="header text-center pb-0">
        <div class="container">
          <h1 class="display-4">Paper Cup Mockup</h1>
          <p class="lead-2 mt-6">
            A design which specificly can be use for phone devices
          </p>
        </div>
      </header>
      <main class="main-content">
        {/* |‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒
      | Project details
      |‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒ */}

        <section class="section bb-1">
          <div class="container">
            <div class="row">
              <div class="col-md-8 mb-6 mb-md-0">
                <img src="../assets/img/portfolio/4.jpg" alt="project image" />
              </div>

              <div class="col-md-4">
                <h5>Project detail</h5>

                <p>
                  Out or geared it but to best up samples the for she phase of
                  copy would do in divine of taken and the take medical or upper
                  at him in the logbook were, we price his mostly to commas.
                </p>

                <ul class="project-detail mt-7">
                  <li>
                    <strong>Client</strong>
                    <span>Envato Inc.</span>
                  </li>

                  <li>
                    <strong>Date</strong>
                    <span>June 27, 2020</span>
                  </li>

                  <li>
                    <strong>Skills</strong>
                    <span>Design, HTML, CSS, Javascript</span>
                  </li>

                  <li>
                    <strong>Address</strong>
                    <a href="http://thetheme.io/thesaas">thetheme.io/thesaas</a>
                  </li>

                  <li>
                    <strong>Share</strong>
                    <div class="social social-sm social-gray social-inline mt-2">
                      <a class="social-facebook" href="#">
                        <i class="fa fa-facebook"></i>
                      </a>
                      <a class="social-twitter" href="#">
                        <i class="fa fa-twitter"></i>
                      </a>
                      <a class="social-instagram" href="#">
                        <i class="fa fa-instagram"></i>
                      </a>
                      <a class="social-dribbble" href="#">
                        <i class="fa fa-dribbble"></i>
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* |‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒
      | Related projects
      |‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒ */}

        <section class="section">
          <div class="container">
            <h5 class="mb-6">Related Projects</h5>

            <div class="row gap-y gap-2" data-shuffle="list">
              <div
                class="col-6 col-lg-3"
                data-shuffle="item"
                data-groups="bag,box"
              >
                <a
                  class="portfolio-1"
                  href="#"
                  data-toggle="modal"
                  data-target="#modal-portfolio"
                >
                  <img src="../assets/img/portfolio/1.jpg" alt="screenshot" />
                  <div class="portfolio-detail">
                    <h5>Phone Bag</h5>
                    <p>Bag, Box</p>
                  </div>
                </a>
              </div>

              <div
                class="col-6 col-lg-3"
                data-shuffle="item"
                data-groups="book"
              >
                <a
                  class="portfolio-1"
                  href="#"
                  data-toggle="modal"
                  data-target="#modal-portfolio"
                >
                  <img src="../assets/img/portfolio/2.jpg" alt="screenshot" />
                  <div class="portfolio-detail">
                    <h5>Mockup Book</h5>
                    <p>Book</p>
                  </div>
                </a>
              </div>

              <div class="col-6 col-lg-3" data-shuffle="item" data-groups="box">
                <a
                  class="portfolio-1"
                  href="#"
                  data-toggle="modal"
                  data-target="#modal-portfolio"
                >
                  <img src="../assets/img/portfolio/3.jpg" alt="screenshot" />
                  <div class="portfolio-detail">
                    <h5>T-shirt</h5>
                    <p>Box</p>
                  </div>
                </a>
              </div>

              <div
                class="col-6 col-lg-3"
                data-shuffle="item"
                data-groups="bottle"
              >
                <a
                  class="portfolio-1"
                  href="#"
                  data-toggle="modal"
                  data-target="#modal-portfolio"
                >
                  <img src="../assets/img/portfolio/5.jpg" alt="screenshot" />
                  <div class="portfolio-detail">
                    <h5>Shampoo</h5>
                    <p>Bottle</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section class="section bg-gray text-center">
          <h2 class="mb-6">Get a Quote</h2>
          <p class="lead text-muted">
            We’ve Completed More Than 100+ project for our amazing clients, if
            you interested?
          </p>
          <hr class="w-50px" />
          <a class="btn btn-lg btn-round btn-success" href="#">
            Design your site now
          </a>
        </section>
      </main>
    </Layout>
  )
}
