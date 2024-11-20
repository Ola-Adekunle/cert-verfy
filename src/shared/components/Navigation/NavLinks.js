import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { UserAuthContext } from "../../context/user-auth-context";
import { AdminAuthContext } from "../../context/admin-auth-context";

import "./NavLinks.css";

const NavLinks = (props) => {
  const userAuth = useContext(UserAuthContext);
  const adminAuth = useContext(AdminAuthContext);

  return (
    <ul className="nav-links">
      <li>
        <NavLink to="/" exact onClick={props.onClick}>
          HOME
        </NavLink>
      </li>
      <li>
        <NavLink to="/about" exact onClick={props.onClick}>
          ABOUT
        </NavLink>
      </li>
      {!userAuth.isLoggedIn && !adminAuth.isLoggedIn && (
        <React.Fragment>
          <li>
            <NavLink to="/auth/user" exact onClick={props.onClick}>
              USER
            </NavLink>
          </li>
          <li>
            <NavLink to="/auth/admin" exact onClick={props.onClick}>
              ADMIN
            </NavLink>
          </li>
        </React.Fragment>
      )}
      {userAuth.isLoggedIn && (
        <li>
          <span onClick={props.onClick}>
            <button onClick={userAuth.logout}>LOGOUT</button>
          </span>
        </li>
      )}
      {adminAuth.isLoggedIn && (
        <li>
          <span onClick={props.onClick}>
            <button onClick={adminAuth.logout}>LOGOUT</button>
          </span>
        </li>
      )}
    </ul>
  );
};

export default NavLinks;
