import React from 'react';
// import Feature from '../Feature/Feature';
import styles from './experience.module.css';
function Experience() {
  return (
    <div className={styles.experience}>
      {/* titld icon */}
      <img
        className={styles.img}
        src={require('../../img/Path 318.png')}
        alt=""
      />
      {/* heading */}
      <div className={styles.headline}>
        <span>An Amazing App Can Change Your Daily Life</span>
        <span>
          <b>Music Experience</b>
        </span>
      </div>
      {/* features  */}
    </div>
  );
}

export default Experience;
