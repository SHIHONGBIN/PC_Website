import React from 'react';
import styles from './../../routes/IndexPage.css'
// import img1 from './../../assets/images/case/case1.jpg'
// import img2 from './../../assets/images/case/case2.jpg'
// import img3 from './../../assets/images/case/case3.jpg'
// import img4 from './../../assets/images/case/case4.jpg'
// import img5 from './../../assets/images/case/case5.jpg'
// import img6 from './../../assets/images/case/case6.jpg'
// import img7 from './../../assets/images/case/case7.jpg'
// import img8 from './../../assets/images/case/case8.jpg'
import {Link} from 'dva/router'
import PropTypes from 'prop-types'
import {connect} from 'dva'
import {Spin} from 'antd'

// const imgBox = [
//     {imgaddress:'case1.jpg', imgintro:'1111111111111111111'},
//     {imgaddress:'case2.jpg', imgintro:'22222'},
//     {imgaddress:'case3.jpg', imgintro:'333333333333'},
//     {imgaddress:'case4.jpg', imgintro:'44444444444444'},
//     {imgaddress:'case5.jpg', imgintro:'555555555555555'},
//     {imgaddress:'case6.jpg', imgintro:'6666666666666'},
//     {imgaddress:'case7.jpg', imgintro:'777777777'},
//     {imgaddress:'case8.jpg', imgintro:'88'},
// ]



const Case = (props) => { 
    const imgs = props.props
    const { dispatch} = props
    return (
        <div className={styles.aboutBox}>
            <h2 className={styles.boxTitle}><Link to='/case' onClick={()=>{dispatch({type:'changenav/changeName', payload:{pageName:'培训项目'}}); dispatch({type:'changenav/ajaxHandleCases'})}}>More</Link>培训项目<span>CASE</span></h2>
            <div className={styles.tinyBorder}></div>
            <div className='box'>
                {imgs?<div className='boxWrap' style={{width:210*imgs.length*2+'px'}}>
             <div className='box-imgbox' style={{width:'50%', animationDuration:4*imgs.length+'s'}}>
    {imgs.length>0?imgs.map((item, index)=> {
    return <div className='box-p' key={index}><Link to={{pathname:`/detail/${item.Id}`}} onClick={()=>dispatch({type:'changenav/ajaxHandleDetail', payload:{ID: item.Id}})}><img src={`http://byw6919160001.my3w.com${item.Url}`} alt=''/><p>{item.Title}</p></Link></div>}):''}
            </div>
            <div className='box-imgbox' style={{width:'50%', animationDuration:4*imgs.length+'s'}}>
    {imgs.length>0?imgs.map((item, index)=> {
    return <div className='box-p' key={index}><Link to={{pathname:`/detail/${item.Id}`}} onClick={()=>dispatch({type:'changenav/ajaxHandleDetail', payload:{ID: item.Id}})}><img src={`http://byw6919160001.my3w.com${item.Url}`} alt=''/><p>{item.Title}</p></Link></div>}):''}
            </div>
            </div>:<div className="example">
          <Spin />
        </div>}

            </div>
        </div>
    );
};

Case.propTypes = {
    changenav:PropTypes.object
  };
  
  const mapStateToProps = (state) => {
    return {
        changenav:state.changenav
    }
  }
  
  export default connect(mapStateToProps)(Case);
