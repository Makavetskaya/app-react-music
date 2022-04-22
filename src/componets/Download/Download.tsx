import React from 'react';
import styles from './download.module.css';

function Download() {
  return (
    <div>
      <div className={styles.download}>
        <img
          className={styles.images}
          src={require('../../img/App Store.png')}
          alt=""
        />
        <img
          className={styles.images}
          src={require('../../img/Google Play.png')}
          alt=""
        />
      </div>
    </div>
  );
}

export default Download;
