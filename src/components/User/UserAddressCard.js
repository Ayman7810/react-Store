/** @format */

import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import deleteicon from "../../images/delete.png";
const UserAddressCard = () => {
  return (
    <div className="user-address-card my-3 px-2">
      <Row className="d-flex justify-content-between  ">
        <Col xs="1">
          <div className="p-2">المنزل</div>
        </Col>
        <Col xs="4" className="d-flex d-flex justify-content-end">
          <div className="d-flex p-2">
            <div className="d-flex mx-2">
              <img
                alt=""
                className="ms-1 mt-2"
                src={deleteicon}
                height="17px"
                width="15px"
              />
              <Link to="/User/edit-address" style={{ textDecoration: "none" }}>
                <p className="item-delete-edit"> تعديل</p>
              </Link>
            </div>
            <div className="d-flex ">
              <img
                alt=""
                className="ms-1 mt-2"
                src={deleteicon}
                height="17px"
                width="15px"
              />
              <p className="item-delete-edit"> ازاله</p>
            </div>
          </div>
        </Col>
      </Row>

      <Row>
        <Col xs="12 text-end">
          <div
            style={{
              color: "#555550",

              fontSize: "14px",
            }}>
            صنعاء - شارع هايل - امام التوفير هايبر
          </div>
        </Col>
      </Row>

      <Row className="mt-3">
        <Col xs="12" className="d-flex">
          <div
            style={{
              color: "#555550",

              fontSize: "16px",
            }}>
            رقم الهاتف:
          </div>

          <div
            style={{
              color: "#979797",

              fontSize: "16px",
            }}
            className="mx-2">
            777 777 777
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default UserAddressCard;
