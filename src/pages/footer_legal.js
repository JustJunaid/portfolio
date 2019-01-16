import React from 'react'
import Layout from '../layouts/index'
import Link from 'gatsby-link'

const footer_legal = () => {
    return (
        <Layout>
            <header className="header text-white bg-dark pt-9 pb-5" style={{ backgroundImage: 'linear-gradient(-20deg, #2b5876 0%, #4e4376 100%)' }}>
                <div className="container">
                    <h3>Frequently Asked Questions</h3>
                </div>
            </header>

            <main className="main-content">

                <nav className="bb-1 bg-gray" aria-label="breadcrumb">
                    <div className="container">
                        <ol className="breadcrumb px-0">
                            <li className="breadcrumb-item"><Link to="index.html">Support</Link></li>
                            <li className="breadcrumb-item">FAQ</li>
                        </ol>
                    </div>
                </nav>


                <div className="container">
                    <div className="row">

                        <div className="col-md-7 col-xl-8 mr-md-auto py-8">
                            <article>
                                <h3 id="general">General Questions</h3>
                                <br />
                                <h6 id="update-to-2" data-provide="anchor">How can I update from version 1.x to 2.x?<Link className="anchor" to="#update-to-2"></Link></h6>
                                <p>This is the second major release of TheSaaS which is based on the stable release of Bootstrap 4. The previous version (v1.x) is based on the Bootstrap 4 alpha-6. As the version number implies, this release contains Link lot of breaking changes due to breaking changes from Bootstrap 4. So there's not any guide on how to upgrade from TheSaaS v1.x to TheSaaS v2.x. Since the v1.x is already stable enough, you don't have to upgrade your project at all—unless you have enough time to recreate it using the current release of TheSaaS. But if you're starting new project, TheSaaS v2.x is the right choice.</p>

                                <hr className="hr-dash" />

                                <h6 id="update-policy" data-provide="anchor">What is update policy?<Link className="anchor" to="#update-policy"></Link></h6>
                                <p>When you purchase Link license of TheSaaS, you will receive Link lifetime update. It means when we release Link new version, you freely receive the new version.</p>

                                <hr className="hr-dash" />

                                <h6 id="supported-browsers" data-provide="anchor">Which browsers are supported?<Link className="anchor" to="#supported-browsers"></Link></h6>
                                <p>Latest version of modern browsers and Internet Explorer 11. Modern browsers are Google Chrome, Mozilla Firefox, Safari, and Microsoft Edge.</p>


                                <hr className="my-8" />

                                <h3 id="licensing">Licensing Questions</h3>
                                <br />
                                <h6 id="regular-license" data-provide="anchor">What is reqular license?<Link className="anchor" to="#regular-license"></Link></h6>
                                <p>Regular license can be used for end products that do not charge users for access or service (access is free and there will be no monthly subscription fee).</p>
                                <p>Single regular license can be used for single end product and end product can be used by you or your client. If you want to sell end product to multiple clients then you will need to purchase separate license for each client. The same rule applies if you want to use the same end product on multiple domains (unique setup).</p>
                                <p>Read more about <Link to="https://themeforest.net/licenses/terms/regular" target="_blank">regular licenses</Link>.</p>

                                <hr className="hr-dash" />

                                <h6 id="extended-license" data-provide="anchor">What is extended license?<Link className="anchor" to="#extended-license"></Link></h6>
                                <p>Extended license can be used for end products (web service or SAAS) that charges users for access or service (e.g: monthly subscription fee). </p>
                                <p>Single extended license can be used for single end product and end product can be used by you or your client. If you want to sell end product to multiple clients then you will need to purchase separate extended license for each client. The same rule applies if you want to use the same end product on multiple domains (unique setup). </p>
                                <p>Read more about <Link to="https://themeforest.net/licenses/terms/extended" target="_blank">regular licenses</Link>.</p>

                                <hr className="hr-dash" />

                                <h6 id="compare-licenses" data-provide="anchor">Is there any comparison of licenses?<Link className="anchor" to="#compare-licenses"></Link></h6>
                                <p>Yes, of course: <Link to="https://themeforest.net/licenses/standard" target="_blank">comparison of regular and extended licenses</Link></p>

                            </article>
                        </div>


                        <div className="col-md-4 col-xl-3 d-none d-md-block">
                            <aside className="sidebar sidebar-sticky" style={{width: '255px'}}>
                                <h6 className="sidebar-title">Questions</h6>
                                <nav id="nav-scrollspy" className="nav flex-column">
                                    <Link className="nav-link" to="#general">General</Link>
                                    <Link className="nav-link" to="#licensing">Licensing</Link>
                                </nav>
                            </aside>
                        </div>

                    </div>
                </div>


            </main>
        </Layout>
    )
}

export default footer_legal
