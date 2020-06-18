import React from 'react';
import Link from 'react-router-dom/Link';


const ContactInHome = () => {
    return (
        <div className="bg--reachout pimg2 ">
    
            <p className="ptext">
                <Link to="/contact" className="border--grey ">
                Get In touch
                        
                </Link>
                    
            </p>
        </div>
    )
}

export default ContactInHome;