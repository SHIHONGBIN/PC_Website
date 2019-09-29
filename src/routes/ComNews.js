import React from 'react';
import { connect } from 'dva';
import PropTypes from 'prop-types'
import { Link } from 'dva/router';
import { Row, Col, Carousel, List, Typography } from 'antd';
import styles from './IndexPage.css';
import Header from './../components/index/header'
import Banner from './../components/index/banner'
import Nav from './../components/index/nav'
import Notice from './../components/index/notice'
import NyAbout from './../components/subPage/nyAbout'
import ConactUs from './../components/index/contactus'
import Footer from './../components/index/footer'
import BreadNav from './../components/subPage/breadNav'
import SubCase from './../components/subPage/subCase'
import ComNews from './../components/subPage/ComNews'


function IndexPage(data) { 
    const navName = data.changenav.pageName
    var news;
    if(navName == '公司新闻'){
         news  = data.changenav.indexData.comanynews
    }else if(navName == '行业资讯'){
         news  = data.changenav.indexData.tradenews
    }else if(navName == '站内搜索'){
        news  = data.changenav.indexData.search
    }else if(navName == '最新公告'){
        news  = data.changenav.indexData.notice
    }else if(navName == '人才招聘'){
        news  = data.changenav.indexData.job
    }else if(navName == '公司视频'){
        news  = data.changenav.indexData.video
    }else{
        return false
    }
    
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
                        <ComNews props = {navName} news = {news} />
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
