const data = [
  {
    name: "Kindred (Publicis)",
    location: "Prague",
    date: "11.2023 - till date",
    role: "Senior Frontend Engineer",
  },
  {
    name: "Aubay PT",
    location: "Lisbon",
    date: "12.2022 - 11.2023",
    role: "Frontend Engineer",
  }, {
    name: "MVP Factory",
    location: "Berlin",
    date: "07.2022 - 12.2022",
    role: "FullStack Developer",
  },
  {
    name: "Livetree",
    location: "London",
    date: "03.2022 - 05.2022",
    role: "Blockchain Developer",
  }, {
    name: "Explorator Labs",
    location: "Ontario",
    date: "11.2021 - 03.2022",
    role: "Fullstack Engineer",
  }, {
    name: "Hummingbirds AI",
    location: "Seattle",
    date: "6.2021 - 8.2021",
    role: "Frontend Engineer",
  }, {
    name: "Hazon Holdings",
    location: "Lagos",
    date: "2.2021 - 6.2021",
    role: "Frontend Engineer",
  }, {
    name: "Andela",
    location: "Remote",
    date: "10.2017 - 10.2020",
    role: "Tech Consultant & Programme",
  }
]

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

            {data.map((item, index) => (
              <div key={index} className="d-flex justify-content-between ">
                <div className="text-white ">
                  <p>
                    {item.name} &nbsp;
                    <span style={{ fontSize: "13px" }}>(in {item.location})</span>
                  </p>
                  <p className="workdate">{item.date}</p>
                </div>
                <p className="text-white">{item.role}</p>
              </div>
            )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Placeofworkinhome;
