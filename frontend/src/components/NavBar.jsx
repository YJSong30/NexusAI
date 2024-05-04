import React from 'react';

const NavBar = () => {
  return (
    <nav>
        <div id='nav-box'>
            <ul id='nav' class='poppins-regular'>
                <li id='logo' className='poppins-bold'>Nexus<span>AI</span></li>
                <li><a href="#about">About</a></li>
                <li><a href="#tutorial">Tutorial</a></li>
                <li><a href="#faq">FAQ</a></li>
            </ul>
        </div>
    </nav>
  );
};

export default NavBar;