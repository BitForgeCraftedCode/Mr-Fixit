import * as React from 'react'
import { Link } from 'gatsby'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import 'bootstrap/dist/css/bootstrap.min.css' //Bootstrap  v5.2.3 (https://getbootstrap.com/)

import { footer } from "./layout.module.css"

const Layout = ({children}) => {
	return (
		<Container fluid className="p-0">
			<Navbar bg="light" expand="lg" sticky="top">
	      <Container>
	        <Navbar.Brand as={Link} to="/">Home</Navbar.Brand>
	        <Navbar.Toggle aria-controls="basic-navbar-nav" />
	        <Navbar.Collapse id="basic-navbar-nav">
	          <Nav className="me-auto">
	          	<NavDropdown title="Services" id="basic-nav-dropdown">
	              <NavDropdown.Item as={Link} to="/">Handyman</NavDropdown.Item>
	              <NavDropdown.Item as={Link} to="/">Kitchen & Bath</NavDropdown.Item>
	              <NavDropdown.Item as={Link} to="/">Tile</NavDropdown.Item>
	              <NavDropdown.Item as={Link} to="/">Painting</NavDropdown.Item>
	              <NavDropdown.Item as={Link} to="/">Carpentry</NavDropdown.Item>
	            </NavDropdown>
	            <Nav.Link as={Link} to="/">Gallery</Nav.Link>
	            <Nav.Link as={Link} to="/about">About Me</Nav.Link>
	            <Nav.Link as={Link} to="/contact">Contact Me</Nav.Link>
	          </Nav>
	        </Navbar.Collapse>
	      </Container>
		  </Navbar>
			{children}
			<footer className={footer+" fixed-bottom"}>
				<Container fluid>
					<Row>
						<Col className="mb-3 mt-3">
								Contact me for a free estimate<br/>
								<a href="tel:+###########">&#9743; #-###-###-####</a><br/>
								<a href="mailto:youremail@mail.com">Email: youremail@mail.com</a>
						</Col>
		        		<Col className="mb-3 mt-3">
		        			SITE UNDER CONSTRUCTION -- MORE DETAILS COMING SOON
		        		</Col>
					</Row>
				</Container>
			</footer>
		</Container>
	)
}

export default Layout