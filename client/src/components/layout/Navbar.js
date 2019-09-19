import React from 'react'
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="navbar bg-light">
      <h3>
        <Link to="/">
          <i className="nav-text fas fa-rocket"/>{" "}
          <span className="nav-text">Rocket Insurance</span>
        </Link>
      </h3>
    <ul>
      <li>
        <Link to="/">
            <span className="nav-text">Registration</span>
        </Link>
      </li>
      <li>
        <Link to="/quote-overview">
            <span className="nav-text">Quote Overview</span>
        </Link>
      </li>
    </ul>
  </nav>
  )
}


export default Navigation
