/** @format */

import React from "react";
import { Container, Row } from "react-bootstrap";
import BrandCard from "./BrandCard";
import SubTitle from "../Uitilty/SubTitle";
import img1 from "../../images/brand1.png";
import img2 from "../../images/brand2.png";
import img3 from "../../images/brand3.png";

const BrandCardContainer = ({title,btntitle ,path}) => {
  return (
    <Container>
      <SubTitle title={title} btntitle={btntitle} path={path} />
      <Row className="my-1 d-flex justify-content-betwee">
        <BrandCard img={img1} />
        <BrandCard img={img2} />
        <BrandCard img={img3} />
        <BrandCard img={img1} />
        <BrandCard img={img2} />
        <BrandCard img={img3} />
      </Row>
    </Container>
  );
};

export default BrandCardContainer;
