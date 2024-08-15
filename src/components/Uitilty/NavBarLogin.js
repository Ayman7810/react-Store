import React from 'react'
import { Container, FormControl, Nav, Navbar } from 'react-bootstrap'
import logo from '../../images/logo.png'
import icon_login from '../../images/login.png'
import icon_cart from '../../images/cart.png'
import { Link } from 'react-router-dom'

const NavBarLogin = () => {
  return (
    <Navbar className="sticky-top" bg="dark" variant="dark" expand="sm">
    <Container>
        <Navbar.Brand>
           <Link to='/'>
                <img src={logo} className='logo'  alt='متجري'/>
           </Link>
           
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <FormControl
                type="search"
                placeholder="ابحث..."
                className="searchInput me-2 w-100 text-center"
                aria-label="Search"
            />
            <Nav className="me-auto">
                <Nav.Link 
                    className="nav-text d-flex mt-3 justify-content-center">
                        <Link to='/login' className='d-flex' style={{textDecoration:'none'}}>
                        
                    <img src={icon_login} className="login-img ms-1" alt="sfvs" />
                  
                    <p style={{ color: "white" }}>دخول</p>
                        </Link>
                </Nav.Link>
                <Nav.Link 
                    className="nav-text d-flex mt-3 justify-content-center"
                    style={{ color: "white" }}>
                         <Link to='/cart-page' className='d-flex' style={{textDecoration:'none'}}>
                         
                    <img src={icon_cart} className="login-img ms-1" alt="sfvs" />
                    <p style={{ color: "white" }}>العربه</p>
                         </Link>
                </Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Container>
</Navbar>
  )
}

export default NavBarLogin
