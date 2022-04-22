import React from 'react';
import styles from './search.module.css';

function Search() {
  return (
    <div className={styles.wrapper}>
      <div> Left</div>
      {/* Right */}
      <div className={styles.item_left}>
        <div className={styles.search}>
          {' '}
          <input
            className={styles.input}
            type="text"
            placeholder="Enter the keyword or URL"
          />
          <button className={styles.btn}>
            <img
              className={styles.searchimg}
              src={require('../../img/search.png')}
              alt=""
            />
          </button>
        </div>
        {/* paragraph */}
        <div className={styles.title}>
          {/* tild icon */}
          <div className={styles.tild}>
            <img
              className={styles.imgtild}
              src={require('../../img/Path 318.png')}
              alt=""
            />
          </div>
          <span>Search Music by</span>
          <span>
            <b>Name or Direct URL</b>
          </span>
          <span className={styles.text}>
            Duis feugiat congue metus, ultrices vulputate <br /> nibh viverra
            eget. Vestibulum ullamcorper <br /> volutpat varius.
          </span>
        </div>
      </div>
    </div>
  );
}

export default Search;
