import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import UserSideBar from '../../components/User/UserSideBar'
import UserAddAddress from '../../components/User/UserAddAddress'
import NavBarLogin from '../../components/Uitilty/NavBarLogin'

const UserAddAddressPage = () => {
  return (
    <div>
    <NavBarLogin />
    <Container >
    <Row className='py-3'>
        <Col sm="12" xs="12" md="3">
            <UserSideBar />
        </Col>

        <Col sm="12" xs="12" md="9">
        <UserAddAddress/>
          {/* <UserAddAddress /> */}
        </Col>
    </Row>
</Container>
 </div>
)
}

export default UserAddAddressPage
