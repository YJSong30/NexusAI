import React from 'react';

const NavBar = () => {
  return (
    <nav>
        <div id='nav-box'>
            <ul id='nav' class='poppins-regular'>
                <li id='logo' className='poppins-bold'>NexusAI</li>
                <li>About</li>
                <li>Features</li>
                <li>Tutorial</li>
                <li>FAQ</li>
            </ul>
            <ul id='nav-auth' className='poppins-regular'>
              <li>Sign In</li>
              <li id='get-started'>Get Started</li>
            </ul>
        </div>
    </nav>
  );
};

export default NavBar;