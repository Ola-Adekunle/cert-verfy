import React from "react";

import UsersList from "../components/UsersList";
const Users = () => {
  const USERS = [
    {
      id: "u1",
      title: "Mr",
      name: "Chloe Martinez",
      image: `${process.env.PUBLIC_URL}/images/avatar-1.png`,
      course: 3,
      cert: 2,
      gender: "male",
      email: "chloemartinez@gmail.com"
    },
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
    {
      id: "u3",
      title: "Mr",
      name: "Liam Harrison",
      image: `${process.env.PUBLIC_URL}/images/avatar-2.jpg`,
      course: 3,
      cert: 1,
      gender: "male",
      email: "liamharrison@gmail.com"
    },
    {
      id: "u4",
      title: "Mrs",
      name: "Ethan Carteria",
      image: `${process.env.PUBLIC_URL}/images/avatar-4.jpg`,
      course: 2,
      cert: 1,
      gender: "female",
      email: "ethancarteria@gmail.com"
    },
  ];

  return (
    <React.Fragment>
      <UsersList items={USERS} /> 
    </React.Fragment>
  );
};

export default Users;
