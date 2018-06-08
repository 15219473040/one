import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { Router, Route, hashHistory, IndexRedirect } from 'react-router';

import App from './App';
import Page from './Page';
import Buttons from './component/general/Buttons';
import Icons from './component/general/Icons';
import Grid from './component/general/Grid';

import Login from "./component/control/Login"
import Tuchong from "./component/git/Tuchong.js"

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
                    <Route path={"grid"} component={Grid}/>
                </Route>
                <Route path={"control"} >
                    <Route path={"login"} component={Login}/>
                </Route>
                <Route path={"git"} >
                    <Route path={"tuchong"} component={Tuchong}/>
                </Route>
            </Route>
        </Route>
    </Router>


    , document.getElementById('root'));
registerServiceWorker();
