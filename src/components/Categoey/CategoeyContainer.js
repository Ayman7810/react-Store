import React from 'react'
import { Container, Row } from 'react-bootstrap'
import SubTitle from '../Uitilty/SubTitle'
import CategoryCard from './CategoryCard'
import img from '../../images/clothe.png'
import Pagenation from '../Uitilty/Pagenation'

const CategoeyContainer = () => {
  return (
   <Container style={{ minHeight: "650px" }}>
    <SubTitle title={'كل التصنيفات'} btntitle={'الرئيسية'} path={'/'}/>
    <Row className="my-2 d-flex justify-content-betwee">
    <CategoryCard img={img} title={'التصنيف 1'} background={'#b7ffbd'}/>
    <CategoryCard img={img} title={'التصنيف 2'} background={'#b7ffbd'}/>
    <CategoryCard img={img} title={'التصنيف 3'} background={'#b7ffbd'}/>
    <CategoryCard img={img} title={'التصنيف 4'} background={'#b7ffbd'}/>
    <CategoryCard img={img} title={'التصنيف 5'} background={'#b7ffbd'}/>
    <CategoryCard img={img} title={'التصنيف 6'} background={'#b7ffbd'}/>
    <CategoryCard img={img} title={'التصنيف 7'} background={'#b7ffbd'}/>
    <CategoryCard img={img} title={'التصنيف 8'} background={'#b7ffbd'}/>
    <CategoryCard img={img} title={'التصنيف 9'} background={'#b7ffbd'}/>
    <CategoryCard img={img} title={'التصنيف 10'} background={'#b7ffbd'}/>
    <CategoryCard img={img} title={'التصنيف 11'} background={'#b7ffbd'}/>
    <CategoryCard img={img} title={'التصنيف 12'} background={'#b7ffbd'}/>
    </Row>
    <Pagenation />
   </Container>
  )
}

export default CategoeyContainer
