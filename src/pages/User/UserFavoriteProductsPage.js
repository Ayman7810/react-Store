import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import UserSideBar from '../../components/User/UserSideBar'
import UserFavoriteProduct from '../../components/User/UserFavoriteProduct'
import NavBarLogin from '../../components/Uitilty/NavBarLogin'
// import UserFavoriteProducts from '../../components/User/UserFavoriteProducts'

const UserFavoriteProductsPage = () => {
  return (
    <div>
    <NavBarLogin />
    <Container >
    <Row className='py-3'>
        <Col sm="12" xs="12" md="3">
            <UserSideBar />
        </Col>

        <Col sm="12" xs="12" md="9">
            <UserFavoriteProduct/>
        </Col>
    </Row>
</Container>
 </div>
  )
}

export default UserFavoriteProductsPage
