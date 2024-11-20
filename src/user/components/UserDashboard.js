import React, { useState } from "react";

import SearchBar from "../../shared/components/UIElements/SearchBar";
import "./UserDashboard.css";
import Modal from "../../shared/components/UIElements/Modal";

const UserDashboard = (props) => {
  const [showCert, setShowCert] = useState(false);

  const openCertHandler = () => setShowCert(true);
  const closeCertHandler = () => setShowCert(false);
  return (
    <React.Fragment>
      <div className="user-dashboard">
        <img 
          src={props.image}
          alt="profile-photo"
          className="profile-pic"
        />
        <h1>
          Welcome {props.title}. {props.name}
        </h1>
        <SearchBar label={"Retrieve your certificate"} />
        <div className="option">
          Certificate not found?
          <button href="#">Request for a certificate &rarr; </button>
        </div>
        <div>
          <h2>My Certificates:</h2>
          <Modal show={showCert} onCancel={closeCertHandler}>
            <img
              src={`${process.env.PUBLIC_URL}/images/UIUX.PNG`}
              alt="UIUX"
              className="cert-image"
            />
          </Modal>
          <div className="cert-cont">
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
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default UserDashboard;
