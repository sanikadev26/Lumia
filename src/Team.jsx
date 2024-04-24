import React from "react";
import { Card } from "react-bootstrap";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Team() {
  return (
    <>
      <div className="section1">
        <h1 className="text-center">Team</h1>
        <h2></h2>
        <p className="text-center">
          Sit sint consectetur velit quos quisquam cupiditate nemo qui
        </p>
      </div>
      <div className="container d-flex">
        <div className="row">
          <div className="col-md-4">
            <Card>
              <Card.Body>
                <div style={{ textAlign: "center" }}>
                  <img
                    src="team-1.jpg"
                    alt="Image"
                    style={{
                      borderRadius: "50%",
                      width: "200px",
                      height: "230px",
                    }}
                  />
                </div>
                <div className="text-center">
                  <Card.Title>Walter White</Card.Title>
                  <p style={{ fontStyle: "oblique" }}>
                    Chief Executive Officer
                  </p>
                  <Card.Text>
                    Magni qui quod omnis unde et eos fuga et exercitationem.
                    Odio veritatis perspiciatis quaerat
                  </Card.Text>

                  <FaTwitter className="mx-1" />
                  <FaFacebook className="mx-1" />
                  <FaInstagram className="mx-1" />
                  <FaLinkedin className="mx-1" />
                </div>
              </Card.Body>
            </Card>
          </div>

          <div className="col-md-4">
            <Card>
              <Card.Body>
                <div style={{ textAlign: "center" }}>
                  <img
                    src="team-2.jpg"
                    alt="Image"
                    style={{
                      borderRadius: "50%",
                      width: "200px",
                      height: "230px",
                    }}
                  />
                </div>
                <div className="text-center">
                  <Card.Title>Sarah Jhinson</Card.Title>
                  <p style={{ fontStyle: "oblique" }}>Product Manager</p>
                  <Card.Text>
                    Repellat fugiat adipisci nemo illum nesciunt voluptas
                    repellendus. In architecto rerum rerum temporibus
                  </Card.Text>

                  <FaTwitter className="mx-1" />
                  <FaFacebook className="mx-1" />
                  <FaInstagram className="mx-1" />
                  <FaLinkedin className="mx-1" />
                </div>
              </Card.Body>
            </Card>
          </div>

          <div className="col-md-4">
            <Card>
              <Card.Body>
                <div style={{ textAlign: "center" }}>
                  <img
                    src="team-3.jpg"
                    alt="Image"
                    style={{
                      borderRadius: "50%",
                      width: "200px",
                      height: "230px",
                    }}
                  />
                </div>
                <div className="text-center">
                  <Card.Title>William Anderson</Card.Title>
                  <p style={{ fontStyle: "oblique" }}>CTO</p>
                  <Card.Text>
                    Voluptas necessitatibus occaecati quia. Earum totam
                    consequuntur qui porro et laborum toro des clara
                  </Card.Text>

                  <FaTwitter className="mx-1" />
                  <FaFacebook className="mx-1" />
                  <FaInstagram className="mx-1" />
                  <FaLinkedin className="mx-1" />
                </div>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}
