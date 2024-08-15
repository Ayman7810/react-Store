import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import AdminSideBar from '../../components/Admin/AdminSideBar'
import AdminOrderDetalis from '../../components/Admin/AdminOrderDetalis'
import NavBarLogin from '../../components/Uitilty/NavBarLogin'

const AdminOrderDetalisPage = () => {
  return (
    <div>
    <NavBarLogin />
    <Container >
    <Row className='py-3'>
        <Col sm="12" xs="12" md="3">
            <AdminSideBar />
        </Col>

        <Col sm="12" xs="12" md="9">
        <AdminOrderDetalis/>
            {/* <AdminOrderDetalis /> */}
        </Col>
    </Row>
</Container>
 </div>
  )
}

export default AdminOrderDetalisPage
