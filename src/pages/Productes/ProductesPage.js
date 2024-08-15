import React from 'react'
import CategoeyHeader from '../../components/Categoey/CategoeyHeader'
import ContDrobdown from '../../components/Uitilty/ContDrobdown'
import { Col, Container, Row } from 'react-bootstrap'
import SlideFilter from '../../components/Uitilty/SlideFilter'
import ProducteCardContainer from '../../components/Producte/ProducteCardContainer'
import Pagenation from '../../components/Uitilty/Pagenation'
import NavBarLogin from '../../components/Uitilty/NavBarLogin'

const ProductesPage = () => {
  return (
    <div>
       <NavBarLogin />
    <div style={{minHeight:'650px'}}>
      <CategoeyHeader/>
      <ContDrobdown title={'600 منتج متاح'}/>
      <Container>
         <Row className=''>
        <Col sm='2' xs='12' md='2'  lg='1' >
        <SlideFilter/>
        </Col>
        <Col sm='10' xs='12' md='10' lg='11' >
          <ProducteCardContainer pathCard={'/producte-detalis/:id'}/>
          <ProducteCardContainer  pathCard={'/producte-detalis/:id'}/>
        </Col>
        <Pagenation/>
      </Row>
      
      </Container>
     
    </div>
    </div>
  )
}

export default ProductesPage
