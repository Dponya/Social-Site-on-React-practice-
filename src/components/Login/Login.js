import { Field, reduxForm } from 'redux-form';
import React from 'react';
import { Input } from '../common/FormValidComponent';
import { required } from '../common/FormValidations'

let Login = props => {
    const { handleSubmit } = props
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="firstName">First Name</label>
                <Field name="firstName" component={Input} type="text" validate={[required]} />
            </div>
            <div>
                <label htmlFor="lastName">Last Name</label>
                <Field name="lastName" component={Input} type="text" validate={[required]} />
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <Field name="email" component={Input} type="email" validate={[required]} />
            </div>
            <button type="submit">Submit</button>
        </form>
    )
}

const LoginFormHOC = reduxForm({ form: 'login' })(Login)

class ContactPage extends React.Component {
    submit = values => {
        // print the form values to the console
        console.log(values)
    }
    render() {
        return <LoginFormHOC onSubmit={this.submit} />
    }
}

export default ContactPage;