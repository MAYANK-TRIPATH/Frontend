import React, { useState } from 'react';

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav >
      <ul style={{
        position: 'relative',
        display: "flex",

      }}>
        
        
        
        <li style={{ position: 'relative' }} onMouseEnter={toggleDropdown}>
          
            Services
          
          {dropdownOpen && (
            <ul>
              <li >Web Development</li>
              <li >App Development</li>
              <li >SEO Services</li>
            </ul>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
