import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './js/components/App';
import registerServiceWorker from './registerServiceWorker';
import './css/index.css';

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);
registerServiceWorker();
