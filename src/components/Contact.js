import React from "react";
import Form from "./Form";
import Footer from "./Footer";
import { Helmet } from "react-helmet";

const Contact = () => {
  return (
    <div>
      <Helmet>
        <title>Contact | Akinsiku Oluwafemi David</title>
      </Helmet>
      <div className="bg-root">
        <Form />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Contact;
