import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTree } from '@fortawesome/free-solid-svg-icons';

class Navbar extends React.Component{
    constructor(props){
        super(props);
    }


    render(){
        console.log(this.props)
        const { currentUser, logout } = this.props;
        const element = <FontAwesomeIcon icon={faTree} />

        // const whenCurrentUser = currentUser === 'true' ? 
        //     <>
        //     <Link to="/" onClick={() => this.props.openModal('signup')} >Sign Up</Link>    
        //     <Link to="/" onClick={() => this.props.openModal('login')} >Log In</Link> </> : <button onClick={() => logout()}>Log Out</button>

        return(
            <div className='navbar-container'>
                <a href="/" className='nav-logo-image'><span>TREE</span>{element}CAMP</a>

                <div className='nav-right'>

                    <Link to="/" >About</Link>
                    {/* {whenCurrentUser} */}
                    <Link to="/" onClick={() => this.props.openModal('signup')} >Sign Up</Link>
                
                    <Link to="/" onClick={() => this.props.openModal('login')} >Log In</Link>
                   
                </div>

            </div>
        )
    }
}

export default Navbar;