import React, { useState } from "react"
import Layout from "../layouts/index"
import SEO from "../components/Seo"
import ContactForm from "../components/ContactForm"

const Contact = () => {
  return (
    <Layout>
      <SEO title="JustJunaid | Contact" />
      <section
        class="section pt-0"
        style={{ minHeight: "calc(100vh - 173px)" }}
      >
        <div class="container">
          <h2 class="text-center">Let's Get In Touch</h2>

          <div class="row">
            <form
              name="contact"
              class="col-11 col-lg-6 mx-auto p-6 rounded"
              action="POST"
              netlify-honeypot="bot-field"
              data-netlify="true"
            >
              <input type="hidden" name="bot-field" value="contact" />
              <ContactForm />
            </form>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Contact
