import React, { useState } from "react"
import Layout from "../layouts/index"
import { handleTrackCustomEvent } from "../utils"
import SEO from "../components/Seo"

const Contact = () => {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false)
  const handleForm = (e) => {
    e.preventDefault()
    handleTrackCustomEvent("SUBMIT_INQUIRY")
    setIsFormSubmitted(true)
    const form = e.target
    form.name.value = ""
    form.email.value = ""
    form.message.value = ""
    const timer = setTimeout(() => setIsFormSubmitted(false), 2500)
    return () => clearTimeout(timer)
  }

  return (
    <Layout>
      <SEO title="JustJunaid | Contact" />
      <section
        class="section pt-0"
        style={{ minHeight: "calc(100vh - 215px)" }}
      >
        <div class="container">
          <h2 class="text-center">Let's Get In Touch</h2>

          <div class="row">
            <form
              name="contact"
              class="col-11 col-lg-6 mx-auto p-6 rounded"
              method="post"
              netlify-honeypot="bot-field"
              data-netlify="true"
              onSubmit={(e) => handleForm(e)}
            >
              <input type="hidden" name="bot-field" value="contact" />
              {isFormSubmitted && (
                <div class="alert alert-success d-on-success">
                  We received your message and will contact you back soon.
                </div>
              )}

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

export default Contact
