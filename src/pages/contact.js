import React from "react"
import Layout from "../layouts/index"

export default function contact() {
  return (
    <Layout>
      <section className="section">
        <div className="container">
          <form className="row gap-y">
            <div className="col-lg-7">
              <h3>Contact Us</h3>
              <br />

              <div className="alert alert-success d-on-success">
                We received your message and will contact you back soon.
              </div>

              <div className="form-row">
                <div className="form-group col-md-6">
                  <input
                    className="form-control form-control-lg"
                    type="text"
                    name="name"
                    placeholder="Name"
                  />
                </div>

                <div className="form-group col-md-6">
                  <input
                    className="form-control form-control-lg is-invalid"
                    type="email"
                    name="email"
                    placeholder="Email"
                  />
                </div>
              </div>

              <div className="form-group">
                <textarea
                  className="form-control form-control-lg is-invalid"
                  rows="4"
                  placeholder="Message"
                  name="message"
                ></textarea>
              </div>

              <button className="btn btn-lg btn-primary" type="submit">
                Send message
              </button>
            </div>

            <div className="col-lg-4 ml-auto text-center text-lg-left">
              <hr className="d-lg-none" />
              <h3>Find Us</h3>
              <br />
              <p>
                2651 Main Street, Suit 124
                <br />
                >Seattle, WA, 98101
              </p>
              <p>
                +1 (321) 654 9870
                <br />
                >+1 (987) 123 6548
              </p>
              <p>hello@thetheme.io</p>
            </div>
          </form>
        </div>
      </section>
    </Layout>
  )
}
