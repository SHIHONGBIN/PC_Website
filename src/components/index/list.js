import React from 'react'
import styles from './../../routes/IndexPage.css'
import {Icon,Spin} from 'antd'
import {Link} from 'dva/router'
import PropTypes from 'prop-types'
import {connect} from 'dva'

const MyList = (props) => {
  const {dispatch} = props
    const imgs = props.props
 
    const title = props.title
    const url = title == '公司新闻' ? 'companyNews': 'tradeNews'
    const ajaxHandle = title == '公司新闻' ? 'ajaxHandleComNews': 'ajaxHandleTradeNews'
    return (
        <div className={styles.aboutBox}>
        <h2 className={styles.boxTitle}><Link to={`/${url}`}  onClick={()=>{dispatch({type:'changenav/changeName', payload:{pageName:title}});dispatch({type:'changenav/'+ajaxHandle})}}>More</Link>{title}<span>NEWS</span></h2>
        <div className={styles.tinyBorder}></div>
          {imgs!=''?(imgs==null?'无数据':imgs.map((item, index)=>
            index<6?(<div className={styles.listCon} key={index}>
                <span>{item.time}</span><Icon type="caret-right" /><div className={styles.listConTitle}><Link to={{pathname:`/detail/${item.Id}`}} onClick={()=>dispatch({type:'changenav/ajaxHandleDetail', payload:{ID: item.Id, title:item.Title}})}>{item.Title}</Link></div>
            </div>
          ):'')):<div className="example">
          <Spin />
        </div>}
          </div> 
    );
};

MyList.propTypes = {
  changenav:PropTypes.object
};

const mapStateToProps = (state) => {
  return {
      changenav:state.changenav
  }
}

export default connect(mapStateToProps)(MyList);

