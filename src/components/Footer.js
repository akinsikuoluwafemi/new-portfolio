import React, {useEffect} from 'react';
import Upscroll from './Upscroll';
import Aos from 'aos';
import "aos/dist/aos.css";

const Footer = () => {
    
    useEffect(() => {
        Aos.init({
            duration: 2000
        })
    },[])

    return (
        <footer  className="footer">
            <div className="footer__one">
                <div className="footer__one--container">
                    <p data-aos="fade-up"  className="text-white">I collaborate <br />with ambitious <br /> <span className="text-success">brands and people</span>, <br />lets build something together</p>
 
                </div>
                <span data-aos="fade-up"  className="footer__one--score">+100%</span>
                
            </div>
            <div className="footer__contact__wrapper bg-dark">
                <div className="footer--contact">
                    <p className="text-white">+2348103031691</p>
                    <p className="text-white">akinsiku.o@yahoo.com</p>
                    <p className="text-white">&copy; -copyright 2020 | Femi Akinsiku :)</p>
                </div>

                <Upscroll  />    
            </div>
           
        </footer>
    )
}

export default Footer;



