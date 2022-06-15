import React from "react";
import Link from "react-router-dom/Link";

const ContactforHome = () => {
  return (
    <div>
      {/*  */}
      <div className="bg-reachout">
        <div className="bg--reachout pimg2 ">
          <p data-aos="zoom-out" className="ptext">
            <Link to="/contact" className="border--grey ">
              Get In touch
            </Link>
          </p>
        </div>
        {/*  */}
      </div>
    </div>
  );
};

export default ContactforHome;
