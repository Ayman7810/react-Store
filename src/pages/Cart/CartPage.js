import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import CartItem from '../../components/Cart/CartItem'
import CartCheckout from '../../components/Cart/CartCheckout'
import NavBarLogin from '../../components/Uitilty/NavBarLogin'

const CartPage = () => {
  return (
    <div>
 <NavBarLogin />
    <Container style={{ minHeight: '670px' }}>
    <Row>
        <div className='cart-title mt-4'>عربة التسوق</div>
    </Row>
    <Row className='d-flex justify-content-center'>
        <Col xs="12" md="9">
           
            <CartItem/>
            <CartItem/>
            <CartItem/>
            <CartItem/>
            <CartItem/>
        </Col>

        <Col xs="12" md="3" className=' d-flex justify-content-center'>
            <CartCheckout />
        </Col>
    </Row>
</Container>
    </div>
  )
}

export default CartPage
