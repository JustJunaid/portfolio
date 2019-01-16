import React from 'react'
import Link from 'gatsby-link'
import Layout from '../layouts/index'

const navBar = () => {
  return (
    <Layout>
      <div>
        <header className="header text-white bg-gray1 pt-10 pb-9" style={{ backgroundColor: '#b9a0c9' }}>
          <div className="container text-center">

            <div className="row">
              <div className="col-lg-8 mx-auto">

                <h1>Senior Front-end Engineer</h1>
                <p className="lead-2"><i className="fa fa-map-marker mr-2"></i> San Francisco</p>

                <hr className="w-50px" />

                <Link className="btn btn-xl btn-round btn-light" to="#section-apply">Apply Now</Link>

              </div>
            </div>

          </div>
        </header>

        <main className="main-content">
          <section className="section bg-gray">
            <div className="container">

              <div className="row">
                <div className="col-md-8 mx-auto">

                  <p className="lead">Use your extensive knowledge of JavaScript, HTML, and CSS to improve our web client, Link complex in-browser application relied upon by millions of users every day. You will work with real-time data streams, engineer for performance across browsers, and delight people by making the best software we can imagine. You will collaborate closely with Product, Design, Application Engineering, and QA to spec, build, test and deploy new features. This position reports directly to the Director of Frontend Engineering.</p>

                  <br /><br />
                  <h5>A Typical Week</h5>
                  <ul>
                    <li>You'll brainstorm with Product Managers and Designers to conceptualize new features</li>
                    <li>You'll collaborate with Application Engineering to build new features for our large-and-growing user base</li>
                    <li>You'll learn about new web technologies and discuss potential solutions to problems</li>
                    <li>You'll help our skilled support team triage bugs and troubleshoot production issues</li>
                    <li>You'll mentor other engineers and deeply review code</li>
                  </ul>


                  <br />
                  <h5>Requirements</h5>
                  <ul>
                    <li>Bachelor's degree in Computer Science, Engineering or related field, or equivalent training, fellowship, or work experience.</li>
                    <li>3+ years of experience writing client-side JavaScript</li>
                    <li>Expertise in building complex layouts with CSS and HTML</li>
                    <li>Experience building and debugging complex systems in Link team environment</li>
                    <li>Experience with modern browser technologies</li>
                    <li>Strong UX and design sensibilities, and Link desire to sweat the small stuff</li>
                    <li>Strong communication skills, Link positive attitude, and empathy</li>
                    <li>Self-­awareness and Link desire to continually improve</li>
                  </ul>


                  <br />
                  <h5>Bonus Points</h5>
                  <ul>
                    <li>Experience with jQuery, Handlebars, or LESS</li>
                    <li>Experience investigating and improving JavaScript performance</li>
                    <li>Experience with WebSockets, Local Storage, or ES6</li>
                    <li>Experience in small start­up environments</li>
                    <li>Experience designing web sites or applications</li>
                  </ul>

                </div>
              </div>


            </div>
          </section>



          <section className="section" id="section-apply">
            <div className="container">
              <header className="section-header">
                <small>Submit your resume</small>
                <h2>Apply For This Job</h2>
                <hr />
                <p className="lead">Prepare Link PDF for your resume and fill the following form. We will contact you as soon as possible.</p>
              </header>


              <div className="row">
                <div className="col-md-8 mx-auto">

                  <form action="../assets/php/sendmail.php" method="POST" data-form="mailer">

                    <input type="hidden" name="subject" value="[TheThemeio] : Resume" />
                    <div className="row">
                      <div className="form-group col-12 col-md-6">
                        <input className="form-control" type="text" name="firstname" placeholder="First Name" />
                      </div>

                      <div className="form-group col-12 col-md-6">
                        <input className="form-control" type="text" name="lastname" placeholder="Last Name" />
                      </div>
                    </div>

                    <div className="row">
                      <div className="form-group col-12 col-md-6">
                        <input className="form-control" type="text" name="email" placeholder="Email" />
                      </div>

                      <div className="form-group col-12 col-md-6">
                        <input className="form-control" type="text" name="phone" placeholder="Phone" />
                      </div>
                    </div>

                    <div className="form-group">
                      <input className="form-control" type="text" name="location" placeholder="Location" />
                    </div>

                    <div className="form-group">
                      <input className="form-control" type="text" name="linkedin_profile" placeholder="Linkedin Profile" />
                    </div>

                    <div className="form-group">
                      <input className="form-control" type="text" name="portfolio" placeholder="Portfolio URL" />
                    </div>

                    <div className="form-group">
                      <textarea className="form-control" name="extra_information" placeholder="Extra information" rows="3"></textarea>
                    </div>

                    <button className="btn btn-lg btn-block btn-primary" type="submit">Submit your resume</button>
                  </form>

                </div>
              </div>


            </div>
          </section>
        </main>
      </div>
    </Layout>
  )
}

export default navBar
