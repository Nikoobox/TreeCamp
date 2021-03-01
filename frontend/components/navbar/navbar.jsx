import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { Dropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { HiMenu } from 'react-icons/hi';
import { CgMenu } from 'react-icons/cg';

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
                <li> <Link to="/" onClick={() => this.props.openModal('signup')} className='navbar-link hide-link'>Sign Up</Link>  </li>    
                <li><Link to="/" onClick={() => this.props.openModal('login')} className='navbar-link hide-link'>Log In</Link> </li>
                <Dropdown className='dropdown'>
                    <Dropdown.Toggle variant="success" id="">
                        <div className='burger'>
                            <CgMenu />

                        </div>
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <LinkContainer to='/'>
                            <Dropdown.Item id='' onClick={() => this.props.openModal('signup')}>
                                Sign Up
                            </Dropdown.Item>
                        </LinkContainer>
                        <LinkContainer to='/'>
                            <Dropdown.Item onClick={() => this.props.openModal('login')}>Log In</Dropdown.Item>
                        </LinkContainer>
                    </Dropdown.Menu>
                </Dropdown>
            </> : 
            <>
                <li className='navbar-welcome-user hide-link' onClick={this.showUser}>Welcome,<span> {currentUser.first_name}</span>!</li>

                <li ><Link to="/"><button onClick={() => logout()} className='navbar-logout-btn hide-link'>Log Out</button></Link></li>

                <Dropdown className='dropdown'>
                    <Dropdown.Toggle variant="success" id="">
                        <div className='burger'>
                            <CgMenu />
                        </div>
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        {/* <LinkContainer to='/'> */}
                            <Dropdown.Item onClick={this.showUser}>{currentUser.first_name}</Dropdown.Item>
                        {/* </LinkContainer> */}
                        <LinkContainer to='/'>
                            <Dropdown.Item id='' onClick={() => logout()}>
                                Log Out
                            </Dropdown.Item>
                        </LinkContainer>
                    </Dropdown.Menu>
                </Dropdown>
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