import React from 'react';
// import Video from './../../../public/video/movie.ogv'
import styles from './../../routes/IndexPage.css'
import {Spin} from 'antd'


const Videos = (props) => {
const videoUrl = props.props?props.props[0].Url.split('UploadFile')[1]:''
  return (
    <div className={styles.aboutBox}>
    <h2 className={styles.boxTitle}>公司视频<span>VIDEO</span></h2>
    <div className={styles.tinyBorder}></div>
    {props.props==''?<div className="example">
          <Spin />
        </div>:(videoUrl==undefined?'无数据':<video src={`http://byw6919160001.my3w.com/UploadFile/${props.props[0].Url.split('UploadFile')[1]}`} controls="controls" className={styles.indexVideo} height='175' width='300'>
    your browser does not support the video tag
    </video>)}
    
    </div>
  );
};

Videos.propTypes = {
};



export default Videos;