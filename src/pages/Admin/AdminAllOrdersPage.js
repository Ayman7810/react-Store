import React from 'react'
import { Col, Container, Pagination, Row } from 'react-bootstrap'
import AdminSideBar from '../../components/Admin/AdminSideBar'
import AdminAllOrders from '../../components/Admin/AdminAllOrders'
import NavBarLogin from '../../components/Uitilty/NavBarLogin'

const AdminAllOrdersPage = () => {
  return (
    <div>
    <NavBarLogin />
    <Container >
    <Row className='py-3'>
        <Col sm="12" xs="12" md="3">
            <AdminSideBar />
        </Col>

        <Col sm="12" xs="12" md="9">
        <AdminAllOrders/>
            {/* <AdminAllOrders /> */}
            <Pagination />
        </Col>
    </Row>
</Container>
 </div>
  )
}

export default AdminAllOrdersPage
