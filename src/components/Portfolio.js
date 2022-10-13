import React from "react";
import oakhomesng from "../images/sdgimage.png";
import Card from "./Card";
import help from "../images/help.png";
// import furrow from "../images/furrow.png";
import Wibe from "../images/wibe.png";

import { Helmet } from "react-helmet";

// import Crowdcoins from "../images/crowdcoins.png";
import VideoChat from "../images/video-chat.png";

import Waveroom from "../images/waveroom.png";
// import nikaShop from "../images/nika-shop.png";
import pantry from "../images/pantry.jpeg";

import move from "../images/move.jpg";
import Footer from "./Footer";

const Portfolio = () => {
  return (
    <div>
      <Helmet>
        <title>Portfolio | Akinsiku Oluwafemi David</title>
      </Helmet>
      <div className="bg-root pt-4">
        <div className="container px-3 py-4 pb-lg-5 py-lg-5">
          <h3 className="text-white pb-4 font-weight-thin head--spacing">
            Portfolio
          </h3>

          <div className="row ">
            <div className="col-12  col-lg-6  ">
              <Card
                image={Wibe}
                header="Wibe Collections"
                description="React latest hooks, Framer Motion, Gsap, Styled Components"
                about={`This a website that houses, amazing clothing collections, I used gsap scroll trigger, framer motion, styled components, react latest hooks, and a lot of other technologies to build this website.`}
                link="https://wibe-collection.netlify.app/"
              />
            </div>
            <div className="col-12  col-lg-6  ">
              <Card
                image={Waveroom}
                header="Waveroom"
                description="React js, Spotify Api, Firebase Cloud functions to handle large traffic"
                about="Waveroom is an album editor app used to create song albums when you search for an artist, the waveform of each track also shows on the album cover, waveroom allows you style the album to your preferences, you can buy the album after styling, it has robust shopping cart features, it also uses firebase cloud functions to handle large traffic."
                link="https://custom.thewavroom.com/"
              />
            </div>
            <div className="col-12  col-lg-6  ">
              {/* <Card
								image={biking}
								header="Boulder Bike Tour"
								description="React and Rails Application"
								about="This is a fullstack application that lets users know when a prestegious cycling event will take place in colorado, I used rails on the backend and react on the front end, this app allows users see the exact location of riders on google map in real time."
								link="https://boulder-bike-race.netlify.app/"
							/> */}
              {/* <Card
                image={Crowdcoins}
                header="Crowdcoins"
                description="Next js and Solidity Application with Metamask wallet, truffle, ganache, web3, mocha and more.."
                about="CrowdCoins is an app that dummies kick-starter, it allows users to create a campaign and raise funds for the campaign, it also allows users to donate to the campaign and get rewarded for their contribution. I wrote Smart contract using solidity and deployed the contract on the ethereum blockchain. I used next js to build the frontend."
                link="https://kickstarter-clone.vercel.app/"
              /> */}
              <Card
                image={pantry}
                header="Pantry App"
                description="React js, Redux, Jest, Unsplash Api, Edamam API."
                about="Pantry App is a project I built alongside with my PM and Product Designer in Canada, its focused on helping users reduce food waste. It allows users keep stock of what they have left in their pantry, it also shows users recipees catered to their pantry, so they can have ideas on what to make with their pantry items so it doesn't get wasted."
                link="https://pantr.netlify.app/"
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
            <div className="col-12  col-lg-6 ">
              <Card
                image={oakhomesng}
                header="BuildForSDG Projects"
                description="React, useContext, dark and light theme"
                about="The #BuildforSDG Challenge is a Facebook and Andela partnership initiative to up-skill developers across Sub-Saharan (Kenya, Uganda, Cameroon, Ghana, Nigeria and South-Africa) through a six-week immersive program where selected developers worked in agile remote teams to innovate on projects relating to the SDGs."
                link="https://sdgbuild.netlify.app/"
              />
            </div>
            <div className="col-12  col-lg-6  ">
              {/* <Card
                image={pantry}
                header="Pantry App"
                description="React js, Redux, Jest, Unsplash Api, Edamam API."
                about="Pantry App is a project I built alongside with my PM and Product Designer in Canada, its focused on helping users reduce food waste. It allows users keep stock of what they have left in their pantry, it also shows users recipees catered to their pantry, so they can have ideas on what to make with their pantry items so it doesn't get wasted."
                link="https://www.mypantryapp.me/"
              /> */}
              <Card
                image={VideoChat}
                header="Skype Clone"
                description="A clone of the popular Skype application, I used React, Socket.io, Simple Peer, WEB-RTC API, and a lot of other technologies to build this application."
                about="This is an App that allows you place a call to your friends using web rtc technology and web sockets, when you send the link of the app to your friends, put in your name, copy your call-id, then send it to your friends, after your friend picks the call, you will see their video appear, your friend can also choose to decline and leave the call."
                link="https://chat-call.netlify.app/"
              />
            </div>

            <div className="col-12  col-lg-6  ">
              {/* <Card
                image={oakhomesng}
                header="BuildForSDG Projects"
                description="React, useContext, dark and light theme"
                about="The #BuildforSDG Challenge is a Facebook and Andela partnership initiative to up-skill developers across Sub-Saharan (Kenya, Uganda, Cameroon, Ghana, Nigeria and South-Africa) through a six-week immersive program where selected developers worked in agile remote teams to innovate on projects relating to the SDGs."
                link="https://sdgbuild.netlify.app/"
              /> */}
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
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Portfolio;
