import React from 'react';
import { Carousel } from 'antd';
import bannerimg from './../../../public/images/5b1f2ef05f384.jpg'
import bannerimg2 from './../../../public/images/5c4bf53643d19.jpg'
import styles from './../../routes/IndexPage.css'

const imgstyle = {
    width:'1920px',
    height:'450px'
}

const Example = () => {
  return (
    <Carousel autoplay>
    <div>
        <img src={bannerimg} alt="" style={imgstyle} />
    </div>
    <div>
      <img src={bannerimg2} alt="" style={imgstyle} />
    </div>
  </Carousel>
  );
};

Example.propTypes = {
};


export default Example;
