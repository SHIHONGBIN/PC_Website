import React from 'react';
import styles from './../../routes/IndexPage.css'
import {Link} from 'dva/router'
import PropTypes from 'prop-types'
import {connect} from 'dva'

const BreadNav = (props) => {
  const {dispatch} = props
  var breadUrl = ''
  var dispathhandl = ''
  // var name = props.props.detail.type ||props.props.detail.type

  if(props.props){
    document.title = props.props?props.props.props:props.props.detail.type
  }

  if(props.props.detail){
    switch(props.props.detail.ClassType){
      case '公司新闻' :{breadUrl = '/companyNews'; dispathhandl = {type:'changenav/ajaxHandleComNews'}; break;}
      case '培训项目' :{breadUrl = '/case';dispathhandl = {type:'changenav/ajaxHandleCases'}; break;}
      case '行业资讯' :{breadUrl = '/tradeNews';dispathhandl = {type:'changenav/ajaxHandleTradeNews'}; break;}
      case '最新公告' :{breadUrl = '/notice';dispathhandl = {type:'changenav/ajaxHandleNotice'}; break;}
      case '人才招聘' :{breadUrl = '/job';dispathhandl = {type:'changenav/ajaxHandleJob'}; break;}
      defalut :{return false}
    }
  }

  

  return (
    <h2 className={styles.nyBoxTitle}>所在位置：<Link to='/' onClick={()=>{dispatch({type:'changenav/changeName',payload:{pageName:'网站首页'}}),dispatch({type:'changenav/gotoIndex'})}}>首页</Link> / {!props.props.detail?<div className={styles.nyBoxSubTitle}><span className="ant-breadcrumb-separator"></span> {props.props.props}</div>:<div className={styles.nyBoxSubTitle}> <Link to={breadUrl} onClick={()=>{dispatch({type:'changenav/changeName', payload:{pageName:props.props.detail.ClassType}});dispatch(dispathhandl)}} >{props.props.props}</Link><span className="ant-breadcrumb-separator"> / </span>{props.props.detail.Title}</div>}</h2>
  );
};

BreadNav.propTypes = {
  changenav:PropTypes.object
};

const mapStateToProps = (state) => {
  return {
      changenav:state.changenav
  }
}

export default connect(mapStateToProps)(BreadNav);
