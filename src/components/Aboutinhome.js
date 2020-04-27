import React from 'react';

const AboutInHome = () => {
    return (
        <div className="bg-root py-4">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-6 ">
                        <h3 className="text-white pb-4 font-weight-thin head--spacing">About Me</h3>
                        <p className="row pr-5 text-success text--spacing">
                             I am very passionate about technology, empathy & self-awareness. I am confident about myself and I believe that, trust should be given upfront and not really earned.

                        </p>
                        <p className="row pr-5 text-success text--spacing">
                            {/* write something */}
                        </p>
                    </div>
                    <div className="col-12 col-lg-6">
                        <hr className="gb " />
                        <p className="row pt-4 pl-2 text-white text--spacing">
                            When I am not coding I do a lot of other awesome things as well, like spending time on a VR headset and forgeting my self there 😁, I also do things like,
                        </p>
                        <ul className="text--spacing">
                            <li className="listcircle"><span className="text-white">Dancing Salsa.</span></li>
                            <li className="listcircle"><span className="text-white">fantasizing about being an on air personality.</span></li>
                            <li className="listcircle"><span className="text-white">Thinking about sking and sky diving e.t.c </span></li>
                        </ul>
                        <p className="row text-white text--spacing">
                            I am also a very awesome cook too 😁.
                        </p>
                    </div>
                    <div className="m-auto py-4">
                        <a href="https://femiakinsikusresume.netlify.com/" target="_blank" className="btn-sm button-anim resume "><span>Resume</span></a>
                    </div>


                </div>
            </div>

        </div>
    )
}

export default AboutInHome;