/** @format */

import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import NavBarLogin from "../../components/Uitilty/NavBarLogin";

const LoginPage = () => {
  return (
    <div>
      <NavBarLogin />
      <Container style={{ minHeight: "650px" }}>
        <Row className="py-5 d-flex justify-content-center ">
          <Col sm="6" className="d-flex flex-column ">
            <label className="mx-auto title-login">تسجيل الدخول</label>
            <input
              placeholder="الايميل..."
              type="text"
              className="user-input my-3 text-center mx-auto"
            />
            <input
              placeholder="كلمه السر..."
              type="password"
              className="user-input text-center mx-auto"
            />
            <button className="btn-login mx-auto mt-4">تسجيل الدخول</button>
            <label className="mx-auto my-4">
              ليس لديك حساب ؟{" "}
              <Link to="/regester" style={{ textDecoration: "none" }}>
                <span style={{ cursor: "pointer" }} className="text-danger">
                  اضغط هنا
                </span>
              </Link>
            </label>
          </Col>

          <label className="mx-auto my-4">
            <Link to="/Admin/all-productes" style={{ textDecoration: "none" }}>
              <span style={{ cursor: "pointer" }} className="text-danger ">
                الدخول admin
              </span>
            </Link>

            <Link to="/User/all-orders" style={{ textDecoration: "none" }}>
              <span style={{ cursor: "pointer" }} className="text-danger mx-3">
                الدخول مستخدم
              </span>
            </Link>
          </label>
        </Row>
      </Container>
    </div>
  );
};

export default LoginPage;
