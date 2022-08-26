import React from "react";

const Faqs = () => {
  return (
    <>
      <div class="container-fluid">
        <section class="container py-4" id="faq">
          <h2>Frequently Asked Questions</h2>
          <p>Faqs Realted to QR Codes</p>
          <div class="row py-3">
            <div class=" col-lg-6 col-md-6 col-sm-12 ">
              <div class="faqs">
                <h4>What is a QR code and why do I need one?</h4>
                <p>
                  A QR code stands for ‘Quick Response Code’ and is a
                  2-dimensional barcode type invented by Denso Wave in 1994. You
                  can get more information at Wikipedia. Today QR codes are used
                  a lot to give a digital dimension to a product or flyer that
                  leads to a URL.<a href="https://www.google.com/">Learn more.</a>
                </p>
              </div>
              <div class="faqs">
                <h4>Which colors should I avoid using in QR codes?</h4>
                <p>
                  Light colors, such as yellow and pastel colors are not good
                  for scanning, so, it is best to use darker colors and a white
                  background.
                  <a href="www.google.com">Learn more.</a>
                </p>
              </div>
              <div class="faqs">
                <h4>Can I make a QR code for a MP3?</h4>
                <p>
                  Yes you can make an MP3 QR code, you can upload your QR code
                  on Sound Cloud and use this URL for making your QR code
                  <a href="www.google.com">Learn more.</a>
                </p>
              </div>
            </div>
            <div class=" col-lg-6 col-md-6 col-sm-12 ">
              <div class="faqs">
                <h4>Are the created qr codes expiring?</h4>
                <p>
                  They do not expire and will work forever! QR Codes created
                  with QRCode are static and do not stop working after a certain
                  time. You just can’t edit the content of the QR Codes again.
                  <a href="https://www.google.com/">Learn more.</a>
                </p>
              </div>
              <div class="faqs">
                <h4>
                  Can I use the generated QR Codes for commercial purposes?
                </h4>
                <p>
                  Yes, all QR codes you created with this QR generator are free
                  and can be used for whatever you want.{" "}
                  <a href="https://www.google.com/">Learn more.</a>
                </p>
              </div>
              <div class="faqs">
                <h4>Is there a scan limit for the QR codes?</h4>
                <p>
                  There is no limit and the created QR code will work forever.
                  Scan it is many times as you wish!
                  <a href="https://www.google.com/">Learn more.</a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Faqs;
