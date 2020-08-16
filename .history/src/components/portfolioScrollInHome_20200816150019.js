import React, { Component } from 'react';
import p1 from '../images/biking.jpg';
import p2 from '../images/writia.jpg';
import p3 from '../images/newresume.png';
import p4 from '../images/learning.jpg';
import p5 from '../images/udacitynew.png';




class Portfolioscrollinhome extends Component {
    
    render() { 
        return (
            <div className="items ">
                <a href="https://boulder-bike-race.netlify.app/"><img className="item item1" src={p1} alt="portfolio" target="_blank"/></a>
                <a href="https://writia.herokuapp.com/"><img className="item item2" src={p2} alt="portfolio" target="_blank" /></a>
                <a href="https://femiakinsikusresume.netlify.com/"> <img className="item item3" src={p3} alt="portfolio" target="_blank" /></a>
                <a href="https://xd.adobe.com/view/ae4c40e6-feb0-4716-6a9e-69c421b81f9b-d87d/"> <img className="item item4" src={p4} alt="portfolio" target="_blank"/></a>
                <a href="https://akinsikuoluwafemi.github.io/udacity-landing-page/"><img className="item item5" src={p5} alt="portfolio" target="_blank" /></a>
            </div>     
        );
    }
}
 
export default Portfolioscrollinhome;

