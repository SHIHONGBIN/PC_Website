import React from 'react';
import styles from './../../routes/IndexPage.css'
import {Link} from 'dva/router'
import {Pagination} from 'antd'
import {connect} from 'dva'
import PropTypes from 'prop-types'

class BreadNav extends React.Component {
  
  state = {
    current: this.props?this.props.changenav.indexData.pagination.curIndex:1,
    perPage: this.props?this.props.changenav.indexData.pagination.perPage:1
  };

  onChange = page => {
    const {dispatch} = this.props?this.props:''
    this.setState({
      current: page,
    });
    dispatch({type:'changenav/changePaginationHandle', payload: {curIndex: page}})
  };

  render() {
    return this.props.props?<Pagination pageSize={this.state.perPage} current={this.state.current} onChange={this.onChange} total={this.props.props.length} />:'';
  }
}

BreadNav.propTypes = {
  changenav: PropTypes.object
};

const mapStateToProps = (state) => {
  return {
    changenav: state.changenav
  }
}

export default connect(mapStateToProps)(BreadNav) ;
