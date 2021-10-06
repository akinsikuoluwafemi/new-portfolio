import React from 'react';
import oakhomesng from '../images/sdgimage.png';
import Card from './Card';
import biking from '../images/biking.jpg';
import help from "../images/help.png";
import furrow from '../images/furrow.png';
import { Helmet } from 'react-helmet';


import mtn from "../images/mtnpic.jpeg";

// import resume from '../images/newresume.png';
// import udacitynew from '../images/udacitynew.png';
import cart from "../images/shopping-cart.jpg";
import pantry from '../images/pantry.jpeg';
import nikaShop from "../images/nika-shop.png";



import move from '../images/move.jpg';
import Footer from './Footer';





const Portfolio = () =>{
    return (
		<div>
			<Helmet>
				<title>Portfolio | Akinsiku Oluwafemi</title>
			</Helmet>
			<div className="bg-root pt-4">
				<div className="container px-3 py-4 pb-lg-5 py-lg-5">
					<h3 className="text-white pb-4 font-weight-thin head--spacing">Portfolio</h3>

					<div className="row ">
						<div className="col-12  col-lg-6 ">
							<Card
								image={pantry}
								header="Pantry App"
								description="React js (PWA), Redux, Jest, Unsplash Api, Edamam API.(catered for mobile devices)"
								about="Pantry App is a project I built with my PM and Product Designer in Canada, its focused on helping users reduce food waste. It allows users keep stock of what they have left in their pantry, it also shows users recipees catered to their pantry, so they can have ideas on what to make with their pantry items so it doesn't get wasted."
								link="https://www.mypantryapp.me/"
								/>
								
						</div>
						<div className="col-12  col-lg-6  ">
							{/* <Card
								image={pantry}
								header="Pantry App"
								description="React js, Redux, Jest, Unsplash Api, Edamam API."
								about="Pantry App is a project I built with my PM and Product Designer in Canada, its focused on helping users reduce food waste. It allows users keep stock of what they have left in their pantry, it also shows users recipees catered to their pantry, so they can have ideas on what to make with their pantry items so it doesn't get wasted."
								link="https://www.mypantryapp.me/"
							/> */}
							<Card
								image={furrow}
								header="Furrow.Studio"
								description="Gatsby js, React 16 hooks, Canvas, Framer Motion, Gsap, Styled Components"
								about={`This is a clone of the furrow.studio website, made with gatsby js, I used custom cursors, canvas api, framer motion for animations, intersection observers, for page scrolling and lots of react hooks new features like useReducer, useContext, useDispatch, Suspense etc, it also has a dark and white theme.`}
								link="https://furrow-studios.vercel.app/"
							/>
						</div>

						<div className="col-12 col-lg-6">
							<Card
								image={help}
								header="Peeps"
								description="React, Rails, web sockets(actioncable), activestorage, heroku"
								about="This is a fullstack application that allows peepsons with needs make requisition, other peepsons can also volunteer to meet their need after the request has been created. On volunteering you create a message flow between you and the peepson which allows you to send them a direct message in real time."
								link="https://peeps-frontend.vercel.app"
							/>
							{/* <Card
								image={cart}
								header="Shopies"
								description="A shopping Cart app"
								about="This is a frontend shopping cart app built with React and Redux, I implemented paypal payment checkout as well. I used ES6-ES10 javascript features, you can add to cart, increase and decrease an Item in the cart, You can view a single Item and also add it to the cart on the fly."
								link="https://shoping-store.netlify.app/"
							/> */}
						</div>

						<div className="col-12  col-lg-6  ">
							{/* <Card
								image={biking}
								header="Boulder Bike Tour"
								description="React and Rails Application"
								about="This is a fullstack application that lets users know when a prestegious cycling event will take place in colorado, I used rails on the backend and react on the front end, this app allows users see the exact location of riders on google map in real time."
								link="https://boulder-bike-race.netlify.app/"
							/> */}
							<Card
								image={nikaShop}
								header="Nika Clothing Store"
								description="A shopping Cart app"
								about="This is a fullstack shopping cart app built with React, Redux, firebase, Heroku, Google Auth, I implemented stripe payment checkout and also created a node server to handle credit card stripe payment on the backend. Every ossible thing you can do on an e-commerce app is possible here as well."
								link="https://shoping-store.netlify.app/"
							/>
						</div>

						<div className="col-12  col-lg-6  ">
							<Card
								image={oakhomesng}
								header="BuildForSDG Projects"
								description="React Project, useContext, dark and light theme"
								about="This is a Website I built in React for Andela, it hosted the BuildForSDG Cohort One project."
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