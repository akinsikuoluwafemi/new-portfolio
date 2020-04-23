import React from 'react';
import { Spring } from 'react-spring/renderprops';



const Card = ({ image, header, description, about, link }) =>{
    

    return (

        <Spring
            from={{ opacity: 0 }}
            to={{ opacity: 1 }}
            config={{ delay: 500, duration: 1000 }}

        >
            {props => (

                <div className="wrapper mb-4 " style={props}>
                    <a href={link} target="_blank">

                        <img className=" img-fluid wrapper__image" src={image} />


                    </a>
                    <div className="wrapper__text ">
                        <p className="tools__name h5 pt-2 font-weight-bold ">{header}</p>
                        <p className="text-success font-weight-normal">{description}</p>
                        <p className="tools__name">{about}</p>
                    </div>
                </div>
            )}


        </Spring>


    )
}

export default Card;