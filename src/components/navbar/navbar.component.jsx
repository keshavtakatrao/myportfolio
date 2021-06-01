import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import logo from '../../assets/icons/ktlogo.png'
import './navbar.style.css'
const MyNavbar = () => {
    return (
        <>
            <Navbar fixed='top' collapseOnSelect expand="md" bg="primary" variant="dark" className='animate-navbar nav-theme justify-content-between' >
                <Navbar.Brand href="#home">
                    <img src={logo} height='50px' width='50px'/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" bg='dark' />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#about">About</Nav.Link>
                        <Nav.Link href='#skills'>Skills</Nav.Link>
                        <Nav.Link href='#projects'>Projects</Nav.Link>
                        <Nav.Link href='#expirience'>Expirience</Nav.Link>
                        <Nav.Link href='#contact'>Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}

export default MyNavbar
