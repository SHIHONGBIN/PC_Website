import React from 'react';
import { connect } from 'dva';
import { Row, Col, Carousel, List, Typography } from 'antd';
import PropTypes from 'prop-types'
import styles from './IndexPage.css';
import Header from '../components/index/header'
import Banner from '../components/index/banner'
import Nav from '../components/index/nav'
import Notice from '../components/index/notice'
import NyAbout from '../components/subPage/nyAbout'
import ConactUs from '../components/index/contactus'
import Footer from '../components/index/footer'
import BreadNav from './../components/subPage/breadNav'


class IndexPage extends React.Component {


  constructor(props){
    super(props)
    this.state = {
      datas : props.changenav.indexData,
      navName : props.changenav.indexData.pageID ? props.changenav.indexData.pageID.type : '',
      changeName:props.changenav.pageName
    }
  }

  componentDidMount(){
    document.title = '联系我们'
  }
  
  render(){
    const { notice } = this.state.datas
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
              <div className={styles.aboutBox}>
                <BreadNav props={{props:this.state.changeName}} />
                <div className={styles.tinyBorder}></div>
                <div className={styles.nyAboutBox}>
                <div className={styles.contactCon}>公司名称：武汉齐翔通用航空股份有限公司</div>
                <div className={styles.contactCon}>联系电话：400-117-0038</div>
                <div className={styles.contactCon}>传<span>无无</span>真：400-117-0038</div>
                <div className={styles.contactCon}>联系地址：江汉路宝丽金中央荣御C1-1708</div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
        <Footer />
      </div>
    );
  }

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
