import React from "react";
import { Carousel, Card } from "react-bootstrap";
import {
  MDBCarousel,
  MDBCarouselItem,
  MDBCol,
  MDBIcon,
  MDBContainer,
  MDBRow,
} from "mdb-react-ui-kit";

export default function Testimonials() {
  
  return (
    <div className="mt-5" id="testimonials">
      <div className="my-5">
        <div className="section1">
        <br />
    <br />
    <br />
    <br />
          <h1 className="text-center">Testimonials</h1>
          <h2></h2>
          <p className="text-center">
            Necessitatibus eius consequatur ex aliquid fuga eum quidem
          </p>
        </div>

        <MDBContainer className="py-5 my-5 bg-white ">
        <MDBCarousel showControls light>
          <MDBCarouselItem className="active">
            <MDBContainer>
              <MDBRow className="text-center">
                <MDBCol lg="4" className="mb-5 mb-md-0 bg-white">
                  <div className="d-flex justify-content-center mb-4">
                    <img
                      src="testimonials-1.jpg"
                      className="rounded shadow-1-strong"
                      width="150"
                      height="150"
                      alt=""
                    />
                  </div>
                  <h5 className="mb-3">Sara Wilsson</h5>
                  <h6 className="text-primary mb-3">Free Lancer</h6>
                  <p className="px-xl-3">
                    <MDBIcon fas icon="quote-left" className="pe-2 mx-5" />
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quod eos id officiis hic tenetur quae quaerat ad velit ab
                    hic tenetur.
                  </p>

                </MDBCol>
                <MDBCol lg="4" className="d-none d-lg-block">
                  <div className="d-flex justify-content-center mb-4">
                    <img
                      src="testimonials-2.jpg"
                      className="rounded shadow-1-strong"
                      width="150"
                      height="150"
                      alt=""
                    />
                  </div>
                  <h5 className="mb-3">Saul Goodman</h5>
                  <h6 className="text-primary mb-3">Designer</h6>
                  <p className="px-xl-3">
                    <MDBIcon fas icon="quote-left" className="pe-2" />
                    Ut enim ad minima veniam, quis nostrum exercitationem ullam
                    corporis suscipit laboriosam, nisi ut aliquid commodi.
                  </p>

                </MDBCol>
                <MDBCol lg="4" className="d-none d-lg-block">
                  <div className="d-flex justify-content-center mb-4">
                    <img
                      src="testimonials-3.jpg"
                      className="rounded shadow-1-strong"
                      width="150"
                      height="150"
                      alt=""
                    />
                  </div>
                  <h5 className="mb-3">Matt Brandon</h5>
                  <h6 className="text-primary mb-3">Store Owner</h6>
                  <p className="px-xl-3">
                    <MDBIcon fas icon="quote-left" className="pe-2" />
                    Ut enim ad minima veniam, quis nostrum exercitationem ullam
                    corporis suscipit laboriosam, nisi ut aliquid commodi.
                  </p>

                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </MDBCarouselItem>
          <MDBCarouselItem>
            <MDBContainer>
              <MDBRow className="text-center">
                <MDBCol lg="4" className="mb-5 mb-md-0">
                  <div className="d-flex justify-content-center mb-4">
                    <img
                      src="testimonials-4.jpg"
                      className="rounded shadow-1-strong"
                      width="150"
                      height="150"
                      alt=""
                    />
                  </div>
                  <h5 className="mb-3">John Larson</h5>
                  <h6 className="text-primary mb-3">CEO & Founder</h6>
                  <p className="px-xl-3">
                    <MDBIcon fas icon="quote-left" className="pe-2" />
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quod eos id officiis hic tenetur quae quaerat ad velit ab
                    hic tenetur.
                  </p>

                </MDBCol>
                <MDBCol lg="4" className="d-none d-lg-block">
                  <div className="d-flex justify-content-center mb-4">
                    <img
                      src="testimonials-5.jpg"
                      className="rounded shadow-1-strong"
                      width="150"
                      height="150"
                      alt=""
                    />
                  </div>
                  <h5 className="mb-3">Sara Wilsson</h5>
                  <h6 className="text-primary mb-3">Free Lancer</h6>
                  <p className="px-xl-3">
                    <MDBIcon fas icon="quote-left" className="pe-2" />
                    Ut enim ad minima veniam, quis nostrum exercitationem ullam
                    corporis suscipit laboriosam, nisi ut aliquid commodi.
                  </p>

                </MDBCol>
                <MDBCol lg="4" className="d-none d-lg-block">
                  <div className="d-flex justify-content-center mb-4">
                    <img
                      src="testimonials-1.jpg"
                      className="rounded shadow-1-strong"
                      width="150"
                      height="150"
                      alt=""
                    />
                  </div>
                  <h5 className="mb-3">Saul Goodman</h5>
                  <h6 className="text-primary mb-3">Designer</h6>
                  <p className="px-xl-3">
                    <MDBIcon fas icon="quote-left" className="pe-2" />
                    At vero eos et accusamus et iusto odio dignissimos ducimus
                    qui blanditiis praesentium voluptatum deleniti atque
                    corrupti.
                  </p>

                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </MDBCarouselItem>
          <MDBCarouselItem>
            <MDBContainer>
              <MDBRow className="text-center">
                <MDBCol lg="4" className="mb-5 mb-md-0">
                  <div className="d-flex justify-content-center mb-4">
                    <img
                      src="testimonials-2.jpg"
                      className="rounded shadow-1-strong"
                      width="150"
                      height="150"
                      alt=""
                    />
                  </div>
                  <h5 className="mb-3">Matt Brandon</h5>
                  <h6 className="text-primary mb-3">Store Owner</h6>
                  <p className="px-xl-3">
                    <MDBIcon fas icon="quote-left" className="pe-2" />
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quod eos id officiis hic tenetur quae quaerat ad velit ab
                    hic tenetur.
                  </p>

                </MDBCol>
                <MDBCol lg="4" className="d-none d-lg-block">
                  <div className="d-flex justify-content-center mb-4">
                    <img
                      src="testimonials-3.jpg"
                      className="rounded shadow-1-strong"
                      width="150"
                      height="150"
                      alt=""
                    />
                  </div>
                  <h5 className="mb-3">Jena karlis</h5>
                  <h6 className="text-primary mb-3">CEO & Founder</h6>
                  <p className="px-xl-3">
                    <MDBIcon fas icon="quote-left" className="pe-2" />
                    Ut enim ad minima veniam, quis nostrum exercitationem ullam
                    corporis suscipit laboriosam, nisi ut aliquid commodi.
                  </p>

                </MDBCol>
                <MDBCol lg="4" className="d-none d-lg-block">
                  <div className="d-flex justify-content-center mb-4">
                    <img
                      src="testimonials-4.jpg"
                      className="rounded shadow-1-strong"
                      width="150"
                      height="150"
                      alt=""
                    />
                  </div>
                  <h5 className="mb-3">John Larson</h5>
                  <h6 className="text-primary mb-3">Freelancer</h6>
                  <p className="px-xl-3">
                    <MDBIcon fas icon="quote-left" className="pe-2" />
                    At vero eos et accusamus et iusto odio dignissimos ducimus
                    qui blanditiis praesentium voluptatum deleniti atque
                    corrupti.
                  </p>

                </MDBCol>
              </MDBRow>
            </MDBContainer>

          </MDBCarouselItem>

        </MDBCarousel>

      </MDBContainer>
      </div>
    </div>
  );
}
