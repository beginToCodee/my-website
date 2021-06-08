import React from 'react';
import {Container,Row,Col} from 'react-bootstrap';


const About = ()=>{
	const header_style = {
		borderBottom:"2px solid #0099cc",
		padding:"5px 10px"
	}
	const image_style = {
		height:"350px",
		width:"280px",
		borderRadius:"20px"
	}
	return (
			<div className="Contact mt-2 p-3">
				<Container className="bg-light py-5 mt-5 rounded">
					<h2 className="text-info text-center mb-4"><span style={header_style}>About Section</span></h2>
					<hr/>
					<Row>
						<Col className="justify-content-center d-flex">
							<img src="sirjan.jpg" className="img-fluid" alt="sirjan" style={image_style} />
						</Col>
						<Col className="p-5">
							<h4>I'm Sirjan Tamang & I'm WebDeveloper</h4>
							<div>
								Lorem Ipsum is simply dummy text of the printing and 
								typesetting industry. Lorem Ipsum has been the industry's 
								standard dummy text ever since the 1500s, when an unknown
								printer took a galley of type and scrambled it to make
								a type specimen book. It has survived not only five 
								centuries, but also the leap into electronic typesetting, 
								remaining essentially unchanged. It was popularised in the
								1960s with the release of Letraset sheets containing Lorem
								Ipsum passages, and more recently with desktop publishing
								software like Aldus PageMaker including versions of Lorem Ipsum.
							</div>
						</Col>
					</Row>
				</Container>
			</div>
		)
}

export default About;