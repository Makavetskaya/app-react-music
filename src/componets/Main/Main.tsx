import React from 'react';
import styles from './main.module.css';
import Download from '../Download/Download';
import Search from '../Search/Search';
function Main() {
  return (
    <div className={styles.wrapper}>
      {/* left side */}
      <div className={styles.headings}>
        <span>Experience The</span>{' '}
        <span>
          <b>Best Qulaity</b>{' '}
          <span>
            <b className={styles.title}>Music</b>
          </span>
        </span>
        <span className={styles.text}>
          Donec laoreet nec velit vitae aliquam. Ut quis tincidunt purus.
          <br />
          Suspendisse in leo non risus tincidunt lobortis.
        </span>
        {/* download */}
        <div>
          <span className={styles.download}>
            Download now on IOS and Android
          </span>
          <Download />
        </div>
      </div>
      {/* right side */}
      <div>
        <img
          className={styles.group}
          src={require('../../img/Group 9.png')}
          alt=""
        />
      </div>
    </div>
  );
}

export default Main;
