import React from "react"

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 col-xs-12">
          <p className="small">
            Designed and Developed with ❤️ by Junaid | All rights reserved.
          </p>
        </div>
        <div className="col-lg-6 col-xs-12 text-center text-md-right">
          <div className="social social-bg-brand social-cycling">
            <a
              className="social-git"
              href="https://github.com/justjunaid"
              target="_blank"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              className="social-twitter"
              href="https://twitter.com/junaid210_"
              target="_blank"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              className="social-instagram"
              href="https://instagram.com/just_junaid_here/"
              target="_blank"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
