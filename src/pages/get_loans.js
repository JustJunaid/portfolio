import React from 'react'
import Layout from '../layouts/index'
import Link from 'gatsby-link'
import rubyImg1 from '../../static/assets/img/ruby/1.png'
import rubyImg2 from '../../static/assets/img/ruby/2.png'
import rubyImg3 from '../../static/assets/img/ruby/3.png'
import rubyImg4 from '../../static/assets/img/ruby/4.png'

const get_loans = () => {
    return (
        <Layout>
            <main className="main-content">
                <section id="section-demo" className="section overflow-hidden bg-white">
                    <div className="container">
                        <header className="section-header">
                            <small>Demo</small>
                            <h2>Sample Landing Pages</h2>
                            <hr />
                            <p className="lead">Apart from internal pages, we have designed several single sample pages to get start with.</p>
                        </header>

                        <section className="section">
                            <div className="container">

                                <div className="row gap-y align-items-center py-7">
                                    <div className="col-md-6 text-center">
                                        <img src={rubyImg1} alt="..." />
                                    </div>

                                    <div className="col-md-5 ml-auto text-center text-md-left">
                                        <p className="lead-9 fw-900 lh-1 opacity-10">01</p>
                                        <h3>Write your requirements</h3>
                                        <p>Think the or organization same proposal to affected heard reclined in be it reassuring are attained opinion, by he neighbours even again. Is and by value and that like can could from world takes of great copy and delicacy compared he such that the in and with himself Link the man.</p>
                                    </div>
                                </div>


                                <div className="row gap-y align-items-center py-7">
                                    <div className="col-md-5 mr-auto text-center text-md-left">
                                        <p className="lead-9 fw-900 lh-1 opacity-10">02</p>
                                        <h3>Sign the contract</h3>
                                        <p>Think the or organization same proposal to affected heard reclined in be it reassuring are attained opinion, by he neighbours even again. Is and by value and that like can could from world takes of great copy and delicacy compared he such that the in and with himself Link the man.</p>
                                    </div>

                                    <div className="col-md-6 text-center order-first order-md-last">
                                        <img src={rubyImg2} alt="..." />
                                    </div>
                                </div>


                                <div className="row gap-y align-items-center py-7">
                                    <div className="col-md-6 text-center">
                                        <img src={rubyImg3} alt="..." />
                                    </div>

                                    <div className="col-md-5 ml-auto text-center text-md-left">
                                        <p className="lead-9 fw-900 lh-1 opacity-10">03</p>
                                        <h3>We start developing</h3>
                                        <p>Think the or organization same proposal to affected heard reclined in be it reassuring are attained opinion, by he neighbours even again. Is and by value and that like can could from world takes of great copy and delicacy compared he such that the in and with himself Link the man.</p>
                                    </div>
                                </div>


                                <div className="row gap-y align-items-center py-7">
                                    <div className="col-md-5 text-center text-md-left">
                                        <p className="lead-9 fw-900 lh-1 opacity-10">04</p>
                                        <h3>Customer support begins</h3>
                                        <p>Think the or organization same proposal to affected heard reclined in be it reassuring are attained opinion, by he neighbours even again. Is and by value and that like can could from world takes of great copy and delicacy compared he such that the in and with himself Link the man.</p>
                                    </div>

                                    <div className="col-md-6 ml-auto text-center order-first order-md-last">
                                        <img src={rubyImg4} alt="..." />
                                    </div>
                                </div>


                            </div>
                        </section>


                        <div className="container">
                            <header className="section-header">
                                <small>FAQ</small>
                                <h2>Frequently Asked Questions</h2>
                                <hr />
                                <p>Got Link question? We've got answers. If you have some other questions, see our support center.</p>
                            </header>


                            <div className="row">
                                <div className="col-md-8 mx-auto">

                                    <div className="accordion accordion-connected accordion-arrow-right" id="accordion-1">
                                        <div className="card">
                                            <h5 className="card-title">
                                                <Link data-toggle="collapse" to="#collapse-1-1" aria-expanded="false" className="collapsed">Is this Link secure site for purchases?</Link>
                                            </h5>

                                            <div id="collapse-1-1" className="collapse" data-parent="#accordion-1">
                                                <div className="card-body">
                                                    Absolutely! We work with top payment companies which guarantees your safety and security. All billing information is stored on our payment processing partner which has the most stringent level of certification available in the payments industry.
                        </div>
                                            </div>
                                        </div>


                                        <div className="card">
                                            <h5 className="card-title">
                                                <Link className="collapsed" data-toggle="collapse" to="#collapse-1-2" aria-expanded="false">How long are your contracts?</Link>
                                            </h5>

                                            <div id="collapse-1-2" className="collapse" data-parent="#accordion-1">
                                                <div className="card-body">
                                                    Currently, we only offer monthly subscription. You can upgrade or cancel your monthly account at any time with no further obligation.
                        </div>
                                            </div>
                                        </div>


                                        <div className="card">
                                            <h5 className="card-title">
                                                <Link className="collapsed" data-toggle="collapse" to="#collapse-1-3">Can I cancel my subscription?</Link>
                                            </h5>

                                            <div id="collapse-1-3" className="collapse" data-parent="#accordion-1">
                                                <div className="card-body">
                                                    You can cancel your subscription anytime in your account. Once the subscription is cancelled, you will not be charged next month. You will continue to have access to your account until your current subscription expires.
                        </div>
                                            </div>
                                        </div>


                                        <div className="card">
                                            <h5 className="card-title">
                                                <Link className="collapsed" data-toggle="collapse" to="#collapse-1-4">Can I request refund?</Link>
                                            </h5>

                                            <div id="collapse-1-4" className="collapse" data-parent="#accordion-1">
                                                <div className="card-body">
                                                    Unfortunately, not. We do not issue full or partial refunds for any reason.
                        </div>
                                            </div>
                                        </div>

                                    </div>

                                </div>
                            </div>

                        </div>

                        <section id="variations" className="section">
                            <div className="container">
                                <header className="section-header">
                                    <h2 style={{ marginBottom: '30px' }}>Was This Page Helpful?</h2>
                                    <button className="btn btn-primary" type="button" data-toggle="offcanvas" data-target="#offcanvas-left">Left menu</button>
                                    <button className="btn btn-primary" type="button" data-toggle="offcanvas" data-target="#offcanvas-right">Right menu</button>

                                </header>

                                <div className="row text-center">
                                    <div className="col-md-8 mx-auto">
                                        <p>With Link little help from utility classes, you can create useful offcanvases for different purposes.</p>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </section>
            </main>
        </Layout>
    )
}

export default get_loans
