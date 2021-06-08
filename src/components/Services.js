import React from 'react';
import {Container,Col, Row} from 'react-bootstrap';


const Service = ()=>{
	const header_style = {
		borderBottom:"2px solid #0099cc",
		padding:"5px 10px"
	}

	return (
			<div className="About mt-2 p-3">
				<Container className="bg-light py-5 mt-5 rounded">
					<h2 className="text-info text-center mb-4"><span style={header_style}>Service Section</span></h2>

					<hr/>
				</Container>
			</div>
		)
}

export default Service;