import React from "react";
import { Link } from "react-router-dom";

import Avatar from "../../shared/components/UIElements/Avatar";
import Card from "../../shared/components/UIElements/Card";
import "./UsersItem.css";

const UsersItem = (props) => {
  return (
    <li className="user-item">
      <Card className="user-item__content user-item-container">
        <Link to={`/${props.id}/places`}>
          <div className="user-item__image">
            <Avatar image={props.image} alt={props.name} />
          </div>
          <div className="user-item__info">
            <h2>{props.name}</h2>
            <h3>
              {props.courseCount} {props.courseCount === 1 ? "course" : "courses"} enrolled
            </h3>
            <h3>
              {props.certCount} {props.certCount === 1 ? "certificate" : "certificates"}
            </h3>
          </div>
        </Link>
      </Card>
    </li>
  );
};

export default UsersItem;
