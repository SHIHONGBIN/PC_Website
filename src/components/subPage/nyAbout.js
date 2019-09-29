import React from 'react';
import styles from './../../routes/IndexPage.css'
import BreadNav from './breadNav'

const NyAbout = (props) => {
  return (
    <div className={styles.aboutBox}>
      <BreadNav props = {props} />
    <div className={styles.tinyBorder}></div>
    <div className={styles.nyAboutBox}>
      {props.aboutus}
    </div>
  </div>
  );
};

NyAbout.propTypes = {
};


export default NyAbout;
