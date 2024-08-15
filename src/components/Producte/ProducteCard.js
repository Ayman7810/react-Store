/** @format */

import React from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import fav from "../../images/fav-off.png";
import star from "../../images/rate.png";
import img1 from "../../images/prod1.png";

const ProducteCard = ({pathCard}) => {
  return (
    <Col xs="12" sm="6" md="4" lg="3" className="d-flex">
      <Card
        className="my-2"
        style={{
          width: "100%",
          borderRadius: "8px",
          border: "none",
          backgroundColor: "#FFFFFF",
          boxShadow: "0 2px 2px 0 rgba(151,151,151,0.5)",
        }}>
        <Link to={`${pathCard}`} style={{ textDecoration: "none" }}>
          {" "}
          <Card.Img style={{ height: "228px", width: "100%" }} src={img1} />
          <div className="d-flex justify-content-end mx-2">
            <img
              src={fav}
              alt=""
              className="text-center"
              style={{
                height: "24px",
                width: "26px",
              }}
            />
          </div>{" "}
        </Link>
        <Card.Body>
          <Card.Title>
            <div className="card-title">
              سود كربون ساعة يد ذكية بيب إس أسود كربون{" "}
            </div>
          </Card.Title>
          <Card.Text>
            <div className="d-flex justify-content-between ">
              <div className="d-flex">
                <img
                  className=""
                  src={star}
                  alt=""
                  height="16px"
                  width="16px"
                />
                <div className="card-rate mx-2">4.5</div>
              </div>
              <div className="d-flex">
                <div className="card-price">880</div>
                <div className="card-currency mx-1">ريال</div>
              </div>
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ProducteCard;
