import React from "react";
import Jumbotron from "./Jumbotron";
import Aboutinhome from "./Aboutinhome";
import Recentworksinportfolio from "./recentWorksInPortfolio";
import Placesofworkinhome from "./placeOfWorkInHome";
import Footer from "./Footer";
import ContactforHome from "./ContactforHome";
import "./bubbles.css";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home | Akinsiku Oluwafemi David</title>
      </Helmet>

      <div className="bg-root">
        <div className="container pt-5">
          <Jumbotron />
          <Aboutinhome />
          <Recentworksinportfolio />
          <Placesofworkinhome />
        </div>
      </div>

      <ContactforHome />

      <Footer />
    </div>
  );
};

export default Home;
