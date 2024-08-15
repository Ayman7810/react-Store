import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

import UserEditAddress from '../../components/User/UserEditAddress'
import UserSideBar from '../../components/User/UserSideBar'
import NavBarLogin from '../../components/Uitilty/NavBarLogin'

const UserEditAddressPage = () => {
  return (
    <div>
    <NavBarLogin />
    <Container >
            <Row className='py-3'>
                <Col sm="12" xs="12" md="3">
                 <UserSideBar/>
                </Col>

                <Col sm="12" xs="12" md="9">
                <UserEditAddress/>
               
                </Col>
            </Row>
        </Container>
 </div>
  )
}

export default UserEditAddressPage
