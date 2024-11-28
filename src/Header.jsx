import React from 'react';
import { BsFillBellFill, BsSearch, BsJustify } from 'react-icons/bs';
import { FaRegSmile } from 'react-icons/fa'; // Import emoji icon

function Header({ OpenSidebar }) {
  return (
    <header className="header">
      {/* Left Side: Sidebar Toggle & Dashboard Title */}
      <div className="header-left">
      <span className="menu">☰</span>
        <h1 className="dashboard-title">Tasks</h1>
      </div>

      {/* Center: Search Box */}
      <div className="header-center">
        <div className="search-box">
          <BsSearch className="search-icon" />
          <input type="text" placeholder="Search Projects" />
        </div>
      </div>

      {/* Right Side: Notifications & Profile */}
      <div className="header-right">
        <div className="notification-icon">
          <BsFillBellFill className="icon bell-icon" />
          <span className="notification-badge">17</span>
        </div>
        <div className="profile-info">
          <span className="profile-name">Radhika G</span>
          <span className="profile-role">UI/UX Designer Lead</span>
        </div>
        <div className="profile-icon">
          <FaRegSmile className="emoji-icon" />
        </div>
      </div>
    </header>
  );
}

export default Header;
