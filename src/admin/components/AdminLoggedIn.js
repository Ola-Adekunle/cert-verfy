import React from "react";

import AdminDashboard from "./AdminDashboard";
import Card from "../../shared/components/UIElements/Card";

const UsersList = (props) => {
  if (props.items.length === 0) {
    return (
      <div className="center">
        <Card>
          <h2>No user found.</h2>
        </Card>
      </div>
    );
  }

  return (
    <React.Fragment>
      {props.items.map((user) => (
        <AdminDashboard
          key={user.id}
          id={user.id}
          image={user.image}
          title={user.title}
          name={user.name}
          courseCount={user.course}
          certCount={user.cert}
        />
      ))}
    </React.Fragment>
  );
};

export default UsersList;
