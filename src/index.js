import React from 'react';
import { render } from 'react-dom';
import Router from './components/Router';
import App from './components/App';
import NotFound from './components/NotFound';
import './css/style.css';


render(<Router />, document.querySelector('#main'))
