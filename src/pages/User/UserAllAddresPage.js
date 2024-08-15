import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import UserSideBar from '../../components/User/UserSideBar'
import UserAllAddress from '../../components/User/UserAllAddress'
import NavBarLogin from '../../components/Uitilty/NavBarLogin'

const UserAllAddresPage = () => {
  return (
    <div>
    <NavBarLogin />
    <Container >
            <Row className='py-3'>
                <Col sm="12" xs="12" md="3">
                    <UserSideBar />
                </Col>

                <Col sm="12" xs="12" md="9">
                <UserAllAddress/>
                  {/* <UserAllAddress /> */}
                </Col>
            </Row>
        </Container>
 </div>
  )
}

export default UserAllAddresPage
