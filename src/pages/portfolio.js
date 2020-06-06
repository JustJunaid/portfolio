import React from "react";
import Layout from "../layouts";
import ProjectDetails from "../components/ProjectDetails";
import HitMeUp from "../components/HitMeUp";
import SEO from "../components/Seo";

export default function portfolio() {
  return (
    <Layout>
      <SEO />
      <main class="main-content">
        <ProjectDetails />

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
                  <img src="/assets/img/dummyProject.jpg" alt="screenshot" />
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
                  <img src="/assets/img/dummyProject.jpg" alt="screenshot" />
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
                  <img src="/assets/img/dummyProject.jpg" alt="screenshot" />
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
                  <img src="/assets/img/dummyProject.jpg" alt="screenshot" />
                  <div class="portfolio-detail">
                    <h5>Shampoo</h5>
                    <p>Bottle</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
        <HitMeUp />
      </main>
    </Layout>
  );
}
