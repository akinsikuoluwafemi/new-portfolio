import React, { useEffect } from "react";
import Aboutmetabs from "./Aboutmetabs";
import Footer from "./Footer";
import { Spring } from "react-spring/renderprops";
import Aos from "aos";
import "aos/dist/aos.css";
import { Helmet } from "react-helmet";

const About = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, []);

  return (
    <div>
      <Helmet>
        <title>About | Akinsiku Oluwafemi David</title>
      </Helmet>

      <div>
        <div className="bg-root py-5">
          <div className="container">
            <Spring
              from={{ opacity: 0 }}
              to={{ opacity: 1 }}
              config={{ delay: 500, duration: 1000 }}
            >
              {(props) => (
                <div className="row row__wrapper" style={props}>
                  <div className="col-12 col-lg-6 ">
                    <h3 className="text-white pb-4 font-weight-thin head--spacing">
                      About Me
                    </h3>
                    <p className="row pr-5 text-success text--spacing">
                      With 5+ years of experience in commercial application
                      development, I am a diligent Fullstack software engineer
                      skilled in JavaScript, TypeScript, and Node.js. I also
                      possess expertise in blockchain technology and Solidity
                      smart contract development.
                    </p>
                    <p className="row pr-5 text-success text--spacing">
                      Throughout my career, I have architected industry-level
                      enterprises and developed products in diverse sectors such
                      as marketplaces, healthcare, gaming, AI applications, and
                      smart contract development. I am adept at adapting to
                      various workflows and work styles, reducing
                      development-production time.
                    </p>
                    {/* <p className="row pr-5 text-success text--spacing ">
											I have solid cross-organizational and cross-cultural experience from the
											banking sector and the manufacturing sector where I learnt in demand soft
											skills like collaboration, feedback and communication, which is top in my
											transferrable skills portfolio.
										</p> */}
                    <div>
                      <span className="tools__description text-white">
                        Email:
                      </span>
                      <p className="tools__name">
                        akinsiku.o@yahoo.com | akinsiku13@gmail.com
                      </p>
                    </div>
                    <div>
                      <span className="tools__description text-white">
                        Phone:
                      </span>
                      <p className="tools__name">On Request</p>
                    </div>
                    <div className="m-auto py-4">
                      <a
                        href="https://docs.google.com/document/d/1Id8zZPEHECqxZMvzFG0hJForQtBgSGiNKSSPCSGIB7g/edit?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-sm button-anim resume "
                      >
                        <span>Resume</span>
                      </a>
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
            <span to="/contact" className="border--trans ">
              I am currently open to new opportunities
            </span>
          </p>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default About;
