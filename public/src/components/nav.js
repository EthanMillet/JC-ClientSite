import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import './pages/styles/nav.css'


function DropdownMenu() {
    return(
      <div>
        <div className="dropdown-menu">
          <ul>
            <li className="dropdownItem"><a target="_blank" rel="noopener noreferrer" href="https://www.churchofjesuschrist.org/welcome/find-a-church?lang=eng">Find a Church &rarr;</a></li>
            <li className="dropdownItem"><a target="_blank" rel="noopener noreferrer" href="https://www.churchofjesuschrist.org/comeuntochrist/lp/basic-beliefs/meet-with-missionaries?lang=eng">Meet With Missionaries &rarr;</a></li>
            <li className="dropdownItem"><a target="_blank" rel="noopener noreferrer" href="https://www.churchofjesuschrist.org/comeuntochrist/lp/basic-beliefs/book-of-mormon?lang=eng">Study the Book of Mormon &rarr;</a></li>
          </ul>
        </div>
      </div>
    )
}

function Nav() {
    const [isDropdownVisible, setDropdownVisible] = useState(false);

    const handleMouseEnter = () => {
      setDropdownVisible(true);
    };
  
    const handleMouseLeave = () => {
      setDropdownVisible(false);
    };

    return (
      <div className="navbar-main">
        
        <div className="navbar-left">

            <div className="navbar-logo"></div>
            <Link to='/' className="navbar-link">HOME</Link>
            <Link to='/' className="navbar-link">ABOUT</Link>
            <Link to='/' className="navbar-link">CONTACT</Link>


            <div
          className="navbar-dropdown"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{zIndex: 999}}
        >
          <button className="navbar-drop-button">LINKS</button>
          {/* <DropdownMenu /> */}
          {isDropdownVisible && <DropdownMenu />}
        </div>


        </div>

        <div className="navbar-right">
            <button className="navbar-button">Learn More</button>
        </div>
      </div>
    );
}

  
  export default Nav;