import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index';
import { Link } from 'react-router';
import axios from 'axios';

const ROOT_URL = 'http://localhost:3000';
const config = {
    headers: { authorization: localStorage.getItem('token')}
}

class ListItems extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        }
    }

    componentWillMount() {
        this.props.fetchPosts();
    }
    renderItems() {
        return this.props.posts.map((post) => {
            return (
                <li className="list-group-item" key={post._id}>
                    <Link to={"items/" + post._id}>
                        <span className="float-left">{post.category}</span>:&nbsp;&nbsp;&nbsp;
                        <span className="float-right">{post.title}</span>
                    </Link>
                </li>
            );
        });
    }
    render() {
        if(this.props.posts == 0) {
            return (
                <div> <h3> Loading... </h3> </div>
            );
        } else {
            return (
                <div className="col-md-6">
                    <div className="row">
                        <div className="col-sm-8 text-xs-left"> 
                            <h3 className="text-xs-left">Lists</h3>
                        </div>
                        <div className="col-sm-4 text-xs-right">
                            <Link to="/newitem" className="btn btn-primary">
                                Add a List item
                            </Link>
                        </div>
                    </div>
                    <div id="space"></div>
                    <ul className="list-group">
                        {this.renderItems()}
                    </ul>
                </div>
            );
        }
    }
}

function mapStateToProps(state){
    return { posts: state.posts.all };
}

export default connect(mapStateToProps, actions)(ListItems);