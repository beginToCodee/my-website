import React from 'react';
import {Container,Row,Col} from 'react-bootstrap';


const Project = ()=>{
	const header_style = {
		borderBottom:"2px solid #0099cc",
		padding:"5px 10px"
	}
	const container = {
		maxHeight:"500px",
		minHeight:"400px",
		"overflowY":"scroll"
	}

	return (
			<div className="Project mt-2 p-3">
				<Container className="bg-light py-5 mt-5 rounded">
					<h2 className="text-info text-center mb-4"><span style={header_style}>Project Section</span></h2>
					<hr/>
					<Row>
						<Col lg={8} className="mx-auto project_container" style={container}>
							<div className="mb-3 p-2 border">
								<h4>Emergency Vehicle BreakDown Assisstance</h4>
								<span className="text-secondary">
									Lorem Ipsum is simply dummy text of the printing and 
									typesetting industry. Lorem Ipsum has been the industry's 
								</span>
							</div>
							<div className="mb-3 p-2 border">
								<h4>Ecommerce Mini Mart</h4>
								<span className="text-secondary">
									Lorem Ipsum is simply dummy text of the printing and 
									typesetting industry. Lorem Ipsum has been the industry's 
								</span>
							</div>
						</Col>
					</Row>
				</Container>
			</div>

		)
}

export default Project;