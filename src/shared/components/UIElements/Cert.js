import React from "react";

import "./Cert.css";

const Cert = () => {
  return (
    <React.Fragment>
      <div className="certificate-container">
        <div className="rectangles">
          <div className="rectangle-one"></div>
          <div className="rectangle-two"></div>
        </div>
        <div className="certificate-border"></div>
        <div className="content-box"></div>
        <div className="lines">
          <div className="line line-1"></div>
          <div className="line line-2"></div>
        </div>
        <div className="certificate-content">
          <h2 className="certificate-title">
            CERTIFICATE
            <span className="certificate-subtitle">Of Completion</span>
          </h2>
          <label for="owner-name" className="presented-text">
            This is to certify that
          </label>
          <div className="recipient-name">
            <input
              name="owner"
              id="owner-name"
              type="text"
              placeholder="Ethan Carter"
              required
            />
          </div>
          <label for="certificate-course" className="certificate-description">
            has successfully completed a course on training of
            <input
              type="text"
              id="certificate-course"
              className="certificate-course"
              placeholder=" HTML & CSS"
              required
            />
            <br />
            offered by zidio internship which <br />
            started on{" "}
            <input
              type="text"
              className="date"
              id="start-date"
              placeholder="3rd October, 2024"
              required
            />{" "}
            and ended on{" "}
            <input
              type="text"
              id="end-date"
              className="date"
              placeholder="25th October, 2024"
              required
            />{" "}
          </label>

          <div className="signature-section">
            <div className="seal">
              <img
                src={`${process.env.PUBLIC_URL}/icons/seal.png`}
                alt="Seal"
              />
            </div>

            <div className="cert-id-container">
              <label for="cert-id"> Certificate Identification Number:</label>
              <br />
              <input
                type="number"
                name="cert-id"
                id="cert-id"
                className="cert-id"
              />
            </div>

            <div className="signature-block">
              <div className="signature">
                <img
                  src={`${process.env.PUBLIC_URL}/icons/signature.png`}
                  alt="Signature"
                />
              </div>
              <p className="signer-name">Pedro Fernandes</p>
              <p className="signer-title">CEO Zidio</p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Cert;
