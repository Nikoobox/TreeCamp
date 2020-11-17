import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            first_name: "",
            last_name: "",
            email: "",
            password: "" };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }

    update(field) {
        return (e) => {
            this.setState({ [field]: e.currentTarget.value })
        }
    }

    render() {
        const { errors, formType, processForm, currentUser } = this.props;
        const { first_name, last_name, email, password } = this.state;
        console.log(errors);
       
        const signUpFields = formType === 'signup' ? <>    
            <label> First name:
                <input onChange={this.update('first_name')} type="text" name="firstname" value={first_name} />
            </label>
            <label> Last name:
                        <input onChange={this.update('last_name')} type="text" name="lastname" value={last_name} />
            </label></> : '' ;
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h1> {formType} </h1>

                    <label> Email: 
                        <input onChange={this.update('email')} type="email" name="email" value={email} />
                    </label>

                    <label> Password: 
                        <input onChange={this.update('password')} type="password" name="password" value={password} />
                    </label>

                    {signUpFields}

                    <button> {formType} </button>
                </form>
            </div>
        )
    }
}

export default SessionForm;