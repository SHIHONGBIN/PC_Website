import React from 'react';
import Aboutimg from './../../../public/images/5b1f2ab5f1d2f.jpg'
import styles from './../../routes/IndexPage.css'
import {Spin} from 'antd'
import {Link} from 'dva/router'
import PropTypes from 'prop-types'
import {connect} from 'dva'

const About = (props) => {
  // const {aboutus} = props.props
  const {dispatch} = props

  return (
    <div className={styles.aboutBox}>
    <h2 className={styles.boxTitle}><Link to='/about' onClick={()=>{dispatch({type:'changenav/changeName', payload:{pageName:'关于我们'}}),dispatch({type:'changenav/ajaxHandleAboutus'})}}>More</Link>关于我们<span>ABOUT</span></h2>
    <div className={styles.tinyBorder}></div>
    <div className={styles.aboutBoxImg}>
      <img src={Aboutimg} alt='' />
      <p>山东齐翔通用航空股份有限公司成立于2010年12月16日，于2012年11月1日取得运行合格证，是由国家民航局批准成立的甲类通用航空公司，注册资本2亿元。公司总部现设于山东济南，将雪野通用机场作为主运行基地。公司目前拥有R44、运动类轻型自转旋翼机等不同型号的飞机15架。</p>
    </div>
  </div>
  );
};

About.propTypes = {
  changenav:PropTypes.object
};

const mapStateToProps = (state) => {
  return {
      changenav:state.changenav
  }
}

export default connect(mapStateToProps)(About);
