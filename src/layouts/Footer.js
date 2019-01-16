import React, { Component } from 'react'
import Link from 'gatsby-link'

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="container">
            <div className="row gap-y align-items-center">

                <div className="col-6 col-lg-3">
                    <Link to="index.html"><img src="assets/img/logo-dark.png" alt="logo" />=</Link>
                </div>

                <div className="col-6 col-lg-3 text-right order-lg-last">
                    <div className="social">
                        <a className="social-facebook" href="https://www.facebook.com/thethemeio"><i className="fa fa-facebook"></i></a>
                        <a className="social-twitter" href="https://www.facebook.com/thethemeio"><i className="fa fa-twitter"></i></a>
                        <a className="social-instagram" href="https://www.facebook.com/thethemeio"><i className="fa fa-instagram"></i></a>
                        <a className="social-dribbble" href="https://www.facebook.com/thethemeio"><i className="fa fa-dribbble"></i></a>
                    </div>
                </div>

                <div className="col-lg-6">
                    <div className="nav nav-bold nav-uppercase nav-trim justify-content-lg-center">
                        <Link className="nav-link" to="/footer_blog">Blog</Link>
                        <Link className="nav-link" to="/footer_faq">FAQs</Link>
                        <Link className="nav-link" to="/footer_privacy">Privacy</Link>
                        <Link className="nav-link" to="/footer_legal">Legal</Link>
                        <Link className="nav-link" to="/footer_testimonial">Testimonials</Link>
                    </div>
                </div>

            </div>
        </div>
    </footer>
    )
  }
}
