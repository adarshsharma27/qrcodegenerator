import React from "react";
import data from "./data";
const Intro = () => {
  return (
    <>
      <section class="container pt-4" id="service-2">
        <h2 class=" text-start">High Quality QR Codes</h2>
        <p class=" text-start py-2">
          The Free QR Code Generator for High Quality QR Codes
        </p>
        <div class="row">
          {data.map((element) => {
            return (
              <div class=" col-lg-4 col-md-6 col-sm-12 " key={element.id}>
                <div class="card-service">
                  <div class="icon">
                    {" "}
                    <img
                      class=" inverted"
                      src={element.image}
                      alt={element.heading}
                    />
                  </div>
                  <main>
                    <h2>{element.heading}</h2>
                    <p>{element.description}</p>
                  </main>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Intro;
