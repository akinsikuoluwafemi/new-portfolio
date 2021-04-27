import React from 'react';
import oakhomesng from '../images/sdgimage.png';
import Card from './Card';
import biking from '../images/biking.jpg';
import help from "../images/help.png";
import furrow from '../images/furrow.png';
import { Link} from 'react-router-dom';

import mtn from "../images/mtnpic.jpeg";

// import resume from '../images/newresume.png';
import udacitynew from '../images/udacitynew.png';
import cart from "../images/shopping-cart.jpg";

import move from '../images/move.jpg';
import Footer from './Footer';

const Furrow = 




const Portfolio = () =>{
    return (
		<div>
			<div className="bg-root pt-4">
				<div className="container px-3 py-4 pb-lg-5 py-lg-5">
					<h3 className="text-white pb-4 font-weight-thin head--spacing">Portfolio</h3>

					<div className="row ">
						<div className="col-12  col-lg-6  ">
							{/* <Card
                  image={help}
                  header="Peeps"
                  description="React, Rails, web sockets(actioncable), activestorage, heroku"
                  about="This is a fullstack application that allows peepsons with needs make requisition, other peepsons can also volunteer to meet their need after the request has been created. On volunteering you create a message flow between you and the peepson which allows you to send them a direct message in real time."
                  link="https://peeps-frontend.vercel.app"
                /> */}
							<Card
								image={furrow}
								header="Furrow.Studio"
								description="Gatsby js, React 16 hooks, Canvas, Framer Motion, Gsap, Styled Components"
								about="This is a clone of the furrow.studio website, made with gatsby js, I used custom cursors, canvas api framer motion for animations and lots of new react 16 features like useReducer etc."
								link="https://peeps-frontend.vercel.app"
								furrowwebpage="https://furrow.studio/"
							/>
						</div>

						<div className="col-12  col-lg-6">
							<Card
								image={cart}
								header="Shopies"
								description="A shopping Cart app"
								about="This is a frontend shopping cart app built with React and Redux, I implemented paypal payment checkout as well. I used ES6-ES10 javascript features, you can add to cart, increase and decrease an Item in the cart, You can view a single Item and also add it to the cart on the fly."
								link="https://shoping-store.netlify.app/"
							/>
						</div>

						<div className="col-12  col-lg-6  ">
							<Card
								image={biking}
								header="Boulder Bike Tour"
								description="React and Rails Application"
								about="This is a fullstack application that lets users know when a prestegious cycling event will take place in colorado, I used rails on the backend and react on the front end, this app allows users see the exact location of riders on google map in real time."
								link="https://boulder-bike-race.netlify.app/"
							/>
						</div>

						<div className="col-12  col-lg-6  ">
							<Card
								image={oakhomesng}
								header="BuildForSDG Projects"
								description="React Project"
								about="This is a Website I built in React, it hosted the BuildForSDG Cohort One project."
								link="https://sdgbuild.netlify.app/"
							/>
						</div>

						<div className="col-12  col-lg-6 ">
							<Card
								image={move}
								header="Move and Groove"
								description="Ruby On Rails Application"
								about="Move and Groove is an activity tracker tool that allows users sign up and create activities as well as track their activities."
								link="https://fitandtracker.herokuapp.com/"
							/>
						</div>

						{/* <div className="col-12  col-lg-6">
                <Card
                  image={resume}
                  header="My Resume"
                  description="Web mockup"
                  about="This is a styled mockup of my resume, I decided to code up my resume."
                  link="https://femiakinsikusresume.netlify.com/"
                />
              </div> */}
						<div className="col-12  col-lg-6   ">
							<Card
								image={udacitynew}
								header="Udacity Landing Page"
								description="Web Mockup"
								about="A landing page of Udacity I cloned from the scratch."
								link="https://akinsikuoluwafemi.github.io/udacity-landing-page/"
							/>
						</div>

						<div className="col-12  col-lg-6  ">
							<Card
								image={mtn}
								header="Mtn Clone"
								description="React and unsplash API"
								about="This is a front end application, cloning the MTN supplier page, I also made use of unsplash API to get the search field up and running"
								link="https://mtnclone.netlify.app"
							/>
						</div>
					</div>
				</div>
			</div>
			<div>
				<Footer />
			</div>
		</div>
	);
}

export default Portfolio;