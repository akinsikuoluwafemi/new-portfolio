import React from 'react';
import htmlimg from '../images/html5.svg';
import reactimg from '../images/react-1.svg';
import sql from '../images/sql.svg';
import cssimg from '../images/css-3.svg';
import ror from '../images/ruby.svg';
import pythonimg from '../images/python.svg';
import invision from '../images/invision.svg';
import adobexd from '../images/adobe-xd-1.svg';
import figma from '../images/figma-1.svg';
import sketch from '../images/sketch-2.svg';


const Aboutmetabs = () => {
    return (
        <div className="text-white">
            
            <ul class="nav nav-tabs" id="myTab" role="tablist">
                <li class="nav-item">
                    <a className="nav-link active mr-md-0 mr-lg-3 h4" id="skills-tab" data-toggle="tab" href="#skills" role="tab" aria-controls="skills" aria-selected="true">Main Skills</a>
                </li>
                <li class="nav-item">
                    <a className="nav-link mr-md-0 mr-lg-3 h4" id="experience-tab" data-toggle="tab" href="#experience" role="tab" aria-controls="experience" aria-selected="false">Experience</a>
                </li>
                <li class="nav-item">
                    <a className="nav-link h4" id="education-tab" data-toggle="tab" href="#education" role="tab" aria-controls="education" aria-selected="false">Education</a>
                </li>
            </ul>
            <div class="tab-content" id="myTabContent">
                <div class="tab-pane fade show active" id="skills" role="tabpanel" aria-labelledby="skills-tab">
                    <div className="pt-3">
                        <p className="tools__name">WebApp Development</p>
                        <p className="tools__description">This are some of the tools & concepts I use when I work.</p>
                        <div className="d-flex ">
                            <ul className="list__item">
                                <div className="d-flex mb-3">
                                    <img src={htmlimg} className="tools-logo"/>
                                    <p className="ml-3">HTML5</p>
                                </div>
                                <div className="d-flex  mb-3">
                                    <img src={reactimg} className="tools-logo"/>
                                    <p className="ml-3">REACT</p>
                                </div>
                                <div class="d-flex ">
                                    <img src={sql} className="tools-logo" />
                                    <p className="ml-3">SQL</p>
                                </div>

                            </ul>
                            <ul class="list__item ">
                                <div className="d-flex  mb-3">
                                    <img src={cssimg} className="tools-logo" />
                                    <p className="ml-3">CSS</p>
                                </div>
                                <div class="d-flex  mb-3">
                                    <img src={ror} style={{background: 'white'}} className="tools-logo"/>
                                    <p className="ml-3">Ruby on Rails</p>
                                </div>
                                <div class="d-flex ">
                                    <img src={pythonimg} className="tools-logo"/>
                                    <p className="ml-3">Python</p>
                                </div>


                            </ul>
                        </div>
                    </div>
                    <div>
                        <p className="tools__name">User experience design - <span className="tools__description">UI/UX</span></p>
                        <p className="tools__description" >I also use these for my prototyping and wireframes.</p>
                        <div className="d-flex ">
                            <ul className="list__item">
                                
                                <div class="d-flex  mb-3">
                                    <img src={invision} className="tools-logo" />
                                    <p className="ml-3">INVISION</p>
                                </div>
                                <div class="d-flex ">
                                    <img src={adobexd} className="tools-logo" />
                                    <p className="ml-3">ADOBEXD</p>
                                </div>

                            </ul>
                            <ul class="list__item ">
                                <div class="d-flex mb-3">
                                    <img src={figma} className="tools-logo" />
                                    <p className="ml-3">FIGMA</p>
                                </div>
                                <div class="d-flex  mb-3">
                                    <img src={sketch} className="tools-logo" />
                                    <p className="ml-3">SKETCH</p>
                                </div>
                                


                            </ul>
                        </div>
                    </div>
                
                </div>
                <div class="tab-pane fade" id="experience" role="tabpanel" aria-labelledby="experience-tab">
                    <div>
                        <p className="tools__name">#GADS - Programme Assistant - <span className="tools__description">Google, Andela & Pluralsight </span></p>
                        <p className="tools__description" >June 2020 - Dec 2020</p>
                    </div>
                    <div>
                        <p className="tools__name">#BuildforSDG Challenge - Programme Assistant - <span className="tools__description">Facebook & Andela </span></p>
                        <p className="tools__description" >April 2020 - June 2020</p>
                    </div>
                    <div>
                        <p className="tools__name">Hackathon4Justice Mentor - <span className="tools__description">Facebook & UNODC </span></p>
                        <p className="tools__description" >2020 - Jan</p>
                    </div>
                    <div>
                        <p className="tools__name">Devc Training With Andela Mentor - <span className="tools__description">Facebook & Andela </span></p>
                        <p className="tools__description">2019 - Aug</p>
                    </div>


                </div>
                <div class="tab-pane fade" id="education" role="tabpanel" aria-labelledby="education-tab">
                    <div>
                        <p className="tools__name">Web Developer Diploma - <span className="tools__description">OpenClassrooms</span></p>
                        <p className="tools__description">2020 - 2021</p>
                    </div>
                    <div>
                        <p className="tools__name">Stutern Graduate Accelerator - <span className="tools__description">Stutern</span></p>
                        <p className="tools__description">2019 (4 months)</p>
                    </div>
                    <div>
                        <p className="tools__name">Electronics Engineering - <span className="tools__description">Yaba Colledge of technology</span></p>
                        <p className="tools__description">2012 - 2015</p>
                    </div>
                    
                </div>
            </div>
            


            

        </div>
    )

    
}

export default Aboutmetabs;