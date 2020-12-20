import React from 'react';
import {render} from 'react-dom';
import App from './App';
import AltApp from './AltApp';
import './css/bootstrap.css';
import './sass/app.scss';

// render(<App />, document.getElementById('root'));
render(<AltApp />, document.getElementById('root'));