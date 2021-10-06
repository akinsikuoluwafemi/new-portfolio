import React from 'react';

const AboutInHome = () => {
    return (
      <div className="bg-root py-4">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-6 ">
              <h3 className="text-white pb-4 font-weight-thin head--spacing">
                About Me
              </h3>
              <p className="row pr-5 text-success text--spacing">
                Diligent software engineer with 4+ years experience in
                commercial application development. In past roles I have
                architected industry level enterprise and have worked on
                products centering around marketplaces, healthcare and gaming.{" "}
              </p>
              <p className="row pr-5 text-success text--spacing">
                {/* write something */}
              </p>
            </div>
            <div className="col-12 col-lg-6">
              <hr className="gb " />
              <p className="row pt-4 pl-2 text-white text--spacing">
                When I am not coding I do a lot of other awesome things as well,
                like spending time on a VR headset and forgeting my self there.
                I also do things like,
              </p>
              <ul className="text--spacing">
                <li className="listcircle">
                  <span className="text-white">Dancing Salsa.</span>
                </li>
                <li className="listcircle">
                  <span className="text-white">
                    Fantasizing about being an on air personality.
                  </span>
                </li>
                <li className="listcircle">
                  <span className="text-white">
                    Reading about Vertical Farming{" "}
                  </span>
                </li>
              </ul>
              <p className="row text-white text--spacing">
                I am also a very awesome cook too{" "}
                <span role="img" aria-labelledby="smile">
                  😁
                </span>
                .
              </p>
            </div>
            <div className="m-auto py-4">
              <a
                href="https://www.canva.com/design/DAEmFVwoQtQ/8Qkm-tLvj7ovx5h2ijN9DQ/view?utm_content=DAEmFVwoQtQ&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton"
                target="_blank"
                className="btn-sm button-anim resume "
                rel="noopener noreferrer"
              >
                <span>Resume</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
}

export default AboutInHome;