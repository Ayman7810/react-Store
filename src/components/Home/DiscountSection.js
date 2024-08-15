import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import img from '../../images/labtop.png'

const DiscountSection = () => {
  return (
    <Container>
    <Row className="discount-backcolor my-3  mx-0 d-flex text-center align-items-center">
        <Col sm="6">
            <div className="discount-title">
                خصم يصل حتي ٣٠٪ علي اجهازه اللاب توب
            </div>
        </Col>
        <Col sm="6">
            <img className="dicount-img" src={img} alt="" />
        </Col>
    </Row>
</Container>
  )
}

export default DiscountSection
