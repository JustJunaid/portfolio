import React from "react"
import Layout from "../layouts"

export default function about() {
  return (
    <Layout>
      <section class="section p-0">
        <div class="container-wide">
          <div class="row no-gutters">
            <div
              class="col-md-4 bg-img"
              style={{
                backgroundImage: "url(../assets/img/junaid.jpg)",
                minHeight: "300px",
              }}
            ></div>

            <div class="col-md-8 p-6 p-md-8">
              <h4>
                <b>About</b>
              </h4>
              <p class="lead">
                Junaid is a Javascript Developer over two years of experience in
                Software Development. He specialises in developing web based
                E-commerce applications, mergers and acquisitions, chat bots and
                social networking applications using technologies such as
                Reactjs and Nodejs. <br />
                Junaid possesses good practical knowledge of project management
                and is skilled in executing all facets of project lifecycle
                including scope definition, requirements gathering & building,
                deployment and production support.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
