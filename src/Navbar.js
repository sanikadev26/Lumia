import React from "react";
import { Link } from "react-scroll";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light sticky-top bg-white">
      <div className="container-fluid">
        <a href="#" className="navbar-brand w-50">
          <h2 className="text-dark p-2 fw-bold">LUMIA</h2>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarsupportedcontent">
          <ul className="navbar-nav mr-auto mb-2 mb-lg-0 justify-content-end w-100">
            <li className="nav-item mx-3">
           
                <Link
                  className="nav-link active "
                  aria-current="page"
                  style={{ color: "black" }}
                  to="home">
               Home
                </Link>
            
            </li>
            <li className="nav-item mx-3">
             
              <Link
                  className="nav-link active cursor-pointer "
                  aria-current="page"
                  style={{ color: "black" }}
                  to="about"
                >
                  About
                </Link>
              
            </li>
            <li className="nav-item mx-3">
            <Link
                  className="nav-link active cursor-pointer "
                  aria-current="page"
                  style={{ color: "black" }}
                  to="services"
                >
                  Services
                </Link>
     
              
            </li>
            <li className="nav-item mx-3">
             
              <Link
                  className="nav-link active cursor-pointer"
                  aria-current="page"
                  style={{ color: "black" }}
                  to="portfolio"
                >
                  PortFolio
                </Link>
              
            </li>
            <li className="nav-item mx-3">
            <Link
                  className="nav-link active cursor-pointer "
                  aria-current="page"
                  style={{ color: "black" }}
                  to="testimonials"
                >
                  Testimonials
                </Link>
            </li>

            <li class="nav-item dropdown mx-3">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Drop Down
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item" href="#">
                    Drop Down 1
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Drop Down 2
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Drop Down 3
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Drop Down 4
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item mx-3">
            <Link
                  className="nav-link active cursor-pointer "
                  aria-current="page"
                  style={{ color: "black" }}
                  to="contact"
                >
                  Contact
                </Link>
            </li>
          </ul>
          <div className="container d-flex px-2">
            <FaTwitter className="mx-1" />
            <FaFacebook className="mx-1" />
            <FaInstagram className="mx-1" />
            <FaLinkedin className="mx-1" />
          </div>
        </div>
      </div>
    </nav>
  );
}
