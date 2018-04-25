import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/materialize-css/dist/css/materialize.min.css'
import '../node_modules/animate.css/animate.min.css'
import './App.css';
import App from './App';
import Input from './components/Input';
import registerServiceWorker from './registerServiceWorker';

ReactDOM
    .render( 
            <App />, 
            document.getElementById('root')
    );
registerServiceWorker();
