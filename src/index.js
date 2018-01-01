import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { observe } from './Game'

observe(position => {
    ReactDOM.render(<App position={position} />, document.getElementById('root'));
    registerServiceWorker();
})
