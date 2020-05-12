import React from 'react';
import Aboutmetabs from './Aboutmetabs';
import Footer from './Footer';
import { Spring } from 'react-spring/renderprops';

const About = () => {
    return (
        <div>

            
            <div>
                <div className="bg-root py-5">
                    <div className="container">
                        <Spring
                            from={{ opacity: 0 }}
                            to={{ opacity: 1 }}
                            config={{ delay: 500, duration: 1000 }}
                            
                            
                        >
                            {props => (
                                <div className="row row__wrapper" style={props}>
                        <div className="col-12 col-lg-6 ">
                            <h3 className="text-white pb-4 font-weight-thin head--spacing">About Me</h3>
                                        <p className="row pr-5 text-success text--spacing">
                                            I am currently a Programme Assistant in the <a href="https://buildforsdg.andela.com/projects">Build4SDG challenge 2020</a> , with Facebook and Andela and a <a href="https://app.pluralsight.com/profile/oluwafemi-akinsiku">Google Cloud student</a> , I live in Lagos, Nigeria, where I do freelance jobs for businesses and teams.                  
                
                                </p>
                                <p className="row pr-5 text-success text--spacing">
                                I was born in Lagos, Nigeria and I am from Ondo State. I am graced with two other siblings, who are doing excellently well.
                        </p>
                        <p className="row pr-5 text-success text--spacing ">
                            I am fueled by my passion to keep learning and improving myself with the skill-set needed to work with any technology, that's why I consider myself, a forever student, eager to master a skill and move on to the next.
                        </p>             
                            <div>
                                <span className="tools__description text-white">Email:</span>
                                <p className="tools__name">akinsiku.o@yahoo.com | akinsiku13@gmail.com</p>
                            </div>
                            <div>
                                <span className="tools__description text-white">Phone:</span>
                                <p className="tools__name">+2348103031691</p>
                            </div>
                            <div className="m-auto py-4">
                                <a href="https://femiakinsikusresume.netlify.com/" target="_blank" className="btn-sm button-anim resume "><span>Resume</span></a>
                            </div>

                    </div>
                        <div className="col-12 col-lg-6">
                            <Aboutmetabs />

                            <hr className="gb " />

                        </div>

                    </div>
                            )}
                        </Spring>
                    
                </div>
            </div>

            </div>
            <div>
                

                <div className="pimg3">
                    <p className="ptext">
                        <span to="/contact" className="border--trans ">
                    I am available for freelance hire
                            
                    </span>
                        
                </p>

                </div>
                <div>
                    <Footer/>
                </div>

            </div>
        </div>      
    )
}

export default About;