import React, { Component } from 'react';
import NavBarHeader from './Nav';
import Signin from './auth/signin';
import Video from './video/Video';
import PostForm from './PostForm';

export default class App extends Component {
    render() {
        return (
            <div>
                <NavBarHeader />
                {this.props.children}
            </div>
        );
    }
}