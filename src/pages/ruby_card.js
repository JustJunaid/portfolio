import React from 'react'
import Link from 'gatsby-link'
import Layout from '../layouts/index'

export default function ruby_card() {
    return (
        <Layout>
            <div>
                <main className="main-content pt-8">
                    <section className="section text-center bg-gray">
                        <div className="container">

                            <div className="row">
                                <div className="col-md-6 mx-auto">
                                    <p><img src="../assets/img/ruby/github.png" alt="..." /></p>
                                    <br />
                                    <h3 className="mb-6"><strong>Fork the project on GitHub</strong></h3>
                                    <p className="lead text-muted">Bootstrap is open source! It's hosted, developed, and maintained on GitHub by folks like you.</p>
                                    <br />
                                    <Link className="btn btn-lg btn-round btn-success px-7" to="/">View GitHub Project</Link>
                                </div>
                            </div>

                        </div>
                    </section>

                    <section className="section" style={{ padding: '0' }}>
                        <div className="container">

                            <div className="row gap-y align-items-center py-7">
                                <div className="col-md-6 text-center">
                                    <img src="../assets/img/ruby/1.png" alt="..." />
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
                                    <img src="../assets/img/ruby/2.png" alt="..." />
                                </div>
                            </div>


                            <div className="row gap-y align-items-center py-7">
                                <div className="col-md-6 text-center">
                                    <img src="../assets/img/ruby/3.png" alt="..." />
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
                                    <img src="../assets/img/ruby/4.png" alt="..." />
                                </div>
                            </div>


                        </div>
                    </section>

                    <section className="section overflow-hidden">
                        <div className="container">
                            <header className="section-header">
                                <small>Video</small>
                                <h2>Watch It Grow</h2>
                                <hr />
                                <p className="lead">Explore the best SaaS template in the market in Link short 1-minute video.</p>
                            </header>


                            <div className="row">
                                <div className="col-md-8 mx-auto">

                                    <div className="bg-img rounded text-white text-center p-6 p-md-10" style={{ backgroundImage: 'url(../assets/img/ruby/video.jpg)' }}>
                                        <h4>We made it so easy to create Link SaaS website with few copy and pastes.</h4>
                                        <br />
                                        <Link className="btn btn-circle btn-xl btn-primary" to="https://www.youtube.com/watch?v=ah4pcPbRi2M" data-provide="lightbox"><i className="fa fa-play"></i></Link>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </Layout>
    )
}
