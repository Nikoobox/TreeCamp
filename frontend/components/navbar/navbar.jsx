import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTree } from '@fortawesome/free-solid-svg-icons';
// import { animateScroll as scroll } from 'react-scroll';
// import Scroll from "react-scroll";
// const ScrollLink = Scroll.Link;

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
                {/* <li>  <Link to="/about" className='navbar-link'>About</Link> </li> */}

                {/* <li>  <ScrollLink to="/" className='navbar-link' to="about-section" smooth={true} duration={200}>About</ScrollLink> </li> */}
         
                <li> <Link to="/" onClick={() => this.props.openModal('signup')} className='navbar-link'>Sign Up</Link>  </li>    
                <li><Link to="/" onClick={() => this.props.openModal('login')} className='navbar-link'>Log In</Link> </li>
            </> : 
            <>
                <li className='navbar-welcome-user' onClick={this.showUser}>Welcome,<span> {currentUser.first_name}</span>!</li>
                {/* <li>  <Link to="/about" className='navbar-link'>About</Link> </li> */}
                {/* <li>  <ScrollLink to="/" className='navbar-link' to="about-section"  duration={200}>About</ScrollLink> </li> */}

                <li ><Link to="/"><button onClick={() => logout()} className='navbar-logout-btn'>Log Out</button></Link></li>
            </>

        return(
            <div className='navbar-container'>
                <a href="/" className='nav-logo-image'><img src={`${tree_camp_logo}`} alt=""/>TREECAMP</a>
                {/* <a href="/" className='nav-logo-image'><span>TREE</span>{element}CAMP</a> */}
                <ul className='nav-right'>
                    
                    
                    {whenCurrentUser}
                   
                </ul>

            </div>
        )
    }
}

export default withRouter(Navbar);