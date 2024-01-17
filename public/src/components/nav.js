import React, { useState } from "react";

import './pages/styles/nav.css'


function DropdownMenu() {
    return(
        <div>
     <div className="dropdown-menu">
      <ul>
        <li>Menu 1</li>
        <li>Menu 2</li>
        <li>Menu 3</li>
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
            <button className="navbar-logo">Logo</button>
            <button className="navbar-link">HOME</button>
            <button className="navbar-link">ABOUT</button>
            <button className="navbar-link">CONTACT</button>


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