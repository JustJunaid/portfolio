import React from 'react'
import Layout from '../layouts'
import SEO from '../components/Seo'

export default function about() {
	return (
		<Layout>
			<SEO title="JustJunaid | About" />
			<section class="section p-0">
				<div class="container-wide">
					<div class="row no-gutters h-fullscreen">
						<div
							class="col-md-4 bg-img"
							style={{
								backgroundImage: 'url(../assets/img/junaid.jpg)',
								minHeight: '300px',
							}}
						></div>

						<div class="col-md-8 p-6 p-md-8">
							<h4>
								<b>About</b>
							</h4>
							<p class="lead">
								<b>
									Super Official Third Person Bio™: <br />
								</b>
								Hi there 👋 I am Junaid, a full-stack JavaScript developer based out of New Delhi, India. I have more than three years of professional experience working in a couple of startups in New Delhi and on the other end working with the very well-know consultancy firm McKinsey and Company, though not full-time but on a contract basis.
🔭 I’m currently working as a full-stack developer at Srijan Technologies.

I have experience in multiple technologies such as Reactjs, Nodejs, python’s flask and a little bit of Django to name a few. Also, these days I've been 🌱 exploring Next.js which is pretty dope, it’s build on top of ReactJS, makes server-side rendering a lot easier.

Honestly I have more inclination towards front-end devlelopment, I just love developing wonderful user interfaces in React and have good hold on most popular UI frameworks like React Bootstrap, Material Ui, Ant Design, BlueprintJS, Tailwind Css, etc

So, this is a bit of my technical background now let’s hop on to the projects I have worked on. My recent project was: The project(myIMO) involved building a tool for mergers and acquisitions purposes which contains a number of common features like a config dashboard, client facing application, admin panel. My Main role was to tackle problems on the front-end and designing the whole infrastructure of the application but worked on the backend too.

It was one of the favourite projects till date and I am kinda proud of it because it made me learn me so much good practices in multiple technologies in all domain front-end, back-end, devops, so it was just amazing.

⚡ Fun fact: I like to trade in stock market on a regular basis
							</p>
						</div>
					</div>
				</div>
			</section>
		</Layout>
	)
}
