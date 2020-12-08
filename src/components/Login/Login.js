import { Field, reduxForm } from 'redux-form';
import React from 'react';
import { Input } from '../common/FormValidComponent';
import { required } from '../common/FormValidations';
import { loginhunkCreator } from '../../redux/authReducer';
import { connect } from 'react-redux';
import style from '../common/FormValid.module.css'

let Login = props => {
    const { handleSubmit } = props
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="email">Email</label>
                <Field name="email" component={Input} type="email" validate={[required]} />
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <Field name="password" component={Input} type="password" validate={[required]} />
            </div>
            <div>
                <Field name="rememberMe" id="rememberMe" component="input" type="checkbox" />
            </div>
            <div>
                <span className={style.uncorrectauth}>{props.error}</span>
            </div>
            <button type="submit">Submit</button>
        </form>
    )
}

const LoginFormHOC = reduxForm({ form: 'login' })(Login)

class ContactPage extends React.Component {



    submit = values => {
        this.props.loginhunkCreator(values.email, values.password, values.rememberMe);
        console.log(values);
    }
    render() {
        return <LoginFormHOC onSubmit={this.submit} />
    }
}

export default connect(null, { loginhunkCreator })(ContactPage)