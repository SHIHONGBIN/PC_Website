import React from 'react';
import styles from './../../routes/IndexPage.css'
import BreadNav from './breadNav'
import { Link } from 'dva/router';
import Progation from './Propagation'
// import img1 from './../../assets/images/case/case1.jpg'
// import img2 from './../../assets/images/case/case2.jpg'
// import img3 from './../../assets/images/case/case3.jpg'
// import img4 from './../../assets/images/case/case4.jpg'
// import img5 from './../../assets/images/case/case5.jpg'
// import img6 from './../../assets/images/case/case6.jpg'
// import img7 from './../../assets/images/case/case7.jpg'
// import img8 from './../../assets/images/case/case8.jpg'
import PropTypes from 'prop-types'
import { connect } from 'dva'

// const imgBox = [
//     { imgaddress: 'case1.jpg', imgintro: '1111111111111111111' },
//     { imgaddress: 'case2.jpg', imgintro: '22222' },
//     { imgaddress: 'case3.jpg', imgintro: '333333333333' },
//     { imgaddress: 'case4.jpg', imgintro: '44444444444444' },
//     { imgaddress: 'case5.jpg', imgintro: '555555555555555' },
//     { imgaddress: 'case6.jpg', imgintro: '6666666666666' },
//     { imgaddress: 'case7.jpg', imgintro: '777777777' },
//     { imgaddress: 'case8.jpg', imgintro: '88' },
// ]


const NyAbout = (props) => {
  const { cases, dispatch } = props
  const navTitle = props.props
  const {pagination} = props.changenav.indexData
  return (
    <div className={styles.aboutBox}>
      <BreadNav props={props} />
      <div className={styles.tinyBorder}></div>
      <div className={styles.nyAboutBox}>
        <div className={styles.boxImgboxPage}>
          {cases.length > 0&&props.changenav? 
            cases.map((item, index) => {
              if(index >= (pagination.perPage*(pagination.curIndex-1))&&index<(pagination.perPage*pagination.curIndex)){
            return <Link to={`/detail/${item.Id}`} key={index} onClick={() => dispatch({ type: 'changenav/ajaxHandleDetail', payload: { ID: item.Id, navTitle: navTitle } })}><div className={styles.boxP} >{item.Url?<img src={`http://byw6919160001.my3w.com${item.Url}`} alt='' />:<div className={styles.imgDefault}>图片加载失败...</div>}<p>{item.Title}</p></div></Link>
          }}) : ''}
        </div>
      </div>
      <Progation props = {cases} />
    </div>
  );
};
NyAbout.propTypes = {
  changenav: PropTypes.object
};

const mapStateToProps = (state) => {
  return {
    changenav: state.changenav
  }
}

export default connect(mapStateToProps)(NyAbout);
