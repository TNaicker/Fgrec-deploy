const React = require('react');
const ReactDOM = require('react-dom');
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import Home from './pages/home';
import Index from './pages/index';
import News from './pages/news';
import FriendFinder from './pages/friendFinder';
import Register from './pages/Register';
import Profile from './pages/profile';
import Test from './pages/test';
import Utils from './utils';
import Login from './pages/login';
import EditProf from './pages/editProfile'
import EditCrafts from './pages/editCrafts';
import SupportSetup from './pages/supportSetup';
import SupportTest from './pages/support';

const logout = (nextState, replace, callback) => {
  Utils.removeCredentials();
  replace('/home');
  callback();
}

const requireLogin =
  (nextState, replace, callback) => {
    Utils.createClient()
      .authenticate()
      .then(() => {
        callback()
      })
      .catch((err) => {
        logout(nextState, replace, callback)
      });
  }

// Wait for the window to load
window.onload = function () {
  const rootApp = document.querySelector('#root');

  ReactDOM.render(
    <Router history={hashHistory}>
      <Route path="/" component={Index}>
        <Route path="/home" component={Home}/>
        <Route path="/news" component={News}/>
        <Route path="/friendfinder" component={FriendFinder}/>
        <Route path="/register" component={Register} onEnter={!requireLogin}/>
        <Route path="/profile" component={Profile}/>
        <Route path="/test" component={Test}/>
        <Route path="/logout" component={Register} onEnter={logout}/>
        <Route path="/login" component={Login} onEnter={!requireLogin}/>
        <Route path="/profile/edit" component={EditProf}/>
        <Route path="/profile/edit/crafts" component={EditCrafts}/>
        <Route path="/profile/edit/supports" component={SupportSetup}/>
        <Route path="/supporttest" component={SupportTest}/>
      </Route>
    </Router>,
    rootApp
  );
}
