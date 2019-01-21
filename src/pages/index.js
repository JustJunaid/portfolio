import React from "react"
import Link from 'gatsby-link'
import Layout from '../layouts/index'
import { graphql } from 'gatsby'

export default ({data}) =>
    <Layout>
        <div>
            <header>
                <section className="section">
                    <div className="container">
                        <header className="section-header">
                            <h2> {data.site.siteMetadata.title} </h2>
                            <hr />
                            <p className="lead">Over Link dozen reusable components built to provide iconography, dropdowns, input groups, navigation, alerts, and much more.</p>
                        </header>


                        <div className="row gap-y">

                            <div className="col-md-6 col-lg-4">
                                <Link className="card card-body border hover-shadow-6 text-center py-6" to="/ruby_card">
                                    <p><i className="icon-mobile lead-6 text-muted"></i></p>
                                    <h5 className="card-title text-dark mb-0">Ruby Card</h5>
                                    <p className="text-center text-muted">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                                </Link>
                            </div>


                            <div className="col-md-6 col-lg-4">
                                <Link className="card card-body border hover-shadow-6 text-center py-6" to="/get_loans">
                                    <p><i className="icon-gears lead-6 text-muted"></i></p>
                                    <h5 className="card-title text-dark mb-0">Get Loans</h5>
                                    <p className="text-center text-muted">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                                </Link>
                            </div>


                            <div className="col-md-6 col-lg-4">
                                <Link className="card card-body border hover-shadow-6 text-center py-6" to="/pay_fees">
                                    <p><i className="icon-tools lead-6 text-muted"></i></p>
                                    <h5 className="card-title text-dark mb-0">Pay Fees</h5>
                                    <p className="text-center text-muted">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                                </Link>
                            </div>


                            <div className="col-md-6 col-lg-4">
                                <Link className="card card-body border hover-shadow-6 text-center py-6" to="/shop_online">
                                    <p><i className="icon-recycle lead-6 text-muted"></i></p>
                                    <h5 className="card-title text-dark mb-0">Shop From Online Merchants</h5>
                                    <p className="text-center text-muted">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                                </Link>
                            </div>


                            <div className="col-md-6 col-lg-4">
                                <Link className="card card-body border hover-shadow-6 text-center py-6" to="/get_deals">
                                    <p><i className="icon-browser lead-6 text-muted"></i></p>
                                    <h5 className="card-title text-dark mb-0">Get Deals</h5>
                                    <p className="text-center text-muted">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                                </Link>
                            </div>


                            <div className="col-md-6 col-lg-4">
                                <Link className="card card-body border hover-shadow-6 text-center py-6" to="#">
                                    <p><i className="icon-paintbrush lead-6 text-muted"></i></p>
                                    <h5 className="card-title text-dark mb-0">Repay At 0% Interest</h5>
                                    <p className="text-center text-muted">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                                </Link>
                            </div>

                        </div>
                    </div>
                </section>
            </header>

            <main className="main-content">
                <section className="section bg-gray" style={{ padding: '3rem 0' }} >
                    <div className="container">
                        <h3 style={{ marginBottom: '37px' }} className="text-center"><Link to="#">How The App Works</Link></h3>
                        <div className="row gap-y">

                            <div className="col-lg-4">
                                <div className="card card-body border text-center">
                                    <p className="my-5"><i className="icon-layers lead-8 text-lighter"></i></p>
                                    <h5>Wet Sign Procedure.</h5>
                                    <p><Link className="small-3 fw-600" to="/read_more">Read more <i className="fa fa-angle-right small-5 pl-1"></i></Link></p>
                                </div>
                            </div>


                            <div className="col-lg-4">
                                <div className="card card-body border text-center">
                                    <p className="my-5"><i className="icon-chat lead-8 text-lighter"></i></p>
                                    <h5>Transfer Money From Zeta</h5>
                                    <p><Link className="small-3 fw-600" to="#">Read more <i className="fa fa-angle-right small-5 pl-1"></i></Link></p>
                                </div>
                            </div>


                            <div className="col-lg-4">
                                <div className="card card-body border text-center">
                                    <p className="my-5"><i className="icon-mic lead-8 text-lighter"></i></p>
                                    <h5>How To Make Payments?</h5>
                                    <p><Link className="small-3 fw-600" to="#">Read more <i className="fa fa-angle-right small-5 pl-1"></i></Link></p>
                                </div>
                            </div>

                        </div>

                        <p className="text-center mt-7">
                            <Link className="btn btn-danger btn-round" to="/how_it_works">Read more</Link>
                        </p>

                    </div>
                </section>

                <section className="section overflow-hidden">
                    <div className="container-fluid">
                        <div className="row gap-y align-items-center">

                            <div className="col-md-4 mx-auto text-center">
                                <img className="aos-init aos-animate" src="../assets/img/credit.png" alt="..." data-aos="fade-left" />
                            </div>


                            <div className="col-md-4 mx-auto order-md-first">
                                <h3>Credit Score</h3>
                                <p>Keep your company’s data where it belongs with extensive security and administration features.</p>
                                <Link to="/read_more">Read More <i className="ti-angle-right fs-10 ml-1"></i></Link>
                            </div>

                        </div>
                    </div>
                </section>


                <section className="section" style={{ paddingTop: '0' }}>
                    <div className="container">
                        <header className="section-header">
                            <h2>Partners</h2>
                            <hr />
                            <p className="lead">Join thousands of satisfied customers using our template globally.</p>
                        </header>

                        <div className="row gap-y partner">
                            <div className="col-6 col-md-3">
                                <img src="../assets/img/partner/1.png" alt="partner 1" />
                            </div>

                            <div className="col-6 col-md-3">
                                <img src="../assets/img/partner/2.png" alt="partner 2" />
                            </div>

                            <div className="col-6 col-md-3">
                                <img src="../assets/img/partner/3.png" alt="partner 3" />
                            </div>

                            <div className="col-6 col-md-3">
                                <img src="../assets/img/partner/4.png" alt="partner 4" />
                            </div>
                        </div>

                    </div>
                </section>
            </main>
        </div>
    </Layout>

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        author
        description
        socialProfiles {
          type
          url
        }
      }
    }
  }
`;
