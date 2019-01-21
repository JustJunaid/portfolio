import React from 'react'
import Layout from '../layouts/index'
import Link from 'gatsby-link'

/* eslint-disable */

const footer_blog = () => {
  return (
    <Layout>
    <header className="header text-center text-white" style={{backgroundImage: 'linear-gradient(-225deg, #5D9FFF 0%, #B8DCFF 48%, #6BBBFF 100%'}}>
        <div className="container">
  
          <div className="row">
            <div className="col-md-8 mx-auto">
  
              <h1>Latest Blog Posts</h1>
              <p className="lead-2 opacity-90 mt-6">Read and get updated on how we progress</p>
  
            </div>
          </div>
  
        </div>
      </header>
      <main className="main-content">

        <section className="section bg-gray">
          <div className="container">
  
            <div className="row gap-y">
  
              <div className="col-md-6 col-lg-4">
                <div className="card d-block border hover-shadow-6 mb-6">
                  <Link to="/blog1"><img className="card-img-top" src="../assets/img/how_it_works/1.jpg"/></Link>
                  <div className="p-6 text-center">
                    <p><Link className="small-5 text-lighter text-uppercase ls-2 fw-400" to="#">News</Link></p>
                    <h5 className="mb-0"><Link className="text-dark" to="#">We relocated our office to Link new designed garage</Link></h5>
                  </div>
                </div>
              </div>
  
  
              <div className="col-md-6 col-lg-4">
                <div className="card d-block border hover-shadow-6 mb-6">
                  <Link to="#"><img className="card-img-top" src="../assets/img/how_it_works/1.jpg"/></Link>
                  <div className="p-6 text-center">
                    <p><Link className="small-5 text-lighter text-uppercase ls-2 fw-400" to="#">Marketing</Link></p>
                    <h5 className="mb-0"><Link className="text-dark" to="#">Top 5 brilliant content marketing strategies</Link></h5>
                  </div>
                </div>
              </div>
  
  
              <div className="col-md-6 col-lg-4">
                <div className="card d-block border hover-shadow-6 mb-6">
                  <Link to="#"><img className="card-img-top" src="../assets/img/how_it_works/1.jpg"/></Link>
                  <div className="p-6 text-center">
                    <p><Link className="small-5 text-lighter text-uppercase ls-2 fw-400" to="#">Design</Link></p>
                    <h5 className="mb-0"><Link className="text-dark" to="#">Best practices for minimalist design with example</Link></h5>
                  </div>
                </div>
              </div>
  
  
              <div className="col-md-6 col-lg-4">
                <div className="card d-block border hover-shadow-6 mb-6">
                  <Link to="#"><img className="card-img-top" src="../assets/img/how_it_works/1.jpg"/></Link>
                  <div className="p-6 text-center">
                    <p><Link className="small-5 text-lighter text-uppercase ls-2 fw-400" to="#">Hiring</Link></p>
                    <h5 className="mb-0"><Link className="text-dark" to="#">Congratulate and thank to Maryam for joining our team</Link></h5>
                  </div>
                </div>
              </div>
  
  
              <div className="col-md-6 col-lg-4">
                <div className="card d-block border hover-shadow-6 mb-6">
                  <Link to="#"><img className="card-img-top" src="../assets/img/how_it_works/1.jpg"/></Link>
                  <div className="p-6 text-center">
                    <p><Link className="small-5 text-lighter text-uppercase ls-2 fw-400" to="#">Product</Link></p>
                    <h5 className="mb-0"><Link className="text-dark" to="#">New published books to read by Link product designer</Link></h5>
                  </div>
                </div>
              </div>
  
  
              <div className="col-md-6 col-lg-4">
                <div className="card d-block border hover-shadow-6 mb-6">
                  <Link to="#"><img className="card-img-top" src="../assets/img/how_it_works/1.jpg"/></Link>
                  <div className="p-6 text-center">
                    <p><Link className="small-5 text-lighter text-uppercase ls-2 fw-400" to="#">Management</Link></p>
                    <h5 className="mb-0"><Link className="text-dark" to="#">This is why it's time to ditch dress codes at work</Link></h5>
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

export default footer_blog
