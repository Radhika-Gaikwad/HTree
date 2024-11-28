import React, { useState } from 'react';
import {
  BsPeopleFill,
  BsFillArchiveFill,
  BsFillCalendarFill,
  BsClockFill,
  BsFillGearFill,
  BsClipboardCheck,
  BsAlarm,
} from 'react-icons/bs';

function Sidebar({ openSidebarToggle, OpenSidebar }) {
  const [activeMenu, setActiveMenu] = useState('Dashboard');

  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
  };

  return (
    <aside
      id="sidebar"
      className={openSidebarToggle ? 'sidebar-responsive' : ''}
      style={{
        paddingTop: '20px',
        borderRight: '1px solid #d3d3d3',
        borderRadius: '8px',
        backgroundColor: '#f8f8f8',
        height: 'calc(100vh - 20px)',
      }}
    >
      <div className="sidebar-title">
        <span className="icon close_icon" onClick={OpenSidebar}>
          X
        </span>
      </div>

      <ul className="sidebar-list" style={{ marginTop: '10px' }}>
        <li
          className={`sidebar-list-item ${activeMenu === 'Dashboard' ? 'active' : ''}`}
          onClick={() => handleMenuClick('Dashboard')}
          style={{
            color: activeMenu === 'Dashboard' ? '#01C2B5' : '#888',
          }}
        >
          <BsPeopleFill className="icon" /> TEAM
        </li>
        <li
          className={`sidebar-list-item ${activeMenu === 'Projects' ? 'active' : ''}`}
          onClick={() => handleMenuClick('Projects')}
          style={{
            color: activeMenu === 'Projects' ? '#01C2B5' : '#888',
          }}
        >
          <BsFillArchiveFill className="icon" /> PROJECTS
        </li>
        <li
          className={`sidebar-list-item ${activeMenu === 'My Tasks' ? 'active' : ''}`}
          onClick={() => handleMenuClick('My Tasks')}
          style={{
            color: activeMenu === 'My Tasks' ? '#01C2B5' : '#888',
          }}
        >
          <BsClipboardCheck className="icon" /> MY TASKS
        </li>
        <li
          className={`sidebar-list-item ${activeMenu === 'Calendar' ? 'active' : ''}`}
          onClick={() => handleMenuClick('Calendar')}
          style={{
            color: activeMenu === 'Calendar' ? '#01C2B5' : '#888',
          }}
        >
          <BsFillCalendarFill className="icon" /> CALENDAR
        </li>
        <li
          className={`sidebar-list-item ${activeMenu === 'Time Manage 1' ? 'active' : ''}`}
          onClick={() => handleMenuClick('Time Manage 1')}
          style={{
            color: activeMenu === 'Time Manage 1' ? '#01C2B5' : '#888',
          }}
        >
          <BsClockFill className="icon" /> TIME MANAGE
        </li>
        <li
          className={`sidebar-list-item ${activeMenu === 'Time Manage 2' ? 'active' : ''}`}
          onClick={() => handleMenuClick('Time Manage 2')}
          style={{
            color: activeMenu === 'Time Manage 2' ? '#01C2B5' : '#888',
          }}
        >
          <BsAlarm className="icon" /> TIME MANAGEMENT
        </li>
        <li
          className={`sidebar-list-item ${activeMenu === 'Settings' ? 'active' : ''}`}
          onClick={() => handleMenuClick('Settings')}
          style={{
            color: activeMenu === 'Settings' ? '#01C2B5' : '#888',
          }}
        >
          <BsFillGearFill className="icon" /> SETTINGS
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
