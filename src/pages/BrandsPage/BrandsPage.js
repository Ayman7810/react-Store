import React from 'react'
import { Container, Row } from 'react-bootstrap'
import SubTitle from '../../components/Uitilty/SubTitle'
import BrandCard from '../../components/Brand/BrandCard'
import img1 from "../../images/brand1.png";
import img2 from "../../images/brand2.png";
import img3 from "../../images/brand3.png";
import Pagenation from '../../components/Uitilty/Pagenation';
import NavBarLogin from '../../components/Uitilty/NavBarLogin';
const BrandsPage = () => {
  return (
    <div>
       <NavBarLogin />
    <Container>
      <SubTitle title={'كل الماركات'} btntitle={'الرئيسية'} path={'/'} />
      <Row className="my-1 d-flex justify-content-betwee">
        <BrandCard img={img1} />
        <BrandCard img={img2} />
        <BrandCard img={img3} />
        <BrandCard img={img1} />
        <BrandCard img={img2} />
        <BrandCard img={img3} />
        <BrandCard img={img1} />
        <BrandCard img={img2} />
        <BrandCard img={img3} />
        <BrandCard img={img1} />
        <BrandCard img={img2} />
        <BrandCard img={img3} />
        <BrandCard img={img1} />
        <BrandCard img={img2} />
        <BrandCard img={img3} />
        <BrandCard img={img1} />
        <BrandCard img={img2} />
        <BrandCard img={img3} />
        <BrandCard img={img1} />
        <BrandCard img={img2} />
        <BrandCard img={img3} />
        <BrandCard img={img1} />
        <BrandCard img={img2} />
        <BrandCard img={img3} />
      </Row>
      <Pagenation/>
    </Container>

    </div>
  )
}

export default BrandsPage
