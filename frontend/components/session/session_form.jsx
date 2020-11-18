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
        console.log(this.props.errors);
        //if no errors then close modal, otherwise show error messages
        if (this.props.errors.length === 0){
            this.props.closeModal();
        }
    }

    update(field) {
        return (e) => {
            this.setState({ [field]: e.currentTarget.value })
        }
    }

    render() {
        const { errors, formType, message, processForm, closeModal, buttonText} = this.props;
        const { first_name, last_name, email, password } = this.state;
        // console.log(errors);

        const renderErrs = errors.map((err, idx) => {
        return <div key={idx}> {err} </div>
        })

        const signUpFields = formType === 'Sign Up' ? <div className='session-form-signup'>    
            <input onChange={this.update('first_name')} 
                type="text" name="firstname" 
                value={first_name} 
                placeholder='First name' 
                className='session-form-input'/>

            <input onChange={this.update('last_name')} 
                type="text" name="lastname" 
                value={last_name} 
                placeholder='Last name' 
                className='session-form-input'/>
            </div> : '';

        const headerMessage = formType === 'Log In' ? 'Welcome back!' : 'Join Tree Camp';

        return (
            <div className='session-modal'>
                <h1> {message} </h1>
                <h1>{headerMessage}</h1>

                <form onSubmit={this.handleSubmit} className='session-form'>

                    {signUpFields}
                     
                    <input onChange={this.update('email')} type="email" name="email" value={email} placeholder='Email password' className='session-form-input'/>
                    
                    <input onChange={this.update('password')} type="password" name="password" value={password} placeholder='Create a password' className='session-form-input'/>

                    <button className='session-form-button'> {buttonText} </button>
                </form>

                <div>
                    {renderErrs}    
                </div>
            </div>
        )
    }
}

export default SessionForm;