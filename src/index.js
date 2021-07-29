require('file-loader?name=[name].[ext]!./index.html');

import React from 'react';
import  ReactDOM  from 'react-dom';
import { store } from './store';
import {Provider} from 'react-redux';

import './App.scss';
import {App} from './App';

import {configureFakeBackend} from './helpers';
configureFakeBackend();

ReactDOM.render(
    
    <Provider store={store}>
        <App />,
    </Provider>,
    document.getElementById('app')
);