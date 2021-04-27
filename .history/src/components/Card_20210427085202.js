import React from 'react';
import { Spring } from 'react-spring/renderprops';



const Card = ({ image, header, description, about, link, furrowwebpage }) =>{
    

    return (
		<Spring from={{ opacity: 0 }} to={{ opacity: 1 }} config={{ delay: 500, duration: 1000 }}>
			{(props) => (
				<div className="wrapper mb-4 " style={props}>
					<a href={link} target="_blank" rel="noopener noreferrer">
						<img className=" img-fluid wrapper__image" src={image} alt={''} />
					</a>
					<div className="wrapper__text ">
						<p className="tools__name h5 pt-2 font-weight-bold ">{header}</p>
						<p className="text-success font-weight-normal">{description}</p>
						<p className="tools__name">{about}</p>
						{furrowwebpage && <p className="tools__name">{furrowwebpage}</p>}
					</div>
				</div>
			)}
		</Spring>
	);
}

export default Card;