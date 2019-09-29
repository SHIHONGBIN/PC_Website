
import React from 'react';
import styles from './../../routes/IndexPage.css'
import {Link,Redirect,NavLink} from 'dva/router'

const Footer = () => { 
  return (
    <div className={styles.footer}>
            <div className={styles.mainFooter}>
            友情链接：<a href="http://www.caac.gov.cn/index.html" target="_blank">中国民用航空局</a>
            </div>            
            <div className={styles.subFooter}>
               Copyright © 2019.武汉齐翔通用航空股份有限公司 All rights reserved.
               <div>联系电话：400-117-0038 鲁ICP备18026921号-1</div>
            </div>
        </div>
  );
};

Footer.propTypes = {
};


export default Footer;





