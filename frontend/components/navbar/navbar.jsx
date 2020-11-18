import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component{
    constructor(props){
        super(props);
    }


    render(){
        const { currentUser, logout } = this.props;
        console.log(this.props)
        return(
            <div className='navbar-container'>
                {/* <a href="/"><img src={window.hipcamp_logo} alt="" /></a> */}
                <a href="/" className='nav-logo-image'>TREECAMP</a>
                
                <div className='nav-right'>
                    {/* <a href="/" onClick={() => this.props.openModal('signup')} className='nav-right-link'>Sign Up</a>

                    <a href="/" onClick={() => this.props.openModal('login')} className='nav-right-link'>Log In</a> */}
                    
                    <Link to="/" >About</Link>
                  
                    <Link to="/" onClick={() => this.props.openModal('signup')} >Sign Up</Link>
                
                    <Link to="/" onClick={() => this.props.openModal('login')} >Log In</Link>
                   
                </div>

            </div>
        )
    }
}

export default Navbar;