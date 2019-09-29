import React from 'react';
import { connect } from 'dva';
import {Link} from 'dva/router'
import { Row, Col, Carousel, List, Typography } from 'antd';
import PropTypes from 'prop-types'
import styles from './IndexPage.css';
import Header from './../components/index/header'
import Banner from './../components/index/banner'
import Nav from './../components/index/nav'
import Notice from './../components/index/notice'
import About from './../components/index/about'
import Case from './../components/index/case'
import Video from './../components/index/video'
import IndexList from './../components/index/list'
import ConactUs from './../components/index/contactus'
import Footer from './../components/index/footer'


function IndexPage(props) {
  const {dispatch} = props
  return (
    <div className={`${styles.nomal} indexWraper`}>
      <Header />
      <Nav />
      <div className={styles.indexCon}>
        <Row>
          <Col span={12} className={styles.page404}>
            404!页面不存在或者地址错误！！！！！
            <div><Link to='/' onClick={()=>{dispatch({type:'changenav/changeName',payload:{pageName:'网站首页'}}),dispatch({type:'changenav/gotoIndex'})}}>点击返回首页</Link></div>
          </Col>
        </Row>
      </div>
      <Footer />
    </div>
  );
}

IndexPage.propTypes = {
  changenav: PropTypes.object
};

const mapStateToProps = (state) => {
  return {
    changenav: state.changenav
  }
}
export default connect(mapStateToProps)(IndexPage);
