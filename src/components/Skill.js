import React from 'react';
import {Container,Row,Col,Button,ProgressBar} from 'react-bootstrap';


const Skill = ()=>{

	const header_style = {
		borderBottom:"2px solid #0099cc",
		padding:"5px 10px"
	}

	return (
			<div className="mt-2 py-5">
				<Container className="bg-light py-5 mt-3 rounded">
					<h2 className="text-info text-center mb-4"><span style={header_style}>Skill Section</span></h2>
					<hr/>
					<Row className="p-3">
						<Col>
							<h4>My Creative Skill & Experience</h4>
							<div className="py-3">
								Easily generate Lorem Ipsum placeholder text in any number of characters, words sentences or paragraphs. Learn about the origins of the passage and its ...

							</div>
							<Button variant="outline-primary">Read More</Button>
						</Col>
						<Col>
							<div className="mb-2">
								<span>Html</span>
								<ProgressBar now={85} striped variant="info" animated label={`85%`} />
							</div>
							<div className="mb-2">
								<span>Css</span>
								<ProgressBar now={50} striped variant="warning" animated label={`50%`} />
							</div>
							<div className="mb-2">
								<span>JavaScript</span>
								<ProgressBar now={65} striped variant="success" animated label={`65%`} />
							</div>
							<div className="mb-2">
								<span>Python</span>
								<ProgressBar now={70} striped variant="secondary" animated label={`70%`} />
							</div>
							<div className="mb-2">
								<span>Django</span>
								<ProgressBar now={85} striped variant="danger" animated label={`85%`} />
							</div>
							<div className="mb-2">
								<span>MySql</span>
								<ProgressBar now={45} striped variant="warning" animated label={`45%`} />
							</div>
							<div className="mb-2">
								<span>React</span>
								<ProgressBar now={30} striped variant="primary" animated label={`30%`} />
							</div>



						</Col>
					</Row>
				</Container>
			</div>
		)
}

export default Skill;