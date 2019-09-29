import React from 'react';
import { connect } from 'dva';
import PropTypes from 'prop-types'
import { Row, Col, Carousel, List, Typography } from 'antd';
import styles from './IndexPage.css';
import Header from './../components/index/header'
import Banner from './../components/index/banner'
import Nav from './../components/index/nav'
import Notice from './../components/index/notice'
import NyAbout from './../components/subPage/nyAbout'
import ConactUs from './../components/index/contactus'
import Footer from './../components/index/footer'
import Message from './../components/subPage/Message'


function IndexPage(data) {
  const navName = data.changenav.pageName
  const {notice} = data.changenav.indexData
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
            <Message props = {navName}  />
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
