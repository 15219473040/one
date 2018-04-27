import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { Router, Route, hashHistory, IndexRedirect } from 'react-router';

import App from './App';
import Page from './Page';
import Buttons from './component/general/Buttons';
import Icons from './component/general/Icons';
 

const Public =()=>(<h4>about</h4>);
const Protected = () => (<h4>Protected</h4>);


ReactDOM.render(
    <Router history={hashHistory}>
        <Route path={"/"} component={Page}>
            <IndexRedirect to="/app/general/button" />
            <Route path={"app"} component={App}>
                <Route path={"general"} >
                    <Route path={"button"} component={Buttons}/>
                    <Route path={"icon"} component={Icons}/>
                </Route>
            </Route>
        </Route>
    </Router>


    , document.getElementById('root'));
registerServiceWorker();