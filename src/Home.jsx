import React from "react";
import img1 from "./Image/images.jpg";

export default function Home() {
  return (
    <div id="home">
      <img
        src={img1}
        alt="image"
        className="brightness"
        style={{ height: "500px", width: "100%" }}
      />
      <div className="text-overlay text-white text-center">
        <h1>
          Welcome To <span className="">LUMIA</span>
          <div className="hrline"></div>
        </h1>

        <p>We are team of talented designers making websites with bootstrap </p>
        <button
          className=""
          style={{
            background: "#3498db",
            border: "0",
            padding: "10px 24px",
            color: "#fff",
            transition: "0.4s",
            borderRadius: "4px",
            textAlign: "center",
          }}
        >
          Get Started
        </button>
      </div>
    </div>
  );
}
