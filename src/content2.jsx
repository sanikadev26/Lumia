import React from 'react'
import CountUp from 'react-countup';
import { FaSmile } from "react-icons/fa";
import { PiNotebookBold } from "react-icons/pi";
import { SlEarphonesAlt } from "react-icons/sl";
import { IoPeople } from "react-icons/io5";

export default function Content2() {
    
     return (
    <div className="container">
     <div className="row">

     <div className="col-md-3 text-center">
      <FaSmile className="mx-1 p-4" style={{ fontSize: "70px", backgroundColor:"#3498db", borderRadius: "50%", color:"#fff" }} />
        <h1>
        <CountUp start={0} enableScrollSpy end={232} duration={2.75}></CountUp>
        </h1>
        <p>Happy Clients</p>
         </div>

      
    <div className="col-md-3 text-center">
      <PiNotebookBold className="mx-1 p-4" style={{ fontSize: "70px", backgroundColor:"#3498db", borderRadius: "50%", color:"#fff"}} />
        <h1><CountUp start={0} enableScrollSpy end={521} duration={2.75}></CountUp></h1>
        <p>Projects</p>
        </div>

        <div className="col-md-3 text-center">
      <SlEarphonesAlt className="mx-1 p-4" style={{ fontSize: "70px", backgroundColor:"#3498db", borderRadius: "50%", color:"#fff" }} />
        <h1><CountUp start={0} enableScrollSpy end={1463} duration={2.75}></CountUp></h1>
        <p>Hours Of Supports</p>
        </div>

        <div className="col-md-3 text-center">
         <IoPeople className="mx-1 p-4" style={{ fontSize: "70px", backgroundColor:"#3498db", borderRadius: "50%", color:"#fff" }} />
        <h1><CountUp start={0} enableScrollSpy end={15} duration={2.75}></CountUp></h1>
        <p>Hard Workers</p>
        </div>
     </div>
    </div>
  )
}
