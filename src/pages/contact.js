import React from 'react'
import Layout from '../layouts/index'
import Link from 'gatsby-link'

const contact = () => {
    return (
        <Layout>
            <header className="header pt-10 pb-0">
                <div className="container text-center">
                    <h1 className="display-4">Let's Get In Touch</h1>
                    <p className="lead-2 mt-6">Here are the ways you can contact us with any questions you have</p>
                </div>
            </header>

            <main className="main-content">
                <main className="main-content">
                    <section className="section">
                        <div className="container">

                            <div className="row">
                                <form className="col-lg-6 mx-auto p-6 bg-gray rounded" action="../assets/php/sendmail.php" method="POST"
                                    data-form="mailer">
                                    <div className="alert alert-success d-on-success">We received your message and will contact you back soon.</div>

                                    <div className="form-row">
                                        <div className="form-group col-md-6">
                                            <input className="form-control form-control-lg" type="text" name="name" placeholder="Your Name" />
                                        </div>

                                        <div className="form-group col-md-6">
                                            <input className="form-control form-control-lg" type="email" name="email" placeholder="Your Email Address" />
                                        </div>
                                    </div>


                                    <div className="form-group">
                                        <textarea className="form-control form-control-lg" rows="4" placeholder="Your Message" name="message"></textarea>
                                    </div>

                                    <div className="text-center">
                                        <button className="btn btn-lg btn-primary" type="submit">Submit Inquiry</button>
                                    </div>
                                </form>
                            </div>

                        </div>
                    </section>

                    <section className="section text-white bg-dark bg-img" style={{ backgroundImage: 'url(../assets/img/thumb/14.jpg)' }}
                        data-overlay="6">
                        <div className="container">
                            <div className="row gap-y align-items-center">

                                <div className="col-md-5">
                                    <p className="text-uppercase small opacity-70 fw-600 ls-1">Head Office</p>
                                    <h5>Seattle, WA</h5>
                                    <br />
                                    <p>2651 Main Street, Suit 124<br />Seattle, WA, 98101</p>
                                    <p>Phone: +1 987 123 6548<br />Email: hello@thetheme.io</p>
                                    <br />
                                    <h6>Follow Us</h6>
                                    <div className="social social-sm social-inverse">
                                        <Link className="social-twitter" to="#"><i className="fa fa-twitter"></i></Link>
                                        <Link className="social-facebook" to="#"><i className="fa fa-facebook"></i></Link>
                                        <Link className="social-instagram" to="#"><i className="fa fa-instagram"></i></Link>
                                        <Link className="social-dribbble" to="#"><i className="fa fa-dribbble"></i></Link>
                                    </div>
                                </div>
                                <div className="col-md-7">
                                    <h1>Map will be here</h1>
                                </div>
                            </div>
                        </div>
                    </section>

                </main>
            </main>
        </Layout>
    )
}

export default contact
