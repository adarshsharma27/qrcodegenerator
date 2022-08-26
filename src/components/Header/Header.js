import React from "react";

const Header = ({ heading, description, cImage, iframeVideo }) => {
  return (
    <>
      <section>
        <div className="container h-100 w-100 mx-auto" id="home">
          <div className="row h-100 m-0 p-0 my-2 w-100  align-items-center">
            <div className="col-md-6 order-md-2 order-2 text-md-left  py-4">
              <h4 className="font-weight-bold">{heading}</h4>
              <div className="description">
                <p className="py-2">{description}</p>
              </div>
              <a href="#first-second" className="btn btn-custom w-50">
                Generate Code
              </a>
            </div>
            <div
              className="col-md-6 order-md-1 order-1 text-center  py-4"
              id="custom-bg"
            >
              {iframeVideo ? (
                <iframe
                  src="https://www.youtube.com/embed/Xe1o5JDwp2k?rel=0"
                  title="YouTube video"
                  allowfullscreen="true"
                ></iframe>
              ) : (
                <img src={cImage} className="img-fluid" alt="images" />
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
