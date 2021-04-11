import React from "react";
import { Link, NavLink, withRouter } from "react-router-dom";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";

import MyButton from "../MyButton/MyButton";
import resumeData from "../../dummyData/resumeData";
import {
  HomeRounded,
  SchoolRounded,
  WorkRounded,
  Telegram,
} from "@material-ui/icons";

import "bootstrap/dist/css/bootstrap.min.css";
import "./Header.css"

const Header = (props) => {
  const pathname = props?.location?.pathname;
  return (
    <div>
      <Navbar bg="light" expand="lg" sticky="top" className="header">
        {/* Home Link */}
        <Nav.Link as={NavLink} to="/">
          <Navbar.Brand href="#home" className="header_home_icon">
            <HomeRounded />
          </Navbar.Brand>
        </Nav.Link>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="header_left">
            {/* Resume Link */}
            <Nav.Link
              as={NavLink}
              to="/"
              className={
                pathname === "/" ? "header_link_active" : "header_link"
              }
            >
              Resume
            </Nav.Link>

            {/* Portfolio Link */}
            <Nav.Link
              as={NavLink}
              to="/portfolio"
              className={
                pathname === "/portfolio" ? "header_link_active" : "header_link"
              }
            >
              Portfolio
            </Nav.Link>
          </Nav>
          <div className="header_right">
          {Object.entries(resumeData.socials).map(([key, content], idx) => (
            <a
              key={`${key}${idx}`}
              href={content.link}
              target="_blank"
              rel="noreferrer"
            >
              {content.icon}
            </a>
          ))}
          <MyButton text="Hire me" icon={<Telegram />}/>
        </div>
        </Navbar.Collapse>
        
      </Navbar>
    </div>
  );
};

export default withRouter(Header);
