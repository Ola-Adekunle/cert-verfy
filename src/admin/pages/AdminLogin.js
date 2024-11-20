import React from "react";

import AdminLoggedIn from "../components/AdminLoggedIn";

const Users = () => {
  const USERS = [
    {
      id: "u3",
      title: "Mr",
      name: "Liam Harrison",
      image: `${process.env.PUBLIC_URL}/images/avatar-2.jpg`,
      course: 3,
      cert: 1,
      gender: "male",
      email: "liamharrison@gmail.com",
    },
  ];

  return (
    <React.Fragment>
      <AdminLoggedIn items={USERS} />
    </React.Fragment>
  );
};

export default Users;
