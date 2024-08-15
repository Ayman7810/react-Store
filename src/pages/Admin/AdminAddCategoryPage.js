import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import AdminSideBar from '../../components/Admin/AdminSideBar'
import AdminAddCategory from '../../components/Admin/AdminAddCategory'
import NavBarLogin from '../../components/Uitilty/NavBarLogin'

const AdminAddCategoryPage = () => {
  return (
    <div>
    <NavBarLogin />
    <Container >
    <Row className='py-3'>
        <Col sm="12" xs="12" md="3">
            <AdminSideBar />
        </Col>

        <Col sm="12" xs="12" md="9">
        <AdminAddCategory/>
            {/* <AdminAddCategory /> */}
        </Col>
    </Row>
</Container>
 </div>
  )
}

export default AdminAddCategoryPage
