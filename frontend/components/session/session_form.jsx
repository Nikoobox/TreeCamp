import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: "",
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
        const { username, password } = this.state;

        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h1> {formType} </h1>

                    <label> Username
                        <input onChange={this.update('username')} type="text" name="username" value={username} />
                    </label>

                    <label> Password
                        <input onChange={this.update('password')} type="password" name="password" value={password} />
                    </label>

                    <button> {formType} </button>
                </form>
            </div>
        )
    }
}

export default SessionForm;