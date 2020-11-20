import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTree } from '@fortawesome/free-solid-svg-icons';

class Navbar extends React.Component{
    constructor(props){
        super(props);
    }


    render(){
        // console.log(this.props)
        const { currentUser, logout } = this.props;
        const element = <FontAwesomeIcon icon={faTree} />

        const whenCurrentUser = !currentUser ? 
            <>
                <li> <Link to="/" onClick={() => this.props.openModal('signup')} >Sign Up</Link>  </li>    
                <li><Link to="/" onClick={() => this.props.openModal('login')} >Log In</Link> </li>
            </> : 
            <li ><button onClick={() => logout()} className='navbar-logout-btn'>Log Out</button></li>

        return(
            <div className='navbar-container'>
                <a href="/" className='nav-logo-image'><span>TREE</span>{element}CAMP</a>

                <ul className='nav-right'>
                    <li>  <Link to="/" >About</Link> </li>
                    {/* <Link to="/" >About</Link> */}
                    {whenCurrentUser}
                    {/* <Link to="/" onClick={() => this.props.openModal('signup')} >Sign Up</Link>
                
                    <Link to="/" onClick={() => this.props.openModal('login')} >Log In</Link> */}
                   
                </ul>

            </div>
        )
    }
}

export default Navbar;