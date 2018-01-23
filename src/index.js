import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import App from './components/App';
import "../node_modules/video-react/dist/video-react.css";
require ('./index.css');

ReactDOM.render(<App />, document.getElementById('react-div'));
