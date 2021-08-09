import React from 'react';

const Placeofworkinhome = () => {
    return (
      <div className="bg-root py-4">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-6 ">
              <h3 className="text-white pb-0 pb-lg-4 font-weight-thin head--spacing">
                Places Of Work
              </h3>
              <p className="row pr-5 text-success">&nbsp;</p>
            </div>
            <div className="col-12 col-lg-6">
              <hr className="gb " />

              <div className="d-flex justify-content-between ">
                <div className="text-white ">
                  <p>Hazon Holdings</p>
                  <p className="workdate">2.2021 - 6.2021</p>
                </div>
                <p className="text-white">Frontend Engineer</p>
              </div>

              <div className="d-flex justify-content-between ">
                <div className="text-white ">
                  <p>Hazon Holdings</p>
                  <p className="workdate">2.2021 - 6.2021</p>
                </div>
                <p className="text-white">Frontend Engineer</p>
              </div>

              <div className="d-flex justify-content-between ">
                <div className="text-white ">
                  <p>
                    Andela <small>(contract based)</small>
                  </p>
                  <p className="workdate">3.2019 - 10.2020</p>
                </div>
                <p className="text-white">Programme Assistant</p>
              </div>

              <div className="d-flex justify-content-between ">
                <div className="text-white ">
                  <p>Freelancer</p>
                  <p className="workdate">before 2019</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Placeofworkinhome;