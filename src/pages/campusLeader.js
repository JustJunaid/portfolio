import React from 'react'
import Layout from '../layouts/index'
import Link from 'gatsby-link'

export default function campusLeader() {
    return (
        <Layout>
            <header className="header pb-9 pt-10" style={{ backgroundImage: 'url(../assets/img/how_it_works/1.jpg)' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <h1 className="fw-200 mb-6">Shuffle</h1>
                            <p className="lead-2">Categorize, sort, search and filter a responsive grid of items with beautiful animation.</p>

                            <hr className="w-50px ml-0" />

                            <a className="text-dark opacity-50 small" href="index.html">Also, visit our documentation page.</a>
                        </div>
                    </div>
                </div>
            </header>

            <main className="main-content pt-8">
                <header className="section-header">
                    <small>Features</small>
                    <h2>Designed for everyone, everywhere</h2>
                    <hr />
                    <p className="lead">Bootstrap makes front-end web development faster and easier. It's made for folks of all skill levels, devices of all shapes, and projects of all sizes.</p>
                </header>

                <div className="container">
                    <div className="col-md-12 col-xl-12 feature-1 text-center">
                        <p className="feature-icon text-warning"><i className="icon-browser"></i></p>
                        <h5>Know your template</h5>
                    </div>
                    <ol className="timeline timeline-horizontal" style={{ marginTop: '60px;' }}>
                        <li className="timeline-item">
                            <h6><strong>Step 1</strong></h6>

                        </li>

                        <li className="timeline-item">
                            <h6><strong>Step 2</strong></h6>
                        </li>

                        <li className="timeline-item">
                            <h6><strong>Step 3</strong></h6>
                        </li>

                        <li className="timeline-item">
                            <h6><strong>Step 4</strong></h6>
                        </li>
                    </ol>

                    <p className="text-center">Think the or organization same proposal to affected heard reclined in be it reassuring are attained opinion, by he even again.</p>
                </div>


                <div className="section">
                    <div className="container">

                        <div className="row gap-y text-center">

                            <div className="col-md-6 col-xl-6 feature-1">
                                <p className="feature-icon text-danger"><i className="icon-pictures"></i></p>
                                <h5>All the themes you need</h5>
                                <p>Your landing page displays smoothly on any device: desktop, tablet or mobile.</p>
                            </div>


                            <div className="col-md-6 col-xl-6 feature-1">
                                <p className="feature-icon text-warning"><i className="icon-browser"></i></p>
                                <h5>Know your template</h5>
                                <p>You can easily modify any block data to fits your need; image, title, text, etc.</p>
                            </div>


                            <div className="col-md-6 col-xl-6 feature-1">
                                <p className="feature-icon text-success"><i className="icon-gift"></i></p>
                                <h5>All in one place</h5>
                                <p>There is an extensive amount of UI elements and shortcodes to easily develop your blocks.</p>
                            </div>

                            <div className="col-md-6 col-xl-6 feature-1">
                                <p className="feature-icon text-success"><i className="icon-gift"></i></p>
                                <h5>All in one place</h5>
                                <p>There is an extensive amount of UI elements and shortcodes to easily develop your blocks.</p>
                            </div>

                        </div>
                    </div>
                </div>

                <section className="section overflow-hidden" style={{ paddingTop: '0;' }}>
                    <div className="container">
                        <header className="section-header">
                            <small>Video</small>
                            <h2>Watch It Grow</h2>
                            <hr />
                            <p className="lead">Explore the best SaaS template in the market in a short 1-minute video.</p>
                        </header>


                        <div className="row">
                            <div className="col-md-8 mx-auto">

                                <div className="bg-img rounded text-white text-center p-6 p-md-10" style={{backgroundImage: "url(../assets/img/ruby/video.jpg)"}}>
                                    <h4>We made it so easy to create a SaaS website with few copy and pastes.</h4>
                                    <br />
                                    <Link className="btn btn-circle btn-xl btn-primary" to="https://www.youtube.com/watch?v=ah4pcPbRi2M" data-provide="lightbox"><i className="fa fa-play"></i></Link>
                                </div>

                            </div>
                        </div>
                    </div>

                </section>
                <div className="section" style={{paddingTop:'0;'}}>
                    <div className="container">

                        <div className="row">
                            <form className="col-lg-6 mx-auto p-6 bg-gray rounded" action="../assets/php/sendmail.php" method="POST" data-form="mailer">
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

                </div>
            </main>
        </Layout>
    )
}
