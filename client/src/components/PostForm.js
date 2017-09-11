import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { createPost } from '../actions/index';
import { Link } from 'react-router';
import Video from './video/Video'

class PostForm extends Component {
    handleFormSubmit(formProps){
        this.props.createPost(formProps);
    }
    render() {
        const { handleSubmit, fields: { title, category, url, content}} = this.props;
        return(
            <div>
                <Video />
                <div className="col-4-md">
                    <h3>Create a New Post</h3>
                    <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
                        <fieldset className="form-group">
                            <label>Title</label>
                            <input {...title} className="form-control" />
                        </fieldset>
                        <fieldset className="form-group">
                            <label>Category</label>
                            <input {...category} className="form-control" />
                        </fieldset>
                        <fieldset className="form-group">
                            <label>URL</label>
                            <input {...url} className="form-control" />
                        </fieldset>
                        <fieldset className="form-group">
                            <label>Content</label>
                            <textarea {...content} className="form-control" />
                        </fieldset>
                        <button action="submit" className="btn btn-primary">Submit</button>
                        <Link to="/" className="btn btn-danger">Cancel</Link>
                    </form>
                </div>
            </div>
        );
    }
}

export default reduxForm({
                    form: 'PostsNewForm',
                    fields: ['title', 'category', 'url', 'content']
}, null, { createPost })(PostForm);