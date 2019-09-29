import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import AboutPage from './routes/AboutPage';
import MessagePage from './routes/MessagePage';
import CasePage from './routes/CasePage';
import ComNews from './routes/ComNews';
import Detail from './routes/Detail';
import Page404 from './routes/Page404';
import Contact from './routes/Contact';
import AboutUs from './routes/AboutUs';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        {/* //about静态页面 */}
        <Route path="/about" exact component={AboutUs} />
        <Route path="/case" exact component={CasePage} />
        <Route path="/message" exact component={MessagePage} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/job" exact component={ComNews} />
        <Route path="/companyNews" exact component={ComNews} />
        <Route path="/video" exact component={ComNews} />
        <Route path="/tradeNews" exact component={ComNews} />
        <Route path="/search"  component={ComNews} />
        <Route path="/detail/:id" exact component={Detail} />
        <Route path="/notice" exact component={ComNews} />
        <Route component={Page404} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
