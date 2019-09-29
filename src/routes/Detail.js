import React from 'react';
import { connect } from 'dva';
import { Row, Col } from 'antd';
import PropTypes from 'prop-types'
import styles from './IndexPage.css';
import Header from '../components/index/header'
import Banner from '../components/index/banner'
import Nav from '../components/index/nav'
import Notice from '../components/index/notice'
import Detail from '../components/subPage/Detail'
import ConactUs from '../components/index/contactus'
import Footer from '../components/index/footer'
import querString from 'query-string'


function IndexPage(data) {
  const datas = data.changenav.indexData
  const navName = datas.detailData ? datas.detailData.ClassType : ''
  const { notice } = datas
  // console.log(querString.parse(data.location.search))
  return (
    <div className={styles.normal}>
      <Header />
      <Nav />
      <Banner />
      <Notice props={notice} />
      <div className={styles.nyWraper}>
        <Row>
          <Col span={6}>
            <ConactUs />
          </Col>
          <Col span={18}>
            <Detail props={navName} detail={datas.detailData} />
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
