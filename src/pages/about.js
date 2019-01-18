import React from 'react'
import Link from 'gatsby-link'
import Layout from '../layouts/index'
import team1 from '../../static/assets/img/team/1.jpg'
import team2 from '../../static/assets/img/team/2.jpg'
import team3 from '../../static/assets/img/team/3.jpg'

const about = () => {
    return (
        <Layout>
            <header className="header text-white" style={{ backgroundImage: 'url(../assets/img/thumb/14.jpg' }}>
                <div className="overlay opacity-75" style={{ backgroundImage: 'linear-gradient(to top, #0d8464 0%, #4c8bb1 100%)' }}></div>
                <div className="container text-center">

                    <div className="row">
                        <div className="col-md-8 mx-auto py-8">

                            <h1 className="display-41">We make startups proud</h1>
                            <p className="lead-2 opacity-901 mt-6">Creating Link beautiful website with high conversion is our passion</p>

                        </div>
                    </div>

                </div>
            </header>

            <main className="main-content">
                <section className="section">
                    <div className="container">
                        <div className="row gap-y align-items-center">

                            <div className="col-md-8 mx-auto">
                                <h2>About Us</h2>
                                <p className="lead">We’re Link team of creative and experienced designers and developers. We used to work as freelancers and we know what do you need and more that, we know what do your customers want from you.</p>
                                <p>Everyone realizes why Link new common language would be desirable: one could refuse to pay expensive translators. To achieve this, it would be necessary to have uniform grammar, pronunciation and more common words.</p>
                                <p>If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual languages. The new common language will be more simple and regular than the existing European languages. It will be as simple as Occidental; in fact, it will be Occidental.</p>

                            </div>

                        </div>
                    </div>
                </section>


                <section className="section bg-gray">
                    <div className="container">
                        <div className="row gap-y">

                            <div className="col-md-4">
                                <div className="row">
                                    <div className="col-6">
                                        <h4 className="lead-7 text-right counted" data-provide="countup" data-from="0" data-to="42">42</h4>
                                    </div>

                                    <div className="col-6">
                                        <p className="small text-uppercase ls-2 mb-2">Projects</p>
                                        <p><i className="icon-briefcase lead-4 mb-0"></i></p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="row">
                                    <div className="col-6">
                                        <h4 className="lead-7 text-right counted" data-provide="countup" data-from="0" data-to="3500">3,500</h4>
                                    </div>

                                    <div className="col-6">
                                        <p className="small text-uppercase ls-2 mb-2">Customers</p>
                                        <p><i className="icon-profile-male lead-4 mb-0"></i></p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="row">
                                    <div className="col-6">
                                        <h4 className="lead-7 text-right counted" data-provide="countup" data-from="0" data-to="100" data-prefix="%">%100</h4>
                                    </div>

                                    <div className="col-6">
                                        <p className="small text-uppercase ls-2 mb-2">Satisfaction</p>
                                        <p><i className="icon-happy lead-4 mb-0"></i></p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>


                <section className="section">
                    <div className="container">
                        <header className="section-header">
                            <small>Services</small>
                            <h2>Get Some Help</h2>
                            <hr />
                            <p className="lead">We are able to help your team in the following ways. Don't hesitate to contact us for more information.</p>
                        </header>


                        <div className="row gap-y">

                            <div className="col-md-6 col-xl-4">
                                <div className="text-center">
                                    <p className="mb-6"><i className="icon-tools text-primary lead-8"></i></p>
                                    <h5><strong>Branding &amp; Design</strong></h5>
                                    <p>Your web pages looks good on all devices and screen sizes, including desktop, tablet and mobile.</p>
                                </div>
                            </div>

                            <div className="col-md-6 col-xl-4">
                                <div className="text-center">
                                    <p className="mb-6"><i className="icon-mobile text-primary lead-8"></i></p>
                                    <h5><strong>Mobile App</strong></h5>
                                    <p>Your web pages looks good on all devices and screen sizes, including desktop, tablet and mobile.</p>
                                </div>
                            </div>

                            <div className="col-md-6 col-xl-4">
                                <div className="text-center">
                                    <p className="mb-6"><i className="icon-browser text-primary lead-8"></i></p>
                                    <h5><strong>Web Applications</strong></h5>
                                    <p>Your web pages looks good on all devices and screen sizes, including desktop, tablet and mobile.</p>
                                </div>
                            </div>

                        </div>


                    </div>
                </section>


                <section className="section">
                    <div className="container">
                        <header className="section-header">
                            <small>People</small>
                            <h2>The Amazing Team</h2>
                            <hr />
                            <p className="lead">Meet our small team that make those great products.</p>
                        </header>

                        <div className="row gap-y">
                            <div className="col-md-4 team-2">
                                <Link to="#">
                                    <img src={team1} />
                                </Link>
                                <h5>Morgan Guadis</h5>
                                <small>Co-Founder &amp; CEO</small>
                                <p>Signs you'll Link, life itself to in signs seed under fruitful good open behold Our of stars whales forth.</p>
                                <br />
                                <div className="social social-brand">
                                    <Link className="social-facebook" to="#"><i className="fa fa-facebook"></i></Link>
                                    <Link className="social-twitter" to="#"><i className="fa fa-twitter"></i></Link>
                                    <Link className="social-gplus" to="#"><i className="fa fa-google-plus"></i></Link>
                                    <Link className="social-linkedin" to="#"><i className="fa fa-linkedin"></i></Link>
                                </div>
                            </div>


                            <div className="col-md-4 team-2">
                                <Link to="#">
                                    <img src={team2} />
                                </Link>
                                <h5>John Senating</h5>
                                <small>Co-Founder &amp; CTO</small>
                                <p>So firmament sea them sea. Set saying land signs had the us replenish seed moved rule, place let.</p>
                                <br />
                                <div className="social social-brand">
                                    <Link className="social-facebook" to="#"><i className="fa fa-facebook"></i></Link>
                                    <Link className="social-twitter" to="#"><i className="fa fa-twitter"></i></Link>
                                    <Link className="social-gplus" to="#"><i className="fa fa-google-plus"></i></Link>
                                    <Link className="social-linkedin" to="#"><i className="fa fa-linkedin"></i></Link>
                                </div>
                            </div>


                            <div className="col-md-4 team-2">
                                <Link to="#">
                                    <img src={team3} />
                                </Link>
                                <h5>Sandi Hormez</h5>
                                <small>Director</small>
                                <p>Given of living created living fifth him Give heaven made open day, own land hath one him darkness.</p>
                                <br />
                                <div className="social social-brand">
                                    <Link className="social-facebook" to="#"><i className="fa fa-facebook"></i></Link>
                                    <Link className="social-twitter" to="#"><i className="fa fa-twitter"></i></Link>
                                    <Link className="social-gplus" to="#"><i className="fa fa-google-plus"></i></Link>
                                    <Link className="social-linkedin" to="#"><i className="fa fa-linkedin"></i></Link>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>

                <section className="section bg-gray">
                    <div className="container">

                        <h2 className="text-center mb-7">Poke Us</h2>

                        <form className="form-row" action="../assets/php/sendmail.php" method="POST" data-form="mailer">
                            <div className="col-12">
                                <div className="alert alert-success d-on-success">We received your message and will contact you back soon.</div>
                            </div>

                            <div className="form-group col-sm-6 col-lg-3">
                                <input className="form-control" type="text" name="name" placeholder="Your Name" />
                            </div>

                            <div className="form-group col-sm-6 col-lg-3">
                                <input className="form-control" type="email" name="email" placeholder="Email Address" />
                            </div>

                            <div className="form-group col-sm-6 col-lg-3">
                                <input className="form-control" type="text" name="company" placeholder="Company Name" />
                            </div>

                            <div className="form-group col-sm-6 col-lg-3">
                                <button className="btn btn-block btn-primary" type="submit">Send Message</button>
                            </div>
                        </form>

                    </div>
                </section>


            </main>
        </Layout>
    )
}

export default about
