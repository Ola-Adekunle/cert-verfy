import React from "react";

import SearchBar from "../components/UIElements/SearchBar";
import CertBg from "../components/UIElements/CertBg";
import Users from "../../user/pages/Users";

const Home = () => {
  return (
    <React.Fragment>
      <SearchBar label={"verify a certificate"}/> <CertBg /> <Users />
    </React.Fragment>
  );
};

export default Home;
