import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ProducteGallery from './ProducteGallery'
import ProducteText from './ProducteText'
import RateContainer from '../Rate/RateContainer'
import ProducteCardContainer from './ProducteCardContainer'


const ProducteDetalis = () => {
  return (
   <Container>
       <Row>
        <Col sm='12' md='5' lg='4'>
        <ProducteGallery/>
   
        </Col>
        <Col className='text-md-end'  sm='12' md='7'  lg='8'>
        <ProducteText/>
        </Col>
      </Row>
    <RateContainer/>
    <ProducteCardContainer  pathCard={'/'} title={'منتجات قد تعجبك'}/>
   </Container>
  )
}

export default ProducteDetalis
