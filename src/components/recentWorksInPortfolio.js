import React from 'react';
import Portfolioscrollininhome from './portfolioScrollInHome';
import Link from 'react-router-dom/Link';

const Recentworksinportfolio = () => {
    return (
        <div className="bg--recent pb-3">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-lg-6 ">
                        <h3 className="text-white pb-4 font-weight-thin  head--spacing">Recent Works</h3>
                    </div>
                    <div className="col-12 col-lg-6">
                        <hr className="gb " />
                    </div>
                </div>
                <div className="row port">
                    <Portfolioscrollininhome />
                    <div className="m-auto py-4">
                        <Link to="/portfolio" className="btn-sm button-anim resume"><span>See Projects</span></Link>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Recentworksinportfolio;