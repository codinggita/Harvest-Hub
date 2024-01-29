import React from "react";
import "../stylesheet/starting.css";
import illy from "../assets/illy.svg";
function Starting() {
  return (
    <div className="dstart">
      <div className="utext">
        <h6>Welcome to Harvest-Hub</h6>
        <h1>Leading commercial website for sale of organic product in INDIA</h1>
        <div className="boxxy">
          <img src={illy} alt="" srcset="" />
          <p>
            Providing you the best and fresh Fruits, vegetables, grains and
            dairy products.
          </p>
        </div>
      </div>
      <div className="rtext">
        {" "}
        <h4>
          Lorem ipsum dolor sit amet consecteturcommodi aliquid totam temporibus
          nisi porro! Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Dolorem praesentium numquam laborum voluptates totam quod quaerat
          voluptatibus enim nam, voluptatem quam aspernatur minus illum, facere,
          accusantium aperiam adipisci perferendis deleniti.
        </h4>{" "}
        <video width="520" height="200" controls>
          <source
            src={"https://www.youtube.com/watch?v=r6YLSACb-iQ"}
            type="video/ogg"
          />
        </video>
      </div>
    </div>
  );
}

export default Starting;
