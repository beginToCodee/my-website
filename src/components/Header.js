import React from 'react';
import {Navbar,Nav,Container,NavItem} from 'react-bootstrap';
import '../App.css';
import {NavLink} from 'react-router-dom';


const Header = ()=>{

	return(
		<>
			<Navbar bg="white" className="bg-white p-3 border-bottom Header" expand="lg">
			<Container>
			  <Navbar.Brand className="text-info">My-Portfolio</Navbar.Brand>
			  <Navbar.Toggle aria-controls="basic-navbar-nav" />
			  
			  	<Navbar.Collapse id="basic-navbar-nav">
			    	<Nav className="ml-auto">
			    		<NavItem>
			    			<NavLink exact to="/my-website" className="nav_link" activeClassName="selected">Home</NavLink>
			    		</NavItem>
			    		<NavItem>
			    			<NavLink to="/about" className="nav_link" activeClassName="selected">About</NavLink>
			    		</NavItem>
			    		<NavItem>
			    			<NavLink exact to="/service" className="nav_link" activeClassName="selected">Services</NavLink>
			    		</NavItem>
			    		<NavItem>
			    			<NavLink to="/contact" className="nav_link" activeClassName="selected">Contact</NavLink>
			    		</NavItem>
			    		<NavItem>
			    			<NavLink exact to="/skill" className="nav_link" activeClassName="selected">Skills</NavLink>
			    		</NavItem>
			    		<NavItem>
			    			<NavLink to="/project" className="nav_link" activeClassName="selected">Projects</NavLink>
			    		</NavItem>
			  

			    	</Nav>
			  	</Navbar.Collapse>
			</Container>
			</Navbar>
		</>
		)
}

export default Header;
