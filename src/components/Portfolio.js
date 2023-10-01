import React from "react";
import oakhomesng from "../images/sdgimage.png";
import Card from "./Card";
import Wibe from "../images/wibe.png";
import Cc2 from "../images/cc2.png";
import ST from "../images/st.png";

import { Helmet } from "react-helmet";

// import VideoChat from "../images/video-chat.png";

import Waveroom from "../images/waveroom.png";
import pantry from "../images/pantry.jpeg";

import Tinder from "../images/catdetail.png";
import Onpeeps from "../images/onpeeps2.png";
import CF from "../images/time-slot.png";

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
            <div className="col-12 col-lg-6">
              <Card
                image={ST}
                header="Support Ticket App"
                description="React-Typescript, Redux-toolkit, faker, react-testing-library, ts-node, mongodb, Docker, yup, react-hook-form, styled-component, morgan, supertest, joi, mongoose, express, Moment"
                about="This is a fullstack application, a use case for this is when in house teams want to create support ticket, and check for deadlines. I am using React-Typescript in the frontend and mongodb, mongoose in the backend, I am also containerizing both applications using docker, I also have a docker compose file to spin up the applications locally, I also implemented frontend and backend testing on the app. I have a get all route, create route, edit route to edit a status of the ticket, I am also using different colors to indicate if the deadline is passed, done, or expired.  when spinning up with docker, have ports 3000 for frontend and port 4000 for backend available locally, steps to spin up the app are also available in the read me file. I can also create a random ticket, I also added a debounce to function, so there can be a delay before the function fires, this is a check that prevents users from clicking the button multiple times.  To Spin up, clone fro github, go to the root of the app on your terminal, make sure you have docker installed on your machine, do a 'docker-compose build' when successful, do a 'docker-compose up' then open the localhost of frontend on port 3000."
                link="https://github.com/akinsikuoluwafemi/Support-Ticket"
              />
            </div>
            <div className="col-12 col-lg-6">
              <Card
                image={Cc2}
                header="Currency Exchange"
                description="Nextjs Typescript, React hook form, yup, redux-toolkit, styled components, exchange rate api, spark-line charts"
                about="This is a fin-tech app, users can convert from one currency to another, I used the exchange rate api to get the exchange rate, I also used spark-line charts to show the exchange rate trends, users can be able to toggle/swap from a base currency to a target currency, users can also see the conversion history of exchanges they have made, users can also get exchange history by duration (7days, 14days, 30 days etc) and see a graph representation of the exchanges, they can also choose to view or delete the individual conversion history. I used react hook form and yup for form validation, I also used redux toolkit for state management, also redux-persist to persist state, moment for date formatting, I used styled components for styling, I also used next-js app router, and I used vercel to deploy the app."
                link="https://conversion-9ylifey46-akinsikuoluwafemi.vercel.app/"
              />
            </div>
            <div className="col-12 col-lg-6">
              <Card
                image={Tinder}
                header="Tinder For Cats"
                description="Nextjs Typescript, React hook form, yup, Prisma, Postgres, jwt, redux-toolkit, styled components"
                about="This is a tinder for cats application, users can sign up, signin, favorites cats and also view their favorite cats, I also used vercel to deploy the frontend and use render to deploy the prisma backend. This app is fully authenticated, as i am using, jwt token to authenticate users, so unauthorized users cannot favorite cats or see other users favorite cats."
                link="https://tinder4-cats-jdtg.vercel.app/"
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
              <Card
                image={Onpeeps}
                header="OnPeeps"
                description="Nextjs Typescript, Postgresql, Prisma, jwt, react-otp-input
                , Google maps, Peerjs, redux-toolkit, styled components, Redis"
                about="Onpeeps is a means of facilitating exchanged acts of kindness, we help in connecting people in need to willing volunteers globally. Users can log in, create a request, other users can see the request on the map, (their feeds), then click on a request and choose to volunteer, when you volunteer, you are sent to a real time messaging chat, where you can send a message to the user, I am using redis and peer js, to enable real time messaging and video call functionality, I am also using google maps to show the location of the user on the map
                (Still in development)
              "
                link="https://onpeeps.com/"
              />
            </div>
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
                image={pantry}
                header="Pantry App"
                description="React js, Redux, Jest, Unsplash Api, Edamam API."
                about="Pantry App is a project I built alongside with my PM and Product Designer in Canada, its focused on helping users reduce food waste. It allows users keep stock of what they have left in their pantry, it also shows users recipees catered to their pantry, so they can have ideas on what to make with their pantry items so it doesn't get wasted."
                link="https://pantr.netlify.app/"
              />
            </div>

            <div className="col-12  col-lg-6  ">
              <Card
                image={CF}
                header="Book an appointment"
                description="Nextjs Typescript, Postgresql, Prisma, jwt, react calendar, CF api"
                about="This is a calendar app thats allows users select a times lot, and book an appointment based on the free time slot available, after clicking a time slot, you can now put in a reason for the call, you are also not able to pick a time slot you have picked before.
              "
                link="https://cf-calender.vercel.app/"
              />
            </div>
            {/* <div className="col-12  col-lg-6  ">
              <Card
                image={VideoChat}
                header="Skype Clone"
                description="A clone of the popular Skype application, I used React, Socket.io, Simple Peer, WEB-RTC API, and a lot of other technologies to build this application."
                about="This is an App that allows you place a call to your friends using web rtc technology and web sockets, when you send the link of the app to your friends, put in your name, copy your call-id, then send it to your friends, after your friend picks the call, you will see their video appear, your friend can also choose to decline and leave the call."
                link="https://chat-call.netlify.app/"
              />
            </div> */}

            <div className="col-12  col-lg-6 ">
              <Card
                image={oakhomesng}
                header="BuildForSDG Projects"
                description="React, useContext, dark and light theme"
                about="The #BuildforSDG Challenge is a Facebook and Andela partnership initiative to up-skill developers across Sub-Saharan (Kenya, Uganda, Cameroon, Ghana, Nigeria and South-Africa) through a six-week immersive program where selected developers worked in agile remote teams to innovate on projects relating to the SDGs."
                link="https://sdgbuild.netlify.app/"
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
