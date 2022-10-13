import React, { Component } from "react";
// import Crowdcoins from "../images/crowdcoins.png";
import VideoChat from "../images/video-chat.png";
import Wibe from "../images/wibe.png";

import p4 from "../images/help.png";
import p5 from "../images/sdgimage.png";
// import NikaShop from "../images/nika-shop.png";
import Waveroom from "../images/waveroom.png";
import pantry from "../images/pantry.jpeg";

class Portfolioscrollinhome extends Component {
  render() {
    return (
      <div className="items">
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://wibe-collection.netlify.app/"
        >
          {" "}
          <img className="item item3" src={Wibe} alt="Wibe Collection" />
        </a>
        <a
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
        </a>
        {/*  */}

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

        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://pantr.netlify.app/"
        >
          {" "}
          <img className="item item4" src={pantry} alt="Nika-clothing" />
        </a>

        {/* <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://nika-alpha-clothing.herokuapp.com/"
        >
          {" "}
          <img className="item item4" src={NikaShop} alt="Nika-clothing" />
        </a> */}
        {/* <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://kickstarter-clone.vercel.app/"
        >
          {" "}
          <img
            className="item item3"
            src={Crowdcoins}
            alt="Blockchain Application"
          />
        </a> */}

        {/* <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://peeps-frontend.vercel.app"
        >
          {" "}
          <img className="item item4" src={p4} alt="portfolio" />
        </a> */}

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
