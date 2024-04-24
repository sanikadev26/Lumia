import React from "react";
import { CiBasketball } from "react-icons/ci";
import { MdBookmarkAdded } from "react-icons/md";
import { IoMdTimer } from "react-icons/io";

export default function Content() {
  return (
    <div className="my-5 section1">
      <h1 className="text-center">What We DO</h1>
      <h2></h2>
      <p className="text-center">
        Magnam dolores commodi suscipit consequatur ex aliquid
      </p>

      <div className="mx-auto px-5 d-flex justify-content-center w-100">
        <div className="text-center py-5 content mx-5" style={{ backgroundColor: "white", width:"30%" }}>
         <CiBasketball className="mx-1 p-4" style={{ fontSize: "70px", backgroundColor:"lightblue", borderRadius: "50%" }} />
         <h1>Column 1</h1>
        <p>Lorem, ipsum dolor.</p>
        </div>

        <div className="text-center py-5 content mx-5" style={{ backgroundColor: "white", width:"30%" }}>
          <MdBookmarkAdded className="mx-1 p-4" style={{ fontSize: "70px", backgroundColor:"lightblue", borderRadius: "50%" }} />
          <h1>Column 2</h1>
          <p>Lorem, ipsum dolor.</p>
        </div>

        <div className="text-center py-5 content mx-5" style={{ backgroundColor: "white", width:"30%" }}>
          <IoMdTimer className="mx-1 p-4" style={{ fontSize: "70px", backgroundColor:"lightblue", borderRadius: "50%" }} />
          <h1>Column 3</h1>
          <p>Lorem, ipsum dolor.</p>
        </div>

      </div>
    </div>
  );
}
