import React from 'react';
import styles from './center.module.css';

function CenterMenu() {
  return (
    <div className={styles.menu}>
      <ul className={styles.ul}>
        <li className={styles.li}>Home</li>
        <li className={styles.li}>Stream</li>
        <li className={styles.li}>Library</li>
      </ul>
    </div>
  );
}

export default CenterMenu;
