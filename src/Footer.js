import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaSkype,
} from "react-icons/fa";

export default function Footer() {
  

  return (
    <div className="container">
      <div className=" row mt-5">
        <div className="col-lg-4">
          <h4>Lumia</h4>
          <p className="">
            A108 Adam Street New York, NY 535022 United States
          </p>

          <p>
            <strong>Phone:</strong> +1 5589 55488 55
          </p>
          <p>
            <strong>Email:</strong> info@example.com
          </p>
        </div>
        <div className="col-lg-2">
          <h4>Useful Links</h4>
          <p><span className="text-primary">></span> Home</p>
          <p> <span className="text-primary">></span>About us</p>
          <p><span className="text-primary">></span>Services</p>
          <p><span className="text-primary">></span>Terms of service</p>
          <p><span className="text-primary">></span>Privacy Policy</p>
        </div>
        <div className= "col-lg-2">
          <h4>Our Services</h4>
          <p><span className="text-primary">></span>Web Design</p>
          <p><span className="text-primary">></span>Web Development</p>
          <p><span className="text-primary">></span>Product Management</p>
          <p><span className="text-primary">></span>Marketing</p>
          <p><span className="text-primary">></span>Graphic Design</p>
        </div>
        <div className="col-lg-4">
          <h4>Join Our Newsletter</h4>
          <p>
            Tamen quem nulla quae legam multos aute sint culpa legam noster
            magna
          </p>
          <form action method="post">
            <input type="email" name="email"></input>
            <input type="submit" value="Subscribe" style={{backgroundColor:"#3498db"}}></input>
          </form>
        </div>
      </div>
      <hr />
      <div className="d-flex">
        <div className="col-lg-10">
          <p>
            © Copyright <strong>Lumia</strong>. All Rights Reserved
          </p>
          <p>Designed by BootstrapMade</p>
        </div>
        <div className="col-lg-2" >
          <FaTwitter className="mx-1 p-2" style={{backgroundColor:"#3498db", borderRadius: "50%", height:"30", width:"30", color:"#fff"}} />
          <FaFacebook className="mx-1 p-2" style={{backgroundColor:"#3498db", borderRadius: "50%", height:"30", width:"30", color:"#fff"}} />
          <FaInstagram className="mx-1 p-2" style={{backgroundColor:"#3498db", borderRadius: "50%", height:"30", width:"30", color:"#fff"}} />
          <FaSkype className="mx-1 p-2" style={{backgroundColor:"#3498db", borderRadius: "50%", height:"30", width:"30", color:"#fff"}} />
          <FaLinkedin className="mx-1 p-2" style={{backgroundColor:"#3498db", borderRadius: "50%", height:"30", width:"30", color:"#fff"}} />
        </div>
      </div>
      
    </div>
  );
}
