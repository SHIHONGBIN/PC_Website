import React from 'react';
import styles from './../../routes/IndexPage.css'
import logo from './../../../public/images/logo.png'
import LogoText from './../../../public/images/logotext_03.png'
import 'font-awesome/less/font-awesome.less'
import 'react-fontawesome'


const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.headerCon}>
        <div className={styles.headerLeft}>
        <img src={logo} alt="" className={styles.logo} />
        <img src={LogoText} alt="" className={styles.logoText} />
        </div>
        <div className={styles.phone}>
          <i className='fa fa-phone'></i> <span>400-117-0038</span>
        </div>
      </div>
      <a target="_blank" className={styles.qqKeFu} href="http://wpa.qq.com/msgrd?v=3&uin=903917121&site=qq&menu=yes"><img border="0" src='http://wpa.qq.com/pa?p=2:903917121:53' alt="点击这里给我发消息" title="点击这里给我发消息"/></a>
    </div>
  );
};

Header.propTypes = {
};

export default Header;
