import React from 'react';
import oakhomesng from '../images/oakwoodhomes.jpg';
import Card from './Card';
import writia from '../images/biking.jpg';
import resume from '../images/newresume.png';
import udacitynew from '../images/udacitynew.png';
import move from '../images/move.jpg';
import Footer from './Footer';


const Portfolio = () =>{
    return (
        <div>

            <div className="bg-root pt-4">
                <div className="container px-3 py-4 pb-lg-5 py-lg-5" >

                    <h3 className="text-white pb-4 font-weight-thin head--spacing">Portfolio</h3>



                    <div className="row ">

                        <div className="col-12  col-lg-6   ">
                            <Card image="https://images.ctfassets.net/clveum0ikkbk/3PAwD9ujeEEQ4sy22W0KEG/1d0f26299dd1646a74824cbe9cad460a/weather-app.jpg?w=1024&h=576&q=100" header="Cloud 24" description="Web Application" about="Cloud 24 allows users to extract weather informations, like temperature, wind-direction, pressure e.t.c." link="https://akinsikuoluwafemi.github.io/Cloud24/" />

                        </div>

                        <div className="col-12  col-lg-6  ">
                            <Card image={writia} header="Boulder Bike Tour" description="Ruby On Rails Application" about="This is a fullstack application, I used rails for the backend and react for the fron end, this app ." link="https://writia.herokuapp.com/" />

                        </div>

                        <div className="col-12  col-lg-6  ">
                            <Card image={move} header="Move and Groove" description="Ruby On Rails Application" about="Move and Groove is an activity tracker tool that allows users sign up and create activities as well as track their activities." link="https://fitandtracker.herokuapp.com/" />

                        </div>
                        <div className="col-12  col-lg-6">

                            <Card image={resume} header="My Resume" description="Web mockup" about="This is a styled mockup of my resume, I decided to code up my resume." link="https://femiakinsikusresume.netlify.com/" />
                        </div>
                        <div className="col-12  col-lg-6   ">
                            <Card image={udacitynew} header="Udacity Landing Page" description="Web Mockup" about="A landing page of Udacity I cloned from the scratch." link="https://akinsikuoluwafemi.github.io/udacity-landing-page/" />

                        </div>

                        <div className="col-12  col-lg-6">

                            <Card image={oakhomesng} header="Oakwood Homes & Construct" description="Wordpress Website" about="This is a Real Estate website I built for a team in Lekki, Lagos Nigeria." link="https://oakhomesng.com/" />
                        </div>





                    </div>
                </div>
            </div>
            <div>
                <Footer />

            </div>


        </div>
    )
}

export default Portfolio;