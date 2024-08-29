import React, { Component } from "react";
import Waveroom from "../images/waveroom.png";
import Onpeeps from "../images/onpeeps.png";
import Cc1 from "../images/cc1.png";
import NewsApp from "../images/news-app.png";


class Portfolioscrollinhome extends Component {
  render() {
    return (
      <div className="items">
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://github.com/akinsikuoluwafemi/innoscripta"
        >
          {" "}
          <img className="item item3" src={NewsApp} alt="News App" />
        </a>
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://conversion-9ylifey46-akinsikuoluwafemi.vercel.app/"
        >
          {" "}
          <img
            className="item item4"
            src={Cc1}
            alt="A curenncy converter application"
          />
        </a>
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://onpeeps.com/"
        >
          {" "}
          <img
            className="item item4"
            src={Onpeeps}
            alt="A fast and reliable way to exchange act of kindness"
          />
        </a>
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://custom.thewavroom.com/editor"
        >
          {" "}
          <img
            className="item item4"
            src={Waveroom}
            alt="Album editor application"
          />
        </a>

        {/*  */}

        {/*  */}
        {/* <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://wibe-collection.netlify.app/"
        >
          {" "}
          <img className="item item3" src={Wibe} alt="Wibe Collection" />
        </a> */}
        {/* <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://chat-call.netlify.app/"
        >
          {" "}
          <img
            className="item item3"
            src={VideoChat}
            alt="Video Call Application"
          />
        </a> */}
        {/* <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://cf-calender.vercel.app/"
        >
          {" "}
          <img className="item item3" src={CF} alt="Book an appointment" />
        </a> */}
        {/*  */}

        {/* <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://pantr.netlify.app/"
        >
          {" "}
          <img className="item item4" src={pantry} alt="Nika-clothing" />
        </a>

        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://sdgbuild.netlify.app/"
        >
          <img className="item item5" src={p5} alt="sdg" />
        </a> */}
      </div>
    );
  }
}
export default Portfolioscrollinhome;
