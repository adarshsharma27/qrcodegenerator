import React from "react";

const Footer = () => {
  return (
    <>
      <section className=" footer-section container-fluid">
        <div className="row  py-4">
          <div className="col-lg-2 col-md-9 col-sm-12 d-flex justify-content-center align-items-center">
            <img src="images/logofot.svg" alt="logo" className="img-fluid" />
          </div>
          <div className="col-lg-2 col-md-9 col-sm-12">
            <ul>
              <li className="nav-item">Features</li>
              <li className="nav-item">Link Shortening</li>
            </ul>
          </div>
          <div className="col-lg-2 col-md-9 col-sm-12 ">
            <ul>
              <li className="nav-item">Resources</li>
              <li className="nav-item">Blog</li>
            </ul>
          </div>
          <div className="col-lg-2 col-md-9 col-sm-12 ">
            <ul>
              <li className="nav-item">Company</li>
              <li className="nav-item">About</li>
            </ul>
          </div>
          <div className="col-lg-2 col-md-9 col-sm-12 ">
            <ul className="socail-media">
              <li className="nav-item"> Careers</li>
              <li className="nav-item">Contact</li>
            </ul>
          </div>
          <div className="col-lg-2 col-md-9 col-sm-12 ">
            <ul className="socail-media">
              <li className="nav-item">Safety</li>
              <li className="nav-item">Ensures</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
