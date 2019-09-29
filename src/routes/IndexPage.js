import React from 'react';
import { connect } from 'dva';
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
  const {aboutus, cases, comanynews, tradenews, comanynewsTitle, tradenewsTitle, notice, video} = props.changenav.isTopData
  return (
    <div className={`${styles.nomal} indexWraper`}>
      <Header />
      <Nav />
      <Banner />
      <Notice props = {notice} />
      <div className={styles.indexCon}>
        <Row>
          <Col span={9}>
            <About props = {aboutus} />
          </Col>
          <Col span={9}>
            <Case props = {cases} />
          </Col>
          <Col span={6}>
              <Video props = {video}  />
          </Col>
        </Row>
        <Row>
          <Col span={9}>
          <IndexList props = {comanynews} title={comanynewsTitle} />
          </Col>
          <Col span={9}>
              <IndexList props = {tradenews} title = {tradenewsTitle} />
          </Col>
          <Col span={6}>
              <ConactUs />
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
