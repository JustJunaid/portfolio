import React from 'react'
import Layout from '../layouts/index'
import Link from 'gatsby-link'

const footer_faq = () => {
  return (
    <Layout>
    <div class="section">
            <div class="container">
                    <header class="section-header">
                        <small>FAQ</small>
                        <h2>Frequently Asked Questions</h2>
                        <hr/>
                        <p>Got Link question? We've got answers. If you have some other questions, see our support center.</p>
                    </header>
            
            
                    <div class="row">
                        <div class="col-md-8 mx-auto">
            
                        <div class="accordion accordion-connected accordion-arrow-right" id="accordion-1">
                            <div class="card">
                            <h5 class="card-title">
                                <Link data-toggle="collapse" to="#collapse-1-1" aria-expanded="false" class="collapsed">Is this Link secure site for purchases?</Link>
                            </h5>
            
                            <div id="collapse-1-1" class="collapse" data-parent="#accordion-1">
                                <div class="card-body">
                                Absolutely! We work with top payment companies which guarantees your safety and security. All billing information is stored on our payment processing partner which has the most stringent level of certification available in the payments industry.
                                </div>
                            </div>
                            </div>
            
            
                            <div class="card">
                            <h5 class="card-title">
                                <Link class="collapsed" data-toggle="collapse" to="#collapse-1-2" aria-expanded="false">How long are your contracts?</Link>
                            </h5>
            
                            <div id="collapse-1-2" class="collapse" data-parent="#accordion-1">
                                <div class="card-body">
                                Currently, we only offer monthly subscription. You can upgrade or cancel your monthly account at any time with no further obligation.
                                </div>
                            </div>
                            </div>
            
            
                            <div class="card">
                            <h5 class="card-title">
                                <Link class="collapsed" data-toggle="collapse" to="#collapse-1-3">Can I cancel my subscription?</Link>
                            </h5>
            
                            <div id="collapse-1-3" class="collapse" data-parent="#accordion-1">
                                <div class="card-body">
                                You can cancel your subscription anytime in your account. Once the subscription is cancelled, you will not be charged next month. You will continue to have access to your account until your current subscription expires.
                                </div>
                            </div>
                            </div>
            
            
                            <div class="card">
                            <h5 class="card-title">
                                <Link class="collapsed" data-toggle="collapse" to="#collapse-1-4">Can I request refund?</Link>
                            </h5>
            
                            <div id="collapse-1-4" class="collapse" data-parent="#accordion-1">
                                <div class="card-body">
                                Unfortunately, not. We do not issue full or partial refunds for any reason.
                                </div>
                            </div>
                            </div>
                
                        </div>
            
                        </div>
                        </div>
        
                        </div>
    </div>
    </Layout>
  )
}

export default footer_faq
