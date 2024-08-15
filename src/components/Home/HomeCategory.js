import React from 'react'
import { Container, Row } from 'react-bootstrap'
import SubTitle from '../Uitilty/SubTitle'
import CategoryCard from '../Categoey/CategoryCard'
import img1 from '../../images/labtop.png'

const HomeCategory = () => {
  return (
    <Container className='mb-4'  >
        <SubTitle title="التصنيفات"  btntitle='المزيد' path={'/category-page'}/>
        <Row className='my-2 d-flex justify-content-betwee'>
        <CategoryCard background={'#78cac6c4'} img ={img1} title={'التصنيفات'}/>
        <CategoryCard background={'#78cac6c4'} img ={img1} title={'التصنيفات'}/>
        <CategoryCard background={'#78cac6c4'} img ={img1} title={'التصنيفات'}/>
        <CategoryCard background={'#78cac6c4'} img ={img1} title={'التصنيفات'}/>
        <CategoryCard background={'#78cac6c4'} img ={img1} title={'التصنيفات'}/>
        <CategoryCard background={'#78cac6c4'} img ={img1} title={'التصنيفات'}/>
        </Row>
    </Container>
  )
}

export default HomeCategory
