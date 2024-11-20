import React, { useState } from "react";

import Modal from "./Modal";

import "./CertBg.css";

const CertBg = () => {
  const [showCert, setShowCert] = useState(false);

  const openCertHandler = () => setShowCert(true);
  const closeCertHandler = () => setShowCert(false);

  return (
    <React.Fragment>
      <Modal
        show={showCert}
        onCancel={closeCertHandler}
      >
          <img
            src={`${process.env.PUBLIC_URL}/images/UIUX.PNG`}
            alt="UIUX"
            className="cert-image"
          />
      </Modal>
      <div className="cert-container">
        <button className="img-box" onClick={openCertHandler}>
          <img
            src={`${process.env.PUBLIC_URL}/images/UIUX.PNG`}
            alt="UIUX"
            className="cert-image"
          />
        </button>
        <button className="img-box" onClick={openCertHandler}>
          <img
            src={`${process.env.PUBLIC_URL}/images/web-dev.PNG`}
            alt="web-dev"
            className="cert-image"
          />
        </button>
        <button className="img-box" onClick={openCertHandler}>
          <img
            src={`${process.env.PUBLIC_URL}/images/app-dev.PNG`}
            alt="app-dev"
            className="cert-image"
          />
        </button>
        <button className="img-box" onClick={openCertHandler}>
          <img
            src={`${process.env.PUBLIC_URL}/images/data-sci.PNG`}
            alt="data-sci"
            className="cert-image"
          />
        </button>
        <button className="img-box" onClick={openCertHandler}>
          <img
            src={`${process.env.PUBLIC_URL}/images/html-css.PNG`}
            alt="html-css"
            className="cert-image"
          />
        </button>
      </div>
    </React.Fragment>
  );
};

export default CertBg;
