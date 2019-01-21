import React from 'react'
import Link from 'gatsby-link'
import { StaticQuery, graphql } from 'gatsby';
import { element } from 'prop-types';

/* eslint-disable */

export default function Footer() {
    return (
        <StaticQuery
            query={socialLinksQuery}
            render={
                (data) => (
                    <footer className="footer">
                        <div className="container">
                            <div className="row gap-y align-items-center">

                                <div className="col-6 col-lg-3">
                                    <Link to="index.html"><img src="assets/img/logo-dark.png" /></Link>
                                </div>
                                <div className="col-6 col-lg-3 text-right order-lg-last">
                                    <div className="social">
                                        {data.site.siteMetadata.socialProfiles.map(element => (
                                            <a href={element.url} className={`social-${element.type}`}><i className={`fa fa-${element.type}`}></i></a>
                                        ))}

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
            } />
    )
}

const socialLinksQuery = graphql`
    query {
    site {
        siteMetadata {
        socialProfiles {
            type
            url
        }
        }
    }
}
`
