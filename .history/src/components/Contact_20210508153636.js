import React from 'react';
import Form from './Form';
import Footer from './Footer';
import {H } from 'react-helmet';

const Contact = () => {
    return (
		<div>
			<Helmet>
				<title>Portfolio | Akinsiku Oluwafemi</title>
			</Helmet>
			<div className="bg-root">
				<Form />
			</div>
			<div>
				<Footer />
			</div>
		</div>
	);
}

export default Contact;

