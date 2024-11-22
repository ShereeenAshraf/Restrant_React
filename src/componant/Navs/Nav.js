import React  from 'react';
import './Navs.css'
import {Navbar , Nav , Container, NavbarBrand, NavbarToggle, NavbarCollapse, NavLink } from 'react-bootstrap'
import logo from './../../assets/logo (1).png'

const Navs = () =>{
    return(
        <Navbar  expand = 'lg'>
            <Container>
                <Navbar.Brand href='#home'>
                    <img src={logo} title='logo'/>
                </Navbar.Brand>
                <NavbarToggle aria-controls='basic-navbar-nav'/>
                <Navbar.Collapse id='basic-navbar-nav'>
                <Nav className='ml-auto'>
                <Nav.Link href='#home'>Home</Nav.Link>
                <Nav.Link href='#home'>about us</Nav.Link>
                <Nav.Link href='#home'>explore food</Nav.Link>
                <Nav.Link href='#home'>Review</Nav.Link>
                <Nav.Link href='#home'>faq</Nav.Link>
                </Nav>
                <Nav>
                <Nav.Link id='lastnav' href='#home'>01006751795</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>

        </Navbar>
    )
}

export default Navs;
