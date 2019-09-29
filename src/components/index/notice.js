import React from 'react';
import { Carousel } from 'antd';
// import bannerimg from './../../../public/images/5b1f2ef05f384.jpg'
// import bannerimg2 from './../../../public/images/5c4bf53643d19.jpg'
import styles from './../../routes/IndexPage.css'
import {Link} from 'dva/router'
import PropTypes from 'prop-types'
import {connect} from 'dva'

const imgstyle = {
    width:'1920px',
    height:'450px'
}
const right = 'right'

const Example = (props) => {
  const notice = props.props
  const {dispatch} = props
  return (
    <div className={styles.slideText}>
      <div className={styles.slideTitle}>最新公告：</div>
      <div className={styles.slideTitleBox}>
        <Carousel dotPosition={`${right}`} autoplay dots='false'>
          {notice?notice.map((item, index)=><div key={index}><Link to={{pathname:`/detail/${item.Id}`}} onClick={()=>dispatch({type:'changenav/ajaxHandleDetail', payload:{ID: item.Id}})}>{item.Title}</Link></div>):''}
        </Carousel>
    </div>
    </div>
  );
};

Example.propTypes = {
  changenav:PropTypes.object
};

const mapStateToProps = (state) => {
  return {
      changenav:state.changenav
  }
}

export default connect(mapStateToProps)(Example);