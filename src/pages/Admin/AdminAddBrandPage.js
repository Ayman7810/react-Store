import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import AdminSideBar from '../../components/Admin/AdminSideBar'
import AdminAddBrand from '../../components/Admin/AdminAddBrand'
import NavBarLogin from '../../components/Uitilty/NavBarLogin'

const AdminAddBrandPage = () => {
  return (
    <div>
    <NavBarLogin />
    <Container >
    <Row className='py-3'>
        <Col sm="12" xs="12" md="3">
            <AdminSideBar />
        </Col>

        <Col sm="12" xs="12" md="9">
        <AdminAddBrand/>
        </Col>
    </Row>
</Container>
 </div>
  )
}

export default AdminAddBrandPage
