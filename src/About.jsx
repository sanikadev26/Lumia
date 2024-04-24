import React from "react";
import img2 from "./Image/about.jpg";
import { GoCheck } from "react-icons/go";
import { RiPagesLine } from "react-icons/ri";
import { IoCubeOutline } from "react-icons/io5";

export default function () {
  return (
    <div  className="mt-5" id='about'>
     
    <br />
    <br />
    <br />
    <br />
      <div className="row justify-content-center">
        <div className="col-lg-5">
          <img src={img2} alt="aboutt" className="img-fluid" />
        </div>
        <div className="col-lg-5">
          <h1>About Us</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="d-flex">
            <GoCheck />
            <p>Ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
          <div className="d-flex">
            <GoCheck />
            <p>Duis aute irure dolor in reprehenderit in voluptate velit.</p>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <RiPagesLine
                className="mx-1 p-4"
                style={{ fontSize: "100px", color: "#3498db" }}
              />
              <h5>Corporis voluptates sit</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dignissimos, accusamus.
              </p>
            </div>
            <div className="col-lg-6">
              <IoCubeOutline
                className="mx-1 p-4"
                style={{ fontSize: "100px", color: "#3498db" }}
              />
              <h5>Ullamco laboris nisi</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dignissimos, accusamus.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="container-fluid  mx-1 p-4 ">
              <div className="" style={{float:"left"}}>
              <h6>HTML</h6>
              </div>
              <div>
              <p className="col text-end" >100%</p>
              </div>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow="70"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ width: "100%" }}
                ></div>
              </div>
            </div>
            <div className="container-fluid  mx-1 p-4">
            <div className="" style={{float:"left"}}>
              <h6>CSS</h6>
              </div>
              
              <p className="col text-end">90%</p>
              
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow="70"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ width: "90%" }}
                ></div>
              </div>
            </div>
            <div className="container-fluid  mx-1 p-4">
            <div className="" style={{float:"left"}}>
            <h6>JavaScript</h6>
            </div>
              <p className="col text-end">75%</p>
             
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow="70"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ width: "75%" }}
                ></div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="container-fluid  mx-1 p-4 ">
           <div className="" style={{float:"left"}}>
              <h6>PHP</h6>
              </div>
              <p className="col text-end">80%</p>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow="70"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ width: "80%" }}
                ></div>
              </div>
            </div>
            <div className="container-fluid  mx-1 p-4">
            <div className="" style={{float:"left"}}>
              <h6>WORDPRESS/CMS</h6>
              </div>
              <p className="col text-end">90%</p>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow="70"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ width: "90%" }}
                ></div>
              </div>
            </div>
            <div className="container-fluid  mx-1 p-4">
            <div className="" style={{float:"left"}}>
              <h6>PHOTOSHOP</h6>
              </div>
              <p className="col text-end">55%</p>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow="70"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ width: "55%" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
