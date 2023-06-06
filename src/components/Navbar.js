import React, { useContext } from 'react';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import { DarkModeContext } from '../context/DarkModeContext';

export default function Navbar() {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

  return (
    <nav className={`nav-container ${darkMode && ' nav-dark'}`}>
      <div className="nav-item logo">
        <img
          alt="logo"
          width="50px"
          src="https://cdn-icons-png.flaticon.com/512/4272/4272911.png"
        />
      </div>
      <div className="name-logo">Dictionary Corner</div>
      <div className="nav-item">
        <button
          className={`toggle ${darkMode ? ' toggle-dark' : ' toggle-light'}`}
          onClick={toggleDarkMode}
        >
          <DarkModeOutlinedIcon style={{ fontSize: '30px' }} />
        </button>
      </div>
    </nav>
  );
}
