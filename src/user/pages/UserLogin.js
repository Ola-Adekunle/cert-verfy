import React from "react";

import LoggedIn from "../components/LoggedIn";

const Users = () => {
  const USERS = [
    {
      id: "u2",
      title: "Miss",
      name: "Sofia Bennett",
      image: `${process.env.PUBLIC_URL}/images/avatar-3.jpg`,
      course: 2,
      cert: 2,
      gender: "female",
      email: "sofiabennett@gmail.com"
    },
  ];

  return (
    <React.Fragment>
      <LoggedIn items={USERS} />
    </React.Fragment>
  );
};

export default Users;
