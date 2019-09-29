import request from '../utils/request';


export function query() {
  return request('/api/users',);
}


const url =  'http://byw6919160001.my3w.com/api/GetList'
const postUrl = 'http://byw6919160001.my3w.com/api/AddMessage'
const postDetail = 'http://byw6919160001.my3w.com/api/GetById'

//新闻资讯
export function queryNews(data) {
  return request(url, data);
}

//公司新闻
export function queryComNews(data) {
  return request(url, data);
}

//行业资讯
export function queryTradeNews(data) {
  return request(url, data);
}

//培训项目
export function queryCase(data) {
  return request(url, data);
}

//关于我们
export function queryAboutus(data) {
  return request(url, data);
}

//首页公告
export function queryNotice(data){
  return request(url, data);
}

//首页公告详情
export function queryDetail(data){
  return request(postDetail, data);
}

//搜索
export function querySearch(data){
  //data =  {key: "99"}
  return request(url, data);
}

//首页公告
export function queryJob(data){
  return request(url, data);
}

//公司视频
export function queryVideo(data){
  return request(url, data);
}

//提交表单留言
export function queryMessage(data){
  return request(postUrl, data);
}

export default {
  queryNews:queryNews,
  queryComNews:queryComNews,
  queryTradeNews:queryTradeNews,
  queryCase:queryCase,
  queryAboutus:queryAboutus,
  queryNotice:queryNotice,
  queryDetail:queryDetail,
  querySearch:querySearch,
  queryJob:queryJob,
  queryVideo:queryVideo,
  queryMessage:queryMessage
}
