import React from 'react';
import oakhomesng from '../images/sdgimage.png';
import Card from './Card';
import biking from '../images/biking.jpg';
import help from "../images/help.png";

import resume from '../images/newresume.png';
import udacitynew from '../images/udacitynew.png';
import move from '../images/move.jpg';
import Footer from './Footer';


const Portfolio = () =>{
    return (
      <div>
        <div className="bg-root pt-4">
          <div className="container px-3 py-4 pb-lg-5 py-lg-5">
            <h3 className="text-white pb-4 font-weight-thin head--spacing">
              Portfolio
            </h3>

            <div className="row ">
              <div className="col-12  col-lg-6  ">
                <Card
                  image={help}
                  header="Peeps"
                  description="React, Rails, web sockets(actioncable), activestorage, heroku"
                  about="This is a fullstack application that allows users that have needs make requisition so other users can volunteer to meet their need. On volunteering you create a message flow between you and the user which allows you to send them a direct message in real time."
                  link="https://boulder-bike-race.netlify.app/"
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
                  about="This is a Website I built in React, it hosted the buildforsdg cohort one project."
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

              <div className="col-12  col-lg-6">
                <Card
                  image={resume}
                  header="My Resume"
                  description="Web mockup"
                  about="This is a styled mockup of my resume, I decided to code up my resume."
                  link="https://femiakinsikusresume.netlify.com/"
                />
              </div>
              <div className="col-12  col-lg-6   ">
                <Card
                  image={udacitynew}
                  header="Udacity Landing Page"
                  description="Web Mockup"
                  about="A landing page of Udacity I cloned from the scratch."
                  link="https://akinsikuoluwafemi.github.io/udacity-landing-page/"
                />
              </div>

              <div className="col-12  col-lg-6">
                <Card
                  image="https://images.ctfassets.net/clveum0ikkbk/3PAwD9ujeEEQ4sy22W0KEG/1d0f26299dd1646a74824cbe9cad460a/weather-app.jpg?w=1024&h=576&q=100"
                  header="Cloud 24"
                  description="Javascript Web Application"
                  about="Cloud 24 allows users to extract weather informations, like temperature, wind-direction, pressure e.t.c."
                  link="https://akinsikuoluwafemi.github.io/Cloud24/"
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