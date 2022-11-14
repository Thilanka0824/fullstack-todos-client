import React from "react";
import { Link } from "react-router-dom";

const currentYear = new Date().getFullYear();
const Footer = () => {
  return (
    <footer className="footer">
      <p>
        {" "}
        <Link>Login</Link> <Link to="/home-page">Home</Link>{" "}
        <Link to="/todo-form">ToDo Form</Link> copyright © {currentYear}{" "}
      </p>
    </footer>
  );
};

export default Footer;
