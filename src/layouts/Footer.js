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
                        <Link className="social-facebook" to="https://www.facebook.com/thethemeio"><i className="fa fa-facebook"></i></Link>
                        <Link className="social-twitter" to="https://www.facebook.com/thethemeio"><i className="fa fa-twitter"></i></Link>
                        <Link className="social-instagram" to="https://www.facebook.com/thethemeio"><i className="fa fa-instagram"></i></Link>
                        <Link className="social-dribbble" to="https://www.facebook.com/thethemeio"><i className="fa fa-dribbble"></i></Link>
                    </div>
                </div>

                <div className="col-lg-6">
                    <div className="nav nav-bold nav-uppercase nav-trim justify-content-lg-center">
                        <Link className="nav-link" to="/footer_blog.html">Blog</Link>
                        <Link className="nav-link" to="/footer_faq.html">FAQs</Link>
                        <Link className="nav-link" to="/footer_privacy.html">Privacy</Link>
                        <Link className="nav-link" to="/footer_legal.html">Legal</Link>
                        <Link className="nav-link" to="/footer_testimonial.html">Testimonials</Link>
                    </div>
                </div>

            </div>
        </div>
    </footer>
    )
  }
}
