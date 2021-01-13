import React, { Component } from 'react';
import pp from '../images/new-photo.png';
import { Spring } from 'react-spring/renderprops';



class Jumbotron extends Component {
    render(){
        return (
            
            <Spring
                from={{ opacity: 0 }}
                to={{ opacity: 1 }}
                config={{delay: 500, duration: 1000}}
                
            >

                {props => (
                    <div className="jumbo text-center mt-1" style={props}>
                        <div >
                            <div className="jumbo__wrapper">
                                <img className="jumbo__profilepicture mt-5" src={pp} alt="profile" />
                            </div>
                            <h1 className="text-center jumbo__header jumbo__header--text mt-3 text-white ">Hello I'm Femi,</h1>

                            <h1 className="text-center jumbo__header jumbo__header--text mt-3 text-white ">Full-Stack Developer and D</h1>
                            
                            <span className="bb text-success">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                        </div>
                        <div className="row py-4 ">
                            <div className="col-lg-4 col-12"></div>

                            <div className="logo d-flex justify-content-center">
                                <div className="log-con d-flex justify-content-center">
                                    <a href="https://github.com/akinsikuoluwafemi" target="_blank" rel="noopener noreferrer"><i className="fab fa-github fa-1x"></i></a>

                                </div>
                                &nbsp;
                                &nbsp;
                                
                                <div className="log-con d-flex justify-content-center">
                                    <a href="https://twitter.com/david_akinsiku" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter fa-1x tw"></i></a>

                                </div>
                                &nbsp;
                                &nbsp;
                                

                                <div className="log-con d-flex justify-content-center">
                                    <a href="https://web.facebook.com/femi.akinsiku.5/" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f fa-1x fb"></i></a>
                                    
                                </div>
                                &nbsp;
                                &nbsp;

                                <div className="log-con d-flex justify-content-center">
                                    <a href="https://www.linkedin.com/in/oluwafemi-akinsiku-85a37b141/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in fa-1x in"></i></a>
                                </div>
                            
                            </div>
                            
                            <div className="col-lg-4 col-12"></div>
                        </div>

                        
                    </div>
                )}

            </Spring>
            
            
           
        )
    }
}

export default Jumbotron