import React from 'react';
import Jumbotron from './Jumbotron';
import Aboutinhome from './Aboutinhome';
import Recentworksinportfolio from './recentWorksInPortfolio';
import Placesofworkinhome from './placeOfWorkInHome';
import Footer from './Footer';
import ContactforHome from './ContactforHome';
import './bubbles.css';

const Home = () => {
    return (
        <div>
            <div className="bg-root">
                <div className="container pt-5">
                    
                    <ul className="bubbles">
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>

                    <Jumbotron />
                    <Aboutinhome />
                    <Recentworksinportfolio />
                    <Placesofworkinhome />


                </div>
            </div>
            
           <ContactforHome/>
            
            <Footer />

        </div>
        
        
    )
}

export default Home;