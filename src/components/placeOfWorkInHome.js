import React from "react";

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
                <p>
                  MVP Factory &nbsp;
                  <span style={{ fontSize: "13px" }}>(in Berlin)</span>
                </p>
                <p className="workdate">07.2022 - till date</p>
              </div>
              <p className="text-white">FullStack Developer</p>
            </div>

            <div className="d-flex justify-content-between ">
              <div className="text-white ">
                <p>
                  Livetree &nbsp;
                  <span style={{ fontSize: "13px" }}>(in London)</span>
                </p>
                <p className="workdate">03.2022 - 05.2022 </p>
              </div>
              <p className="text-white">Blockchain Developer</p>
            </div>

            <div className="d-flex justify-content-between ">
              <div className="text-white ">
                <p>
                  Explorator Labs &nbsp;
                  <span style={{ fontSize: "13px" }}>(in Ontario)</span>
                </p>
                <p className="workdate">11.2021 - 03.2022</p>
              </div>
              <p className="text-white">Fullstack Engineer</p>
            </div>

            <div className="d-flex justify-content-between ">
              <div className="text-white ">
                <p>
                  Hummingbirds AI &nbsp;
                  <span style={{ fontSize: "13px" }}>(in Seattle)</span>
                </p>
                <p className="workdate">6.2021 - 8.2021</p>
              </div>
              <p className="text-white">Frontend Engineer</p>
            </div>

            <div className="d-flex justify-content-between ">
              <div className="text-white ">
                <p>
                  Hazon Holdings &nbsp;
                  <span style={{ fontSize: "13px" }}>(in Lagos)</span>
                </p>
                <p className="workdate">2.2021 - 6.2021</p>
              </div>
              <p className="text-white">Frontend Engineer</p>
            </div>

            <div className="d-flex justify-content-between ">
              <div className="text-white ">
                <p>
                  Andela <small>(contract based)</small>
                </p>
                <p className="workdate">10.2017 - 10.2020</p>
              </div>
              <p className="text-white">
                Tech Consultant & Programme Assistant
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Placeofworkinhome;
