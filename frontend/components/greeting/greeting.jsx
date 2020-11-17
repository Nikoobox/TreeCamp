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
                    <Link to="/signup">Sign Up</Link>
                    <Link to="/login">Log In</Link>
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
