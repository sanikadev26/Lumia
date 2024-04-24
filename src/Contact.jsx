import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineAttachEmail } from "react-icons/md";
import { CiMobile2 } from "react-icons/ci";

export default function Contact() {
  return (
    <div className="" id="contact">
    <br /><br /><br /><br />
      <div className="pt-5 section1">
        <div className="text-center">
          <h1 className="mt-5">Contacts</h1>
          <h2></h2>
          <p>
            Magnam dolores commodi suscipit eius consequatur ex aliquid fuga
          </p>
        </div>
        <br />
        <div className="container bg-white">
          <div className="row p-3">
            <div className="col-lg-4 d-flex mt-3">
              <IoLocationOutline
                className="p-2 m-2 align-center text-center "
                style={{
                  height: "50px",
                  width:"50px",
                  borderRadius: "50%",
                  backgroundColor: "#9ecded",
                }}
              />

              <div className="px-2">
                <h3>Location:</h3>
                <p>A108 Adam Street New York, NY 535022</p>
              </div>
            </div>

            <div className="col-lg-4 d-flex mt-3">
              <MdOutlineAttachEmail
                className="p-2 m-2 align-center text-center "
                style={{
                  height: "50px",
                  width:"50px",
                  borderRadius: "50%",
                  backgroundColor: "#9ecded",
                }}
              />

              <div className="px-2">
                <h3>Email:</h3>
                <p>info@example.com <br />
                  contact@example.com</p>
              </div>
            </div>

            <div className="col-lg-4 d-flex mt-3">
              <CiMobile2
                className="p-2 m-2 align-center text-center "
                style={{
                  height: "50px",
                  width:"50px",
                  borderRadius: "50%",
                  backgroundColor: "#9ecded",
                }}
              />

              <div className="px-2">
                <h3>Call:</h3>
                <p>+1 5589 55488 51<br />
                +1 5589 22475 14</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="p-4">
            <form action="" method="post" role="form">
              <div className="row">
                <div className="col-md-6">
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    id="name"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    id="email"
                    placeholder="Your Email"
                    required
                  />
                </div>
              </div>
              <div className="form-group mt-3">
                <input
                  type="text"
                  name="subject"
                  className="form-control"
                  id="subject"
                  placeholder="Subject"
                  required
                />
              </div>
              <div className="form-group mt-3">
                <textarea
                  type="text-aria"
                  name="message"
                  className="form-control"
                  placeholder="Message"
                  rows={4}
                  required
                />
              </div>
              <div className="text-center my-3">
                <button
                  type="submit"
                  onSubmit={<Contact />}
                  style={{
                    background: "#3498db",
                    border: "0",
                    padding: "10px 24px",
                    color: "#fff",
                    transition: "0.4s",
                    borderRadius: "4px",
                  }}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
