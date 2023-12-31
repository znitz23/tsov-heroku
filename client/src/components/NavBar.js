import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Nav, StyledNavBar } from "./styled/NavBar.styled";
import logo from "../assets/3-streets-logo_adobe_express.svg";

const Navbar = ({ token, setToken, setUser, setIsLoggedIn, isLoggedIn }) => {
  const navigate = useNavigate();
  return (
    <>
      <StyledNavBar>
        <img src={logo} alt="Logo" />
        {isLoggedIn ? (
          <>
            <div>
              <Nav>
                <NavLink to="/" className="navLink">
                  Home
                </NavLink>
                <NavLink to="/results" className="navLink">
                  Results
                </NavLink>
                <button
                  onClick={() => {
                    setIsLoggedIn(false);
                    setUser("");
                    setToken("");
                    navigate("/");
                    localStorage.removeItem("token");
                  }}
                >
                  Logout
                </button>
              </Nav>
            </div>
          </>
        ) : (
          <></>
        )}
      </StyledNavBar>
    </>
  );
};

export default Navbar;
