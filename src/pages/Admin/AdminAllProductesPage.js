import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import AdminSideBar from '../../components/Admin/AdminSideBar'
import AdminAllProducts from '../../components/Admin/AdminAllProducts'
import Pagenation from '../../components/Uitilty/Pagenation'
import NavBarLogin from '../../components/Uitilty/NavBarLogin'

const AdminAllProductesPage = () => {
  return (
    <div>
       <NavBarLogin />
    <Container >
    <Row className='py-3'>
        <Col sm="12" xs="12" md="3">
            <AdminSideBar />
        </Col>

        <Col sm="12" xs="12" md="9">
            <AdminAllProducts/>
            <Pagenation/>
        </Col>
    </Row>
</Container>
    </div>
  )
}

export default AdminAllProductesPage
