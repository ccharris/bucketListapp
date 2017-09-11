import React from 'react';
import ReactDOM from 'react-dom';
import reduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';


import App from './components/app';
import Signin from './components/auth/signin';
import Signout from './components/auth/signout';
import Signup from './components/auth/signup';
import PostForm from './components/PostForm';
import ListsShow from './components/ListItems';
import ListShow from './components/ListShow';
import UpdateList from './components/UpdateListItem';
import {AUTH_USER } from './actions/types';
import reducers from './reducers';
import RequireAuth from './components/auth/require_auth';

var createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const token = localStorage.getItem('token');
if (token) {
    store.dispatch({ type: AUTH_USER });
}

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path='/' component={App}>
                <Route path="signin" component={Signin} />
                <Route path="signout" component={Signout} />
                <Route path="signup" component ={Signup} />
                <Route path="newitem" component={RequireAuth(PostForm)} />
                <Route path="items" component={RequireAuth(ListsShow)} />
                <Route path="items/:id" component={RequireAuth(ListShow)} />
                <Route path="updateitem/:id" component={RequireAuth(UpdateList)} />
            </Route>
            
        </Router>
    </Provider>,
    document.querySelector('.container')
);