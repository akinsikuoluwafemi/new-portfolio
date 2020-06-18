import React from 'react';
import oakhomesng from '../images/oakwoodhomes.jpg';
import Card from './Card';
// import learning from '../images/learning.jpg';
import writia from '../images/writia.jpg';
import resume from '../images/newresume.png';
import udacitynew from '../images/udacitynew.png';
// import cloud24 from '../images/cloud24.jpg';
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

                        <div className="col-12   col-lg-6  ">
                            <Card image={writia} header="Writia" description="Rails Web Application" about="Writia allows users to login and document their thoughts or writings, they also get to see articles from other writers." link="https://writia.herokuapp.com/" />

                        </div>

                        <div className="col-12  col-lg-6  ">
                            <Card image="https://image.freepik.com/free-psd/top-view-back-school-with-office-supplies_23-2148247566.jpg" header="Equal Learning" description="Web prototype" about="Equal learning is an app that allows kids have agency and own their own learning." link="https://xd.adobe.com/view/ae4c40e6-feb0-4716-6a9e-69c421b81f9b-d87d/" />

                        </div>
                        <div className="col-12  col-lg-6   ">

                            <Card image={resume} header="My Resume" description="Web mockup" about="This is a styled mockup of my resume, I decided to code up my resume." link="https://femiakinsikusresume.netlify.com/" />
                        </div>
                        <div className="col-12  col-lg-6   ">
                            <Card image={udacitynew} header="Udacity Landing Page" description="Web Mockup" about="A landing page of Udacity I cloned from the scratch." link="https://akinsikuoluwafemi.github.io/udacity-landing-page/" />

                        </div>

                        <div className="col-12  col-lg-6   ">

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