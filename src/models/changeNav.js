
import ajaxHandles from './../services/example'
import {routerRedux} from 'dva/router'
import queryString from 'querystring'
import Contact from '../routes/Contact';


function getUrlData(dispatch, name, id, seatchKey){
     switch(name){
         case '':{
             document.title = '网站首页'
             dispatch({type:'changeName', payload:{pageName:'网站首页'}})
             dispatch({type:'indexload'})
             return false
         }
         case 'about': {
             document.title = '关于我们'
             dispatch({type:'ajaxHandleNotice'})
             dispatch({type:'changeName', payload:{pageName:'关于我们'}})
             return false
         }
         case 'case': {
             document.title = '培训项目'
             dispatch({type:'ajaxHandleCases'})
             dispatch({type:'ajaxHandleNotice'})
             dispatch({type:'changeName', payload:{pageName:'培训项目'}})
             return false
         }
         case 'companyNews': {
             document.title = '公司新闻'
             dispatch({type:'ajaxHandleComNews'})
             dispatch({type:'ajaxHandleNotice'})
             dispatch({type:'changeName', payload:{pageName:'公司新闻'}})
             return false
         }
         case 'tradeNews': {
             document.title = '行业资讯'
             dispatch({type:'ajaxHandleTradeNews'})
             dispatch({type:'ajaxHandleNotice'})
             dispatch({type:'changeName', payload:{pageName:'行业资讯'}})
             return false
         }
         case 'message': {
             document.title = '在线留言'
             dispatch({type:'ajaxHandleNotice'})
             dispatch({type:'changeName', payload:{pageName:'在线留言'}})
             return false
         }
         case 'contact': {
             document.title = '联系我们'
             dispatch({type:'ajaxHandleNotice'})
             dispatch({type:'changeName', payload:{pageName:'联系我们'}})
             return false
         }
         case 'job': {
             document.title = '人才招聘'
             dispatch({type:'ajaxHandleNotice'})
             dispatch({type:'ajaxHandleJob'})
             dispatch({type:'changeName', payload:{pageName:'人才招聘'}})
             return false
         }
         case 'detail': {
             // document.title = '111'
             dispatch({type:'ajaxHandleDetail',payload:{ID: id}})
             dispatch({type:'changeName', payload:{pageName:''}})
             return false
         }
         case 'search': {
             document.title = '站内搜索'
             dispatch({type:'ajaxHandleSearch', payload: {Title:seatchKey}})
             dispatch({type:'changeName', payload:{pageName:'站内搜索'}})
             return false
         }
         case 'notice': {
             document.title = '最新公告'
             dispatch({type:'ajaxHandleNotice'})
             dispatch({type:'changeName', payload:{pageName:'最新公告'}})
             return false
         }
         case 'video': {
             document.title = '公司视频'
             dispatch({type:'ajaxHandleNotice'})
             dispatch({type:'ajaxHandleVideo'})
             dispatch({type:'changeName', payload:{pageName:'公司视频'}})
             return false
         }
         default :{
             // dispatch({type:'changeName', payload:{pageName:'网站首页'}})
             return false
         }
     }
}

export default {
    
      namespace: 'changenav',
    
      state: {
          navIndex:0,
          curName:'网站首页',
          indexData:{
              //关于我们
              aboutus:'',
              //案例
              cases:'',
              //视频
              video:'',
              //内页公司新闻
              comanynews:'',
              comanynewsTitle:'',
              //内页行业信息
              tradenews:'',
              tradenewsTitle:'',
              //公告
              notice:'',
              //详情文章ID
              pageID:'',
              //详情文章内容
              detailData:'',
              search:'',
              key:'',
              //工作列表信息
              job:'',
              //表单信息
              message:'',
              //表单未提交
              comfrimMessage:false,
              //分页信息
              pagination:{
                  perPage:6,
                  curIndex:1
              }
          },
          isTopData:{
              //首页数据
            cases:'',
            video:'',
            comanynews:'',
            comanynewsTitle:'',
            tradenews:'',
            tradenewsTitle:'',
          }
      },
    
      subscriptions: {
        setup({ dispatch, history }) {  // eslint-disable-line
            
            const name= history.location.pathname.split('/')[1]
            const id = history.location.pathname.split('/')[2]?history.location.pathname.split('/')[2]:''
            const seatchKey = history.location.search.split('=')[1]

            dispatch({type:'indexload'})
             //判断当前页面
             getUrlData(dispatch, name, id, seatchKey)
        // 点击浏览器回退事件 更新数据
           window.addEventListener('hashchange', (e)=>{
            const url = e.newURL?e.newURL.split('#')[1]:''
            const name= url.split('/')[1]
            const id = url.split('/')[2]?url.split('/')[2]:''
            const seatchKey = e.newURL.split('?')[1]?e.newURL.split('?')[1].split('=')[1]:''
            dispatch({type:'indexload'})
            //搜索特殊处理 有？ 就是search页面
            getUrlData(dispatch, name.split('?')[0]||name, id, seatchKey)
                if(name === 'contact'){
                    document.title = '联系我们'
                }
            })
        },
      },
    
      effects: {
        *fetch({ payload }, { call, put }) {  // eslint-disable-line
          yield put({ type: 'save' });
        },
        // 首页加载
        *indexload({payload}, {call, put, select}){
            document.title = '网站首页'
            const {isTopData} = yield select(state => state.changenav)
            if(isTopData.cases==''){
                var datas = {}
                yield ajaxHandles.queryComNews({ClassId:2, IsTop: 1}).then(({data})=>{datas.comanynews = data.Data; datas.comanynewsTitle='公司新闻'})
                yield ajaxHandles.queryTradeNews({ClassId:3, IsTop: 1}).then(({data})=>{datas.tradenews = data.Data; datas.tradenewsTitle='行业资讯'})
                yield ajaxHandles.queryCase({ClassId:1, IsTop:1}).then(({data})=>datas.cases = data.Data)
                // yield ajaxHandles.queryAboutus().then(({data})=>datas.aboutus = data.Data)
                yield ajaxHandles.queryVideo({ClassId:5, IsTop:1}).then(({data})=>datas.video = data.Data)
                yield ajaxHandles.queryNotice({ClassId:6, IsTop:1}).then(({data})=>datas.notice = data.Data)
                if(Object.keys(datas).length > 0){
                    yield put({type:'ajaxHandleIndex', payload:{isTopData:datas}})
                }
            }
           
        },
        // 新闻资讯
        // *ajaxHandle({payload}, {call, put, select}){
        //     document.title = '新闻资讯'
        //     const {indexData} = yield select(state => state.changenav)
        //         yield ajaxHandles.queryComNews().then(({data})=>{indexData.comanynews = data.Data; indexData.comanynewsTitle='公司新闻'})
        //         yield ajaxHandles.queryTradeNews().then(({data})=>{indexData.tradenews = data.Data; indexData.tradenewsTitle='行业资讯'})
        //         if(Object.keys(indexData).length > 0){
        //             yield put({type:'ajaxHandleFn', payload:{indexData:indexData}})
        //         }
        // },
        // 公司新闻
        *ajaxHandleComNews({payload}, {call, put, select}){
            document.title = '公司新闻'
            const {indexData} = yield select(state => state.changenav)
            const postData = {ClassId:2}
            yield ajaxHandles.queryComNews(postData).then(({data})=>{indexData.comanynews = data.Data; indexData.comanynewsTitle='公司新闻'})
            if(Object.keys(indexData).length > 0){
                yield put({type:'ajaxHandleFn', payload:{indexData:indexData}})
            }
        
        },
        // 行业资讯
        *ajaxHandleTradeNews({payload}, {call, put, select}){
            document.title = '行业资讯'
            const {indexData} = yield select(state => state.changenav)
            const postData = {ClassId:3}
            yield ajaxHandles.queryTradeNews(postData).then(({data})=>{indexData.tradenews = data.Data; indexData.tradenewsTitle='行业资讯'})
            if(Object.keys(indexData).length > 0){
                yield put({type:'ajaxHandleFn', payload:{indexData:indexData}})
        }
        },
        //关于我们
        // *ajaxHandleAboutus({payload}, {call, put, select}){
        //     document.title = '关于我们'
        //     const {indexData} = yield select(state => state.changenav)
        //     yield ajaxHandles.queryAboutus().then(({data})=>{indexData.aboutus = data.Data;})
        //     if(Object.keys(indexData).length > 0){
        //         yield put({type:'ajaxHandleFn', payload:{indexData:indexData}})
        //     }
        // },
        //培训项目内页
        *ajaxHandleCases({payload}, {call, put, select}){
            document.title = '培训项目'
            const {indexData} = yield select(state => state.changenav)
            const postData = {ClassId:1}
            indexData.detailData = ''
            yield ajaxHandles.queryCase(postData).then(({data})=>indexData.cases = data.Data)
            if(Object.keys(indexData).length > 0){
                yield put({type:'ajaxHandleFn', payload:{indexData:indexData}})
            }
        },
        //文章
        *ajaxHandleDetail({payload}, {call, put, select}){
            document.title = ''
            const {indexData} = yield select(state => state.changenav)
            const postData = {ClassId:6, IsTop:1}
            indexData.detailData = ''
            yield ajaxHandles.queryDetail(payload).then(({data})=>{indexData.pageID = data.Data.Id; indexData.detailData = data.Data})
            yield ajaxHandles.queryNotice(postData).then(({data})=>indexData.notice = data.Data)
            if(Object.keys(indexData).length > 0){
                yield put({type:'ajaxHandleFn', payload:{indexData:indexData}})
            }
        },
        //公司视频
        *ajaxHandleVideo({payload}, {call, put, select}){
            document.title = ''
            const {indexData} = yield select(state => state.changenav)
            const postData = {ClassId:5}
            yield ajaxHandles.queryVideo(postData).then(({data})=>indexData.notice = data.Data)
            if(Object.keys(indexData).length > 0){
                yield put({type:'ajaxHandleFn', payload:{indexData:indexData}})
            }
        },
        //最新公告
        *ajaxHandleNotice({payload}, {call, put, select}){
            document.title = '最新公告'
            const {indexData} = yield select(state => state.changenav)
            const postData = {ClassId:6, IsTop:1}
            yield ajaxHandles.queryNotice(postData).then(({data})=>indexData.notice = data.Data)
            if(Object.keys(indexData).length > 0){
                yield put({type:'ajaxHandleFn', payload:{indexData:indexData}})
            }
        },
        //招聘信息 
        *ajaxHandleJob({payload}, {call, put, select}){
            document.title = '招聘信息'
            const {indexData} = yield select(state => state.changenav)
            const postData = {ClassId:4}
            yield ajaxHandles.queryJob(postData).then(({data})=>indexData.job = data.Data)
            if(Object.keys(indexData).length > 0){
                yield put({type:'ajaxHandleFn', payload:{indexData:indexData}})
            }
        },
        //搜索结果
        *ajaxHandleSearch({payload}, {call, put, select}){
            document.title = '搜索结果'
            const {indexData} = yield select(state => state.changenav)
            yield ajaxHandles.querySearch(payload).then(({data})=>indexData.search = data.Data)
            if(Object.keys(indexData).length > 0){
                yield put({type:'ajaxHandleFn', payload:{indexData:indexData}})
                yield put(routerRedux.push({
                    pathname:'/search',
                    search:queryString.stringify({
                        Title:payload?payload.Title:indexData.Title
                  })
                }))
            }
        },
        //在线留言
        *ajaxHandleMessage({payload,callback}, {call, put, select}){
            document.title = '在线留言'
            const {indexData} = yield select(state => state.changenav)
            indexData.message = payload
            var fromData = ''
            yield ajaxHandles.queryMessage(payload).then(({data})=>fromData = data)
            if(fromData&&fromData.Success){
                indexData.comfrimMessage = true
                if(Object.keys(indexData).length > 0){
                    callback(indexData);
                    yield put({type:'ajaxHandleFn', payload:{indexData:indexData}})
                }
            }  
        },
        //回到首页
        *gotoIndex({payload}, {call, put, select}){
            const {indexData} = yield select(state => state.changenav)
            document.title = '网站首页'
            //当前没数据 重新载入数据
            var datas = {}
            yield ajaxHandles.queryComNews({ClassId:2, IsTop: 1}).then(({data})=>{datas.comanynews = data.Data; datas.comanynewsTitle='公司新闻'})
            yield ajaxHandles.queryTradeNews({ClassId:3, IsTop: 1}).then(({data})=>{datas.tradenews = data.Data; datas.tradenewsTitle='行业资讯'})
            yield ajaxHandles.queryCase({ClassId:1, IsTop:1}).then(({data})=>datas.cases = data.Data)
            // yield ajaxHandles.queryAboutus().then(({data})=>datas.aboutus = data.Data)
            yield ajaxHandles.queryVideo({ClassId:5, IsTop:1}).then(({data})=>datas.video = data.Data)
            yield ajaxHandles.queryNotice({ClassId:6, IsTop:1}).then(({data})=>datas.notice = data.Data)
            if(Object.keys(datas).length > 0){
                yield put({type:'ajaxHandleIndex', payload:{isTopData:datas}})
            }
        },
        //分页
        *changePaginationHandle({payload}, {call, put, select}){
            const {indexData} = yield select(state => state.changenav)
            indexData.pagination.curIndex = payload.curIndex
            if(Object.keys(indexData).length > 0){
                yield put({type:'ajaxHandleFn', payload:{indexData:indexData}})
            }
        }
      },
    
      reducers: {
        save(state, action) {
          return { ...state, ...action.payload };
        },
        //内页名字改变
        changeName(state, action){
            var indexData = state.indexData
            indexData.pagination.curIndex = 1
            return { ...state,indexData:indexData, ...action.payload, news:'' };
        },
        //更新数据
        ajaxHandleFn(state, action){
            return { ...state, ...action.payload };
        },
        ajaxHandleIndex(state, action){
            return { ...state, ...action.payload };
        }
      },
    
    };
    