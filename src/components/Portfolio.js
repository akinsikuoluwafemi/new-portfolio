import React from "react";
import oakhomesng from "../images/sdgimage.png";
import Card from "./Card";
import Cc2 from "../images/cc2.png";
import ST from "../images/st.png";

import { Helmet } from "react-helmet";

import Waveroom from "../images/waveroom.png";

import NewsAppFeed from "../images/news-app-feeds.png";

import Onpeeps from "../images/onpeeps2.png";

import Footer from "./Footer";

const data = [
  {
    image: ST,
    header: "Support Ticket App",
    description:
      "React-Typescript, Redux-toolkit, faker, react-testing-library, ts-node, mongodb, Docker, yup, react-hook-form, styled-component, morgan, supertest, joi, mongoose, express, Moment",
    about:
      "This is a fullstack application, a use case for this is when in house teams want to create support ticket, and check for deadlines. I am using React-Typescript in the frontend and mongodb, mongoose in the backend, I am also containerizing both applications using docker, I also have a docker compose file to spin up the applications locally.",
    link: "https://github.com/akinsikuoluwafemi/Support-Ticket",
  },
  {
    image: NewsAppFeed,
    header: "News Aggregator App",
    description:
      "React Typescript, axios, redux-persist, redux-toolkit, styled components, docker, guardian news api, open news api",
    about:
      "An app that fetches news articles, filters them by category,sources,authors, we also have a feeds page that tailors what the user sees to the articles,sources and categories they selected. you can also spin up using docker",
    link: "https://github.com/akinsikuoluwafemi/innoscripta"
  },
  {
    image: Cc2,
    header: "Currency Exchange",
    description:
      "Nextjs Typescript, React hook form, yup, redux-toolkit, styled components, exchange rate api, spark-line charts",
    about:
      "This is a fin-tech app, users can convert from one currency to another, I used the exchange rate api to get the exchange rate, I also used spark-line charts to show the exchange rate trends, users can be able to toggle/swap from a base currency to a target currency, users can also see the conversion history of exchanges they have made, users can also get exchange history by duration (7days, 14days, 30 days etc) and see a graph representation of the exchanges, they can also choose to view or delete the individual conversion history.",
    link: "https://conversion-9ylifey46-akinsikuoluwafemi.vercel.app/"
  },
  {
    image: Waveroom,
    header: "Waveroom",
    description: "React js, Spotify Api, Firebase Cloud functions to handle large traffic",
    about:
      "Waveroom is an album editor app used to create song albums when you search for an artist, the waveform of each track also shows on the album cover, waveroom allows you style the album to your preferences, you can buy the album after styling, it has robust shopping cart features, it also uses firebase cloud functions to handle large traffic.",
    link: "https://custom.thewavroom.com/"
  },
  {
    image: Onpeeps,
    header: "OnPeeps",
    description:
      "Nextjs Typescript, Postgresql, Prisma, jwt, react-otp-input, Google maps, Peerjs, redux-toolkit, styled components, Redis",
    about:
      "Onpeeps is a means of facilitating exchanged acts of kindness, we help in connecting people in need to willing volunteers globally. Users can log in, create a request, other users can see the request on the map, (their feeds), then click on a request and choose to volunteer, when you volunteer, you are sent to a real time messaging chat, where you can send a message to the user, I am using redis and peer js, to enable real time messaging and video call functionality, I am also using google maps to show the location of the user on the map (Still in development)",
    link: "https://onpeeps.com/"
  },
  {
    image: oakhomesng,
    header: "BuildForSDG Projects",
    description: "React, useContext, dark and light theme",
    about:
      "The #BuildforSDG Challenge is a Facebook and Andela partnership initiative to up-skill developers across Sub-Saharan (Kenya, Uganda, Cameroon, Ghana, Nigeria and South-Africa) through a six-week immersive program where selected developers worked in agile remote teams to innovate on projects relating to the SDGs.",
    link: "https://sdgbuild.netlify.app/"
  },
];

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
            {data.map((item, index) => (
              <div key={index} className="col-12 col-lg-6">
                <Card
                  image={item.image}
                  header={item.header}
                  description={item.description}
                  about={item.about}
                  link={item.link}
                />
              </div>
            )
            )}
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
