import React, { Component } from 'react';
import p1 from '../images/biking.jpg';
import p2 from '../images/move.jpg';
import p3 from '../images/furrow.png';
import p4 from '../images/help.png';
import p5 from '../images/sdgimage.png';
import p6 from '../images/pantry';





class Portfolioscrollinhome extends Component {
    
    render() { 
        return (
            <div className="items">
                <a rel="noopener noreferrer" target="_blank" href="http://mypantryapp.me/"> <img className="item item4" src={p4} alt="Pantry-App" /></a>

                <a rel="noopener noreferrer" target="_blank" href="https://peeps-frontend.vercel.app"> <img className="item item4" src={p4} alt="portfolio" /></a>
                <a rel="noopener noreferrer" target="_blank" href="https://furrow-studios.vercel.app/"> <img className="item item3" src={p3} alt="portfolio"  /></a>

                <a rel="noopener noreferrer" target="_blank" href="https://sdgbuild.netlify.app/"><img className="item item5" src={p5} alt="sdg"  /></a>
                <a rel="noopener noreferrer" target="_blank" href="https://boulder-bike-race.netlify.app/"><img className="item item1" src={p1} alt="portfolio" /></a>
                <a rel="noopener noreferrer" target="_blank" href="https://fitandtracker.herokuapp.com/"><img className="item item2" src={p2} alt="portfolio" /></a>
            </div>     
        );
    }
}
 
export default Portfolioscrollinhome;

