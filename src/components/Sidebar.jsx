import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faBook,
  faClipboardList,
  faStar,
  faArrowLeft,
  faBars,
} from '@fortawesome/free-solid-svg-icons';
import styles from './Sidebar.module.css';

const Sidebar = () => {
    const location = useLocation();
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const handleToggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };
  return (
    <>
    <div className={`${styles.sidebar} ${isSidebarOpen ? styles.open : styles.closed}`}>
        <button className={styles.toggleButton} onClick={handleToggleSidebar}>
            <FontAwesomeIcon icon={faBars} />
        </button>
      <h2>Menu</h2>
      <ul>
        <li>
            <Link to="/actividad" 
            className={styles.a}>
                <FontAwesomeIcon icon={faHome} />
                Home
            </Link>
        </li>
        <li>
            <Link to="/actividad/topic1" 
            className={styles.a}>
                <FontAwesomeIcon icon={faBook} />
                Topic 1
            </Link>
        </li>
        <li>
            <Link to="/actividad/topic2"
            className={styles.a}>    
                <FontAwesomeIcon icon={faBook} />
                Topic 2
            </Link>
        </li>
        <li>
            <Link to="/actividad/topic3"
            className={styles.a}>
                <FontAwesomeIcon icon={faBook} />
                Topic 3
            </Link>
        </li>
        <li>
            <Link to="/actividad/activity" 
            className={styles.a}>
                <FontAwesomeIcon icon={faClipboardList} />
                Activity
            </Link>
        </li>
        <li>
            <Link to="/actividad/assessment"
            className={styles.a}>
                <FontAwesomeIcon icon={faStar} />
                Assessment
            </Link>
        </li>
        <li>
            <Link to="/" className={styles.a}>
                <FontAwesomeIcon icon={faArrowLeft} />
                Back
            </Link>
        </li>
      </ul>
    </div>
    </>
  );
}

export default Sidebar;
