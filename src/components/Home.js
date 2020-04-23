import React from 'react';
import Jumbotron from './Jumbotron';
import Aboutinhome from './Aboutinhome';
import Recentworksinportfolio from './recentWorksInPortfolio';
import Placesofworkinhome from './placeOfWorkInHome';
import contactInHome from './contactInHome';
import Footer from './Footer';

const Home = () => {
    return (
        <div>
            <div className="bg-root">
                <div className="container pt-5">

                    <Jumbotron />
                    <Aboutinhome />
                    <Recentworksinportfolio />
                    <Placesofworkinhome />

                </div>
            </div>
            <div className="bg-reachout">
                <contactInHome />

            </div>
            <Footer/>
        </div>
        
        
    )
}

export default Home;