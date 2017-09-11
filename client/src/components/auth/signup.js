import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import * as actions from '../../actions';

class Signup extends Component {
    handleFormSubmit(formProps){
        this.props.signupUser(formProps);
    }
    renderAlert(){
        if(this.props.errorMessage){
            return(
                <div className="alert alert-danger">
                    <strong> Sorry, </strong> {this.props.errorMessage}
                </div>
            )
        }
    }
    render() {
        const { handleSubmit, fields: { email, password, confirmPassword}} = this.props;
        return(
            <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
                <fieldset className="form-group">
                    <label>Email:</label>
                    <input {...email} className="form-control" />
                    {email.touched && email.error && <div className="error">{email.error}</div>}
                </fieldset>
                <fieldset className="form-group">
                    <label>Password:</label>
                    <input {...password} type="password" className="form-control" />
                    {password.error}
                </fieldset>
                <fieldset className="form-group">
                    <label>Confirm Password:</label>
                    <input {...confirmPassword} type="password" className="form-control" />
                    { confirmPassword.touched && confirmPassword.error && <div className="error">{confirmPassword.error}</div>}
                </fieldset>
                {this.renderAlert()}
                <button action="submit" className="btn btn-primary">Sign in</button>
            </form>
        );
    }
}

function mapStateToProps(state){
    return { errorMessage: state.auth.error };
}

function validate(formProps) {
    const errors = {};
    if(!formProps.email) {
        errors.email = 'Please enter an email address';
    }
    if (!formProps.password) {
        errors.password = "Please enter a password";
    }
    if(!formProps.confirmPassword) {
        errors.confirmPassword = "Please enter the same password as confirmation.";
    }
    if(formProps.password !== formProps.confirmPassword) {
        errors.password = "Passwords must match";
    }

    return errors;
}

export default reduxForm({
                    form: 'signup',
                    fields: ['email', 'password', 'confirmPassword'],
                    validate: validate
}, mapStateToProps, actions)(Signup);