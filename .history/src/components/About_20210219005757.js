import React, {useEffect} from 'react';
import Aboutmetabs from './Aboutmetabs';
import Footer from './Footer';
import { Spring } from 'react-spring/renderprops';
import Aos from 'aos';
import "aos/dist/aos.css";

const About = () => {
    
     useEffect(() => {
        Aos.init({
            
            duration: 2500
        
        });
    }, [])

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
                                        I am currently a Frontend Engineer at Hazon Holdings. 
                                        </p>
                                <p className="row pr-5 text-success text--spacing">
                                I just 
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
                                <a href="https://femiakinsikusresume.netlify.app/" target="_blank" rel="noopener noreferrer" className="btn-sm button-anim resume "><span>Resume</span></a>
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
                    <p data-aos="zoom-out" className="ptext">
                        <span  to="/contact" className="border--trans ">
                    I am currently open to new opportunities
                            
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