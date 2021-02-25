import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

class Navbar extends React.Component{
    constructor(props){
        super(props);
        this.showUser = this.showUser.bind(this);
    }

    showUser(){
        this.props.history.push(`/users/${this.props.currentUserId}/bookings`)
    }

    render(){
        const { currentUser, logout } = this.props;

        const whenCurrentUser = !currentUser ? 
            <>
                <li> <Link to="/" onClick={() => this.props.openModal('signup')} className='navbar-link'>Sign Up</Link>  </li>    
                <li><Link to="/" onClick={() => this.props.openModal('login')} className='navbar-link'>Log In</Link> </li>
            </> : 
            <>
                <li className='navbar-welcome-user' onClick={this.showUser}>Welcome,<span> {currentUser.first_name}</span>!</li>

                <li ><Link to="/"><button onClick={() => logout()} className='navbar-logout-btn'>Log Out</button></Link></li>
            </>

        return(
            <div className='navbar-container'>
                <a href="/" className='nav-logo-image'><img src={`${tree_camp_logo}`} alt=""/>TREECAMP</a>
                <ul className='nav-right'>
                    
                    {whenCurrentUser}

                </ul>

            </div>
        )
    }
}

export default withRouter(Navbar);