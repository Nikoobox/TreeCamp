import React from 'react';
import { Link } from 'react-router-dom';

class Greeting extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { currentUser, logout } = this.props;
        const display = currentUser ? (
            <div>
                <h1>Welcome {currentUser.first_name} {currentUser.last_name} !</h1>
                <button onClick={() => logout()}>Log Out</button>
            </div>
        ) : (
                <div>
                    {/* <Link to="/signup" onClick={() => this.props.openModal('signup')}>Sign Up</Link>
                    <br/>
                    <Link to="/login" onClick={() => this.props.openModal('login')}>Log In</Link> */}
                    <Link to="/" onClick={() => this.props.openModal('signup')}>Sign Up</Link>
                    <br />
                    <Link to="/" onClick={() => this.props.openModal('login')}>Log In</Link>
                </div>
            )
        return (
            <>
                {display}
            </>
        )
    }
}

export default Greeting;
