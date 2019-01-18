import React from 'react'
import Layout from '../layouts/index'

const shop_online = () => {
    return (
        <Layout>
            <main className="main-content">

                <section className="section">
                    <div className="container">
                        <header className="section-header">
                            <h2>How Does It Work?</h2>
                            <hr />
                            <p className="lead">Explore the best SaaS template in the market in a short 1-minute video.</p>
                        </header>


                        <div className="row align-items-center">

                            <div className="col-lg-12">
                                <ol className="step">
                                    <li className="step-item">
                                        <div className="step-icon">
                                            <span className="iconbox">1</span>
                                        </div>

                                        <div className="step-content">
                                            <h6><strong>Write your requirements</strong></h6>
                                            <p>Think the or organization same proposal to affected heard reclined in be it reassuring.</p>
                                        </div>
                                    </li>

                                    <li className="step-item">
                                        <div className="step-icon">
                                            <span className="iconbox">2</span>
                                        </div>

                                        <div className="step-content">
                                            <h6><strong>Sign the contract</strong></h6>
                                            <p>Think the or organization same proposal to affected heard reclined in be it reassuring.</p>
                                        </div>
                                    </li>

                                    <li className="step-item">
                                        <div className="step-icon">
                                            <span className="iconbox">3</span>
                                        </div>

                                        <div className="step-content">
                                            <h6><strong>We start developing</strong></h6>
                                            <p>Think the or organization same proposal to affected heard reclined in be it reassuring.</p>
                                        </div>
                                    </li>
                                </ol>
                            </div>

                        </div>
                    </div>
                </section>

                <section className="section">
                    <div className="container">
                        <header className="section-header">
                            <small>FAQ</small>
                            <h2>Frequently Asked Questions</h2>
                            <hr />
                            <p>Got a question? We've got answers. If you have some other questions, see our support center.</p>
                        </header>


                        <div className="row">
                            <div className="col-md-8 mx-auto">

                                <div className="accordion accordion-connected accordion-arrow-right" id="accordion-1">
                                    <div className="card">
                                        <h5 className="card-title">
                                            <a data-toggle="collapse" href="#collapse-1-1">Is this a secure site for purchases?</a>
                                        </h5>

                                        <div id="collapse-1-1" className="collapse" data-parent="#accordion-1">
                                            <div className="card-body">
                                                Absolutely! We work with top payment companies which guarantees your safety and security. All billing information is stored on our payment processing partner which has the most stringent level of certification available in the payments industry.
                  </div>
                                        </div>
                                    </div>


                                    <div className="card">
                                        <h5 className="card-title">
                                            <a className="collapsed" data-toggle="collapse" href="#collapse-1-2">How long are your contracts?</a>
                                        </h5>

                                        <div id="collapse-1-2" className="collapse" data-parent="#accordion-1">
                                            <div className="card-body">
                                                Currently, we only offer monthly subscription. You can upgrade or cancel your monthly account at any time with no further obligation.
                  </div>
                                        </div>
                                    </div>


                                    <div className="card">
                                        <h5 className="card-title">
                                            <a className="collapsed" data-toggle="collapse" href="#collapse-1-3">Can I cancel my subscription?</a>
                                        </h5>

                                        <div id="collapse-1-3" className="collapse" data-parent="#accordion-1">
                                            <div className="card-body">
                                                You can cancel your subscription anytime in your account. Once the subscription is cancelled, you will not be charged next month. You will continue to have access to your account until your current subscription expires.
                  </div>
                                        </div>
                                    </div>


                                    <div className="card">
                                        <h5 className="card-title">
                                            <a className="collapsed" data-toggle="collapse" href="#collapse-1-4">Can I request refund?</a>
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
                </section>

            </main>
        </Layout>
    )
}

export default shop_online
