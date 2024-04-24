import React from "react";
import { IoBagHandleOutline } from "react-icons/io5";
import { IoStatsChart } from "react-icons/io5";
import { GoSun } from "react-icons/go";
import { BsCardChecklist } from "react-icons/bs";
import { BsBinoculars } from "react-icons/bs";
import { SlCalender } from "react-icons/sl";

export default function Services() {
  return (
    <div className="mt-5" id="services">
    <br/>
    <br/>
    <br />
    <br />
   
    <div className="section1" >
    <h1 className="text-center">Services</h1>
    <h2></h2>
      <p className="text-center">
        Necessitatibus eius consequatur ex aliquid fuga eum quidem
      </p>
    </div>
      

      <div className="container-fluid  mx-1 p-5">
        <div className="row mt-5">
          <div className="col-lg-6">
            <div className="content2 d-flex">
              <IoBagHandleOutline
                className="mx-1 p-4"
                style={{ fontSize: "90px", color: "#3498db" }}
              />
              <div>
                <h6>Lorem Ipsum</h6>
                <p>
                  Voluptatum deleniti atque corrupti quos dolores et quas
                  molestias excepturi sint occaecati cupiditate non provident
                </p>
              </div>
            </div>

            <div className="content2 d-flex">
              <IoStatsChart
                className="mx-1 p-4"
                style={{ fontSize: "90px", color: "#3498db" }}
              />
              <div>
                <h6>Sed ut perspiciatis</h6>
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur
                </p>
              </div>
            </div>

            <div className="content2 d-flex">
              <GoSun
                className="mx-1 p-4"
                style={{ fontSize: "90px", color: "#3498db" }}
              />
              <div>
                <h6>Magni Dolore</h6>
                <p>
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui
                  blanditiis praesentium voluptatum deleniti atque
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
          <div className="content2 d-flex">
            <BsCardChecklist
              className="mx-1 p-4"
              style={{ fontSize: "90px", color: "#3498db" }}
            />
            <div>
              <h6>Dolor Sitema</h6>
              <p>
                Minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat tarad limino ata
              </p>
            </div>
          </div>

          <div className="content2 d-flex">
            <BsBinoculars
              className="mx-1 p-4"
              style={{ fontSize: "90px", color: "#3498db" }}
            />
            <div >
              <h6>Nemo Enim</h6>
              <p>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum
              </p>
            </div>
          </div>

          <div className="content2 d-flex">
            <SlCalender
              className="mx-1 p-4"
              style={{ fontSize: "90px", color: "#3498db" }}
            />
            <div>
              <h6>Eiusmod Tempor</h6>
              <p>
                Et harum quidem rerum facilis est et expedita distinctio. Nam
                libero tempore, cum soluta nobis est eligendi
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
