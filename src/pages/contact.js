import React from "react"
import Layout from "../layouts/index"

export default function contact() {
  return (
    <Layout>
      <section class="section" style={{ paddingTop: "2.5rem" }}>
        <div class="container">
          <h2 class="text-center">Let's Get In Touch</h2>

          <div class="row">
            <form class="col-11 col-lg-6 mx-auto p-6 bg-gray rounded">
              {/* <div class="alert alert-success d-on-success">
                We received your message and will contact you back soon.
              </div> */}

              <div class="form-row">
                <div class="form-group col-md-6">
                  <input
                    class="form-control form-control-lg"
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    required="true"
                  />
                </div>

                <div class="form-group col-md-6">
                  <input
                    class="form-control form-control-lg"
                    type="email"
                    name="email"
                    placeholder="Your Email Address"
                  />
                </div>
              </div>

              <div class="form-group">
                <textarea
                  class="form-control form-control-lg"
                  rows="4"
                  placeholder="Your Message"
                  name="message"
                ></textarea>
              </div>

              <div class="text-center">
                <button class="btn btn-lg btn-primary" type="submit">
                  Submit Inquiry
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  )
}
