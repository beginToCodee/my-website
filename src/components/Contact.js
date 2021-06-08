import React from 'react';
import {Container,Row,Col,Form,Button} from 'react-bootstrap';


const Contact = ()=>{

	const header_style = {
		borderBottom:"2px solid #0099cc",
		padding:"5px 10px"
	}

	return (
			<div className="Contact mt-2 py-3">
				<Container className="bg-light py-5 mt-5 rounded">
					<h2 className="text-info text-center mb-4"><span style={header_style}>Contact Section</span></h2>
					<hr/>

					<Row>
						<Col>
							<Row className="p-4">
								<Col>
									<h4>Full Name :</h4>
									<h4>Full Address :</h4>
									<h4>Email :</h4>
								</Col>
								<Col>
									<p>Sirjan Tamang  </p>
									<p>Dharan Sunsari</p>
									<p>sirjantmg99@gmail.com</p>
								</Col>
							</Row>
						</Col>
						<Col >
							<h5 className="mb-3">Contact Me</h5>
							<Form>
							<Form.Group controlId="formBasicName">
						
							    <Form.Control type="email" placeholder="Enter your full name" />
							    <Form.Text className="text-danger">
							      this field is necessary !!
							    </Form.Text>
							  </Form.Group>

							  <Form.Group controlId="formBasicEmail">
							    <Form.Control type="email" placeholder="Enter email" />
							    <Form.Text className="text-danger">
							      this field is necessary !!
							    </Form.Text>
							</Form.Group>

							  <Form.Group controlId="formBasicSubject">
							
							    <Form.Control type="email" placeholder="Enter subject" />
							    <Form.Text className="text-danger">
							      this field is necessary !!
							    </Form.Text>
							  </Form.Group>
							  <Form.Group controlId="exampleForm.ControlTextarea1">
							    <Form.Label>Message</Form.Label>
							    <Form.Control as="textarea" rows={3} />
							    <Form.Text className="text-danger">
							      this field is necessary !!
							    </Form.Text>
							  </Form.Group>
							 
							  <Button variant="primary" type="submit">
							    Submit
							  </Button>
							</Form>
						</Col>
					</Row>
			
				</Container>
			</div>

		)
}

export default Contact;