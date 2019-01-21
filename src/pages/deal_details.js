import React from 'react'
import img_get_deals from '../../static/assets/img/get_deals/1.jpg'
import Layout from '../layouts/index'

/* eslint-disable */

export default () => {
    return (
        <Layout>
            <main>
                <section className="section">
                    <div className="container">

                        <div className="row align-items-center">
                            <div className="col-md-6 ml-auto">
                                <h4>Make your customer service stand out</h4>
                                <p>Reduce friction with software that’s designed to increase speed and efficiency—and turn your team of agents into experts.</p>
                            </div>
                            <div className="col-md-6 ml-auto">
                                <h4>Make your customer service stand out</h4>
                                <p>Achieves post from the here the on of the that deeply, had we size you've were any to an among that the clean usual. Finds thought, up you its didn't to much helped text box would his support it the a understood. Cooperator were her overgrown with to of his necessary long and made</p>
                            </div>

                            <div className="col-md-6 text-center order-md-first">
                                <img src={img_get_deals} />
                            </div>
                        </div>

                    </div>
                </section>
            </main>
        </Layout>
    )
}
