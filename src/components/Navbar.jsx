import React, {useState} from 'react'
import { FaBars } from "react-icons/fa";
import { BsX } from "react-icons/bs";
const Navbar = () => {
    const [toggleicon, setToggleicon] = useState(true)
    return (
      <nav className="navbar__nav pt-1">
        {toggleicon ? (
          <FaBars className="icon" onClick={() => setToggleicon(!toggleicon)} />
        ) : (
          <BsX className="icon" onClick={() => setToggleicon(!toggleicon)} />
        )}
        <div className="container navbar__text d-flex align-items-center">
          <div className="logo">
            <img src="/img/logo.png" alt="Image__Logo" />
          </div>
          <ul
            className={
              toggleicon
                ? "nav justify-content-end"
                : "nav justify-content-end show"
            }
          >
            <li className="nav-item">
              <a className="nav-link active" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Menu
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Shop
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                News
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
}

export default Navbar
