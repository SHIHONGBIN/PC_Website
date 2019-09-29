import React from 'react';
import {Icon} from 'antd'
import styles from './../../routes/IndexPage.css'
import {connect} from 'dva'
import PropTypes from 'prop-types'
import {Link} from 'dva/router'


const Videos = (props) => { 
  const imgs = props.props
  const { dispatch} = props
  return (
    <div className={styles.aboutBox}>
    <h2 className={styles.boxTitle}><Link to='/contact' onClick={()=>{dispatch({type:'changenav/changeName', payload:{pageName:'联系我们'}}); dispatch({type:'changenav/ajaxHandleContact'})}}>More</Link>联系我们<span>CONTACT</span></h2>
    <div className={styles.tinyBorder}></div>
  <div className={styles.contactBox}>
     <div className={styles.tel}> 客服热线：</div>
     <div className={styles.telNumber}> <Icon type="phone" />  400-117-0038</div>
     <div className={styles.address}>公司地址：武汉齐翔通用航空股份有限公司</div>
     <div className={styles.callNumber}>联系电话：400-117-0038</div>
     <div className={styles.fax}>传<span style={{visibility:'hidden'}}>无无</span>真：400-117-0038</div>
  </div>
  </div>
  );
};

Videos.propTypes = {
  changenav:PropTypes.object
};

const mapStateToProps = (state) => {
  return {
      changenav:state.changenav
  }
}


export default connect(mapStateToProps)(Videos);


