import React from 'react';
import { connect } from 'dva';
import { Row, Col, Carousel, List, Typography } from 'antd';
import PropTypes from 'prop-types'
import styles from './IndexPage.css';
import Header from './../components/index/header'
import Banner from './../components/index/banner'
import Nav from './../components/index/nav'
import Notice from './../components/index/notice'
import NyAbout from './../components/subPage/nyAbout'
import ConactUs from './../components/index/contactus'
import Footer from './../components/index/footer'


function IndexPage(data) {
  const navName = data.changenav.pageName
  const {notice} = data.changenav.indexData
  var aboutus =''
  const {pageName} = data.changenav
  if(pageName=='关于我们'){
    aboutus = data.changenav.indexData.aboutus.aboutus
  }else if(pageName=='人才招聘'){
    aboutus = data.changenav.indexData.job
  }else{
    return false
  }


  return (
    <div className={styles.normal}>
      <Header />
      <Nav />
      <Banner />
      <Notice props = {notice} />
      <div className={styles.nyWraper}>
        <Row>
          <Col span={6}>
           <ConactUs />
          </Col>
          <Col span={18}>
          <NyAbout props = {navName} aboutus = {aboutus} />
          </Col>
          </Row>
          </div>
      <Footer />
    </div>
  );
}

IndexPage.propTypes = {
  changenav:PropTypes.object
};

const mapStateToProps = (state) => {
  return {
      changenav:state.changenav
  }
}

export default connect(mapStateToProps)(IndexPage);
