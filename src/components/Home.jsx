import React from "react";
import Products from "./Products";

const Home = () => {
  return (
    <div className="hero">
      <div className="card bg-dark text-white border-0">
        <img
          src="/assets/bg.jpg"
          className="card-img"
          alt="Background"
          height="100"
          style={{ objectFit: "cover" }}
        />
        <img
          src="/assets/gb.jpg"
          className="card-img"
          alt="Background"
          height="370"
          style={{ objectFit: "cover" }}
        />
        <div className="card-img-overlay d-flex ">
          <div className="container">
            <h5 className="card-title display-3 " style={{ fontWeight: 600 }}>
              SHOPPING SESSION, ARRIVALS
            </h5>
            <p
              className="card-text lead fs-2"
              style={{
                fontWeight: 700,
                color: "black",
                margin: "20px ",
              }}
            >
              CHECK OUT THE TRENDS
            </p>
          </div>
        </div>
      </div>
      <Products />
    </div>
  );
};

export default Home;
