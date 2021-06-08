import React,{useEffect} from 'react';
import {Row,Col,Container,Button} from 'react-bootstrap';
import '../App.css';
import {NavLink} from 'react-router-dom';




const Home = ()=>{
	useEffect(()=>{
		console.log("home");
	},[]);
	return(
		<div className="Home">

			<Container>
				<Row>
					<Col lg={6} className="left-sided">
						<div className="home-content">
							<div className="text-1">Hello, My name is</div>
							<div className="text-2">Sirjan Tamang</div>
							<div className="text-3">
								And I'm a <span>Web Developer</span>
							</div>
							<NavLink to="/contact" className="btn btn-outline-info">Hire Me</NavLink>
						</div>
					</Col>
					<Col lg={6} className="right-sided">
						<div className="img_container shadow-lg p-3 mb-5 bg-body rounded-circle">
							
						</div>
						
					</Col>
				</Row>
			</Container>
		</div>
		)

}
export default Home;