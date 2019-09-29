import React from 'react';
import { Menu, Dropdown, Icon, Input } from 'antd';
import {Link, NavLink } from 'dva/router'
import styles from './../../routes/IndexPage.css'
import { connect } from 'dva';
import PropTypes from 'prop-types'
const { Search } = Input;

const aStyle = {
    color: '#fff'
}
const textalignCenter = {
    textAlign: 'center'
}


const isUrl = ({to, name, dispatch, actionName}) => {
    const isTrue = window.location.hash.replace('#','') === to
    return (
        <NavLink to={to} className={isTrue?'ant-dropdown-link curNav':'ant-dropdown-link'} onClick={()=>{dispatch({type:'changenav/'+actionName})}}>{name}</NavLink>
    )
}


class Example extends React.Component {
   
    render(){
        const {dispatch} = this.props
        const {pageName} = this.props.changenav
        const menu = (
            <Menu className='ant-sub-nav'>
                <Menu.Item>
                    {isUrl({to:'/companyNews',name:'公司新闻',dispatch:dispatch,actionName:'ajaxHandleComNews'})}
                </Menu.Item>
                <Menu.Item>
                {isUrl({to:'/tradeNews',name:'行业资讯',dispatch:dispatch,actionName:'ajaxHandleTradeNews'})}
                </Menu.Item>
            </Menu>
        );
        return (
            <div className={styles.indexNav}>
                <div className={styles.indexNavCon}>
                    {isUrl({to:'/',name:'网站首页',dispatch:dispatch,actionName:'gotoIndex'})}
                    {isUrl({to:'/about',name:'关于我们',dispatch:dispatch,actionName:'ajaxHandleAboutus'})}
                    {isUrl({to:'/case',name:'培训项目',dispatch:dispatch,actionName:'ajaxHandleCases'})}
                    <Dropdown overlay={menu} props = {dispatch}>
                        <a className={pageName=='新闻资讯'?`ant-dropdown-link curNav`:`ant-dropdown-link`}>
                            新闻资讯 <Icon type="down" />
                        </a>
                    </Dropdown>
                    {isUrl({to:'/message',name:'在线留言',dispatch:dispatch,actionName:''})}
                    {isUrl({to:'/contact',name:'联系我们',dispatch:dispatch,actionName:''})}
                    {isUrl({to:'/job',name:'人才招聘',dispatch:dispatch,actionName:'ajaxHandleJob'})}
                        <Search
          placeholder="关键词搜索"
        //   onSearch={value => console.log(value)}
          onSearch={value=>{dispatch({type:'changenav/ajaxHandleSearch', payload:{Title:value}}),dispatch({type:'changenav/changeName', payload:{pageName:'站内搜索'}})}}
          style={{ width: 200, height:30, top:8 }}
        />
                </div>
            </div>
        );
    }

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
