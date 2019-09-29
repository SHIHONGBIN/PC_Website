import React from 'react';
import styles from './../../routes/IndexPage.css'
import BreadNav from './breadNav'
import PropTypes from 'prop-types'
import {connect} from 'dva'
// import {Link} from 'dva/router'

const NyAbout = (props) => {
 
    const news = props.detail
    // if(news.CreationTime){
    //   const curDate = news.CreationTime?new Date(news.CreationTime.replace(/\D*/gi, '')):''
    //   const creationTime = 
    // }
    if(news.CreationTime){
      console.log(new Date(news.CreationTime.replace(/\D*/gi, '')*1))
    }
    // const imgUrl = news.Url?news.Url.split('UploadFile')[1]:''
  return (
    
    <div className={styles.aboutBox}>
      <BreadNav props = {props} />
    <div className={styles.tinyBorder}></div>
    <div className={`${styles.nyAboutBox} ${styles.nyAboutBoxDetail}`}>
      {/* {props.aboutus} */}
      {news?<div><h4 className={styles.detailTitle}>{news.Title}</h4>
      <h5>{news.STitle}</h5>
      <p className={styles.subTitle}>更新时间：{news.CreationTime?`${new Date(news.CreationTime.replace(/\D*/gi, '')*1).getFullYear()}年${new Date(news.CreationTime.replace(/\D*/gi, '')*1).getMonth()+1}月${new Date(news.CreationTime.replace(/\D*/gi, '')*1).getDate()}日 ${new Date(news.CreationTime.replace(/\D*/gi, '')*1).getHours()}:${new Date(news.CreationTime.replace(/\D*/gi, '')*1).getMinutes()}`:''}　点击数：{news.VisitNum}</p>
      <div className={styles.detailBox}>
        {news.Url?<img src={`http://byw6919160001.my3w.com/UploadFile/${news.Url?news.Url.split('UploadFile')[1]:''}`} alt='' />:''}
        {news.Url?<div dangerouslySetInnerHTML={{__html:news.Content?news.Content:''}} style={{textAlign:'center'}}></div>:<div dangerouslySetInnerHTML={{__html:news.Content?news.Content:''}}></div>}
      
      </div></div>:''}
      
    </div>
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