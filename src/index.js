import dva from 'dva';
import './index.css';
import { createBrowserHistory } from 'history';

// 1. Initialize
const app = dva();

// 2. Plugins
// app.use({});

// 3. Model
app.model(require('./models/changeNav').default);

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');

