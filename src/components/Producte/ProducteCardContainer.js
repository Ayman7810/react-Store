/** @format */

import React from "react";
import { Container, Row } from "react-bootstrap";
import SubTitle from "../Uitilty/SubTitle";
import ProducteCard from "./ProducteCard";
import { parsePath } from "react-router";

const ProducteCardContainer = ({title ,btntitle ,path,pathCard}) => {
  return (
    <Container>
      <SubTitle title={title} btntitle={btntitle} path={path} />
      <Row className="my-2 d-flex justify-content-betwee">
        <ProducteCard pathCard={pathCard}/>
        <ProducteCard pathCard={pathCard}/>
        <ProducteCard pathCard={pathCard}/>
        <ProducteCard pathCard={pathCard}/>
      </Row>
    </Container>
  );
};

export default ProducteCardContainer;
