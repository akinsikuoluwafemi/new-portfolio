import React, { Component } from 'react';
import p1 from '../images/biking.jpg';
import p2 from '../images/move.jpg';
import p3 from '../images/newresume.png';
import p4 from '../images/learning.jpg';
import p5 from '../images/udacitynew.png';




class Portfolioscrollinhome extends Component {
    
    render() { 
        return (
            <div className="items ">
                <a rel="noopener noreferrer" target="_blank" href="https://boulder-bike-race.netlify.app/"><img className="item item1" src={p1} alt="portfolio" /></a>
                <a rel="noopener noreferrer" target="_blank" href="https://fitandtracker.herokuapp.com/"><img className="item item2" src={p2} alt="portfolio" /></a>
                <a rel="noopener noreferrer" target="_blank" href="https://femiakinsikusresume.netlify.com/"> <img className="item item3" src={p3} alt="portfolio"  /></a>
                <a target="_blank" href="https://xd.adobe.com/view/ae4c40e6-feb0-4716-6a9e-69c421b81f9b-d87d/"> <img className="item item4" src={p4} alt="portfolio" /></a>
                <a target="_blank" href="https://akinsikuoluwafemi.github.io/udacity-landing-page/"><img className="item item5" src={p5} alt="portfolio"  /></a>
            </div>     
        );
    }
}
 
export default Portfolioscrollinhome;

