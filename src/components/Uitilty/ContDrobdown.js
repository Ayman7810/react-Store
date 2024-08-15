/* eslint-disable jsx-a11y/anchor-is-valid */

import React from "react";
import img from "../../images/sort.png";
import { Container } from "react-bootstrap";
const ContDrobdown = ({title}) => {
  return (
    <Container>
      <div class="dropdown d-flex justify-content-between mt-2">
        <h3>{title}</h3>
        <button
          class="btn btn-secondary dropdown-toggle p-2"
          type="button"
          id="dropdownMenuButton1"
          data-bs-toggle="dropdown"
          aria-expanded="false">
            <div className=" d-flex flex-row-reverse     align-items-center">

          <p className="me-2 mb-0">ترتيب حسب</p>
          <img src={img} alt="" style={{ width: "18px" }} />
            </div>
        </button>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <li>
            <a class="dropdown-item border-bottom" href="#">
              الاكثر مبيعاً
            </a>
          </li>
          <li>
            <a class="dropdown-item border-bottom" href="#">
             الاعلى تقييماً
            </a>
          </li>
          <li>
            <a class="dropdown-item border-bottom" href="#">
             السعر من الاعلى للاقل
            </a>
          </li>
          <li>
            <a class="dropdown-item " href="#">
             السعر من الاقل للاعلى
            </a>
          </li>
        </ul>
      </div>
    </Container>
  );
};

export default ContDrobdown;
