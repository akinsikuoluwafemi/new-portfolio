import React, { Component } from "react";
// import VideoChat from "../images/video-chat.png";
import Wibe from "../images/wibe.png";
import Cat from "../images/catpp.png";

import p5 from "../images/sdgimage.png";
import Waveroom from "../images/waveroom.png";
import Onpeeps from "../images/onpeeps.png";
import CF from "../images/time-slot.png";

import pantry from "../images/pantry.jpeg";

class Portfolioscrollinhome extends Component {
  render() {
    return (
      <div className="items">
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

        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://tinder4-cats-jdtg.vercel.app/"
        >
          {" "}
          <img className="item item3" src={Cat} alt="Tinder For Cats" />
        </a>

        {/*  */}
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://wibe-collection.netlify.app/"
        >
          {" "}
          <img className="item item3" src={Wibe} alt="Wibe Collection" />
        </a>
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
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://cf-calender.vercel.app/"
        >
          {" "}
          <img className="item item3" src={CF} alt="Book an appointment" />
        </a>
        {/*  */}

        <a
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
        </a>
      </div>
    );
  }
}
export default Portfolioscrollinhome;
