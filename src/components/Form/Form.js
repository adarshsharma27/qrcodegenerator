import React, { useState } from "react";
import { saveAs } from "file-saver";

const Form = () => {
  const [input, setInput] = useState("");
  const [color, setColor] = useState("#0273B7");
  const [size, setSize] = useState("");
  const [qrcode, setqrcode] = useState("");
  const dataQr = {
    size: size,
    colorDark: color,
    text: input,
  };
  const handelSubmit = () => {
    if (!input) {
      alert("Please Enter qrcode");
    } else {
      const shortner = async () => {
        const Apiqrcode = `https://qrtiger.com/api/qr/static`;
        const response = await fetch(Apiqrcode, {
          method: "POST",
          headers: {
            Authorization: "Bearer 6837ab10-1faf-11ed-8931-1d032833db85",
            "Content-Type": "application/json",
          },

          body: JSON.stringify(dataQr),
        });
        const data = await response.json();
        console.log(data.url);
        setqrcode(data.url);
        setInput("");
        setSize("");
        setColor("#0273B7");
      };
      shortner();
    }
  };

  const download = () => {
    saveAs(qrcode, "QrCode.png");
    setqrcode("");
  };
  return (
    <>
      <div className="container-fluid bg-light py-4 my-4">
        <section className="container">
          <h2 className=" text-start">Generate QR codes</h2>
          <p className=" text-start py-2">Create your own QR codes online</p>
          <div className="row" id="first-second">
            <div className="col-lg-7 order-md-1 order-1 col-md-12 col-sm-12">
              <div className="form">
                <input
                  type="text"
                  className="form-control  mr-auto"
                  placeholder="Enter qrcode"
                  value={input}
                  onChange={(e) => {
                    setInput(e.target.value);
                  }}
                />
                <div class="dropdowns">
                  <select
                    id="regions"
                    className="form-control  mr-auto"
                    onChange={(e) => setSize(e.target.value)}
                  >
                    <option value="">QR Size</option>
                    <option value="100">100x100</option>
                    <option value="200">200x200</option>
                    <option value="300">300x300</option>
                    <option value="400">400x400</option>
                    <option value="500">500x500</option>
                    <option value="600">600x600</option>
                  </select>
                </div>
                <div class="input-group mb-3">
                  <span class="input-group-text">Color</span>
                  <input
                    type="color"
                    className="form-control  mr-auto"
                    title="Select color"
                    value={color}
                    onChange={(e) => {
                      setColor(e.target.value);
                    }}
                  />
                </div>
                <div className="pt-3">
                  <button
                    className="btn btn-custom"
                    onClick={() => handelSubmit()}
                  >
                    Generator QR Code
                  </button>
                </div>
              </div>
            </div>
            <div
              className="col-md-5 order-md-2 order-2 text-center"
              id="custom-bg"
            >
              <img
                src="images/qr-code.png"
                className="img-fluid w-75"
                alt="images"
              />
            </div>
          </div>
        </section>
        {qrcode?.length !== 0 ? (
          <div className="container py-4 bg-white my-2  d-flex  flex-column justify-content-between align-items-center shortedqrcode">
            <div className="qrcode-color">
              <img src={qrcode} alt="qrcode" />
            </div>
            <button className="btn btn-custom" onClick={() => download()}>
              Download
            </button>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default Form;
