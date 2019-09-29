import React from 'react';
import styles from './../../routes/IndexPage.css'
import BreadNav from './breadNav'
import {Icon} from 'antd'
import Progation from './Propagation'
import PropTypes from 'prop-types'
import {connect} from 'dva'
import {Link} from 'dva/router'




const NyAbout = (props) => {

  const news = props.news
  const {dispatch}  = props
  const {pagination} = props.changenav.indexData
  console.log(props.props)
  console.log(news)
  return (
    <div className={styles.aboutBox}>
      <BreadNav props = {props} />
    <div className={styles.tinyBorder}></div>
    <div className={styles.nyAboutBox}>
          {props.props == '站内搜索'?((news && news.length>0)?news.map((item, index)=>{if(index >= (pagination.perPage*(pagination.curIndex-1))&&index<(pagination.perPage*pagination.curIndex)){
           return <div className={styles.listCon} key={index}>
                <span>{item.time}</span><Icon type="caret-right" /><div className={styles.listConTitle}><Link to={{pathname:`/detail/${item.Id}`}} onClick={()=>dispatch({type:'changenav/ajaxHandleDetail', payload:{ID: item.Id}})}>{item.Title}</Link></div>
            </div>}}):'无搜索结果'):(news&&news.length)>0?news.map((item, index)=>{if(index >= (pagination.perPage*(pagination.curIndex-1))&&index<(pagination.perPage*pagination.curIndex)){
            return <div className={styles.listCon} key={index}>
                <span>{item.time}</span><Icon type="caret-right" /><div className={styles.listConTitle}><Link to={{pathname:`/detail/${item.Id}`}} onClick={()=>dispatch({type:'changenav/ajaxHandleDetail', payload:{ID: item.Id}})}>{item.Title}</Link></div>
            </div>
          }}):''}
           
    </div>
   <Progation props = {news} />
  </div>
  );
};

NyAbout.propTypes = {
  changenav:PropTypes.object
};

const mapStateToProps = (state) => {
  return {
      changenav:state.changenav
  }
}

export default connect(mapStateToProps)(NyAbout);