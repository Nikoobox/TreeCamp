import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { Dropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { CgMenu, CgClose } from 'react-icons/cg';

class Navbar extends React.Component{
    constructor(props){
        super(props);

        this.state={menuOpen:false};
        this.showUser = this.showUser.bind(this);
        this.toggleIcon = this.toggleIcon.bind(this);

    }
    setDefaultIcon(){
        this.setState({menuOpen: false});
        this.props.openModal('login');
    }

    showUser(){
        this.props.history.push(`/users/${this.props.currentUserId}/bookings`)
    }

    toggleIcon(){
        this.setState({
            menuOpen:!this.state.menuOpen
        })
    }

    render(){
        const menuIconToRend = this.state.menuOpen ? <CgMenu />:<CgMenu />;
        

        const { currentUser, logout } = this.props;

        const socialDropLinks = 
            <>
                <Dropdown.Item href="https://nikolayshatalov.com/" rel='noopener noreferrer' target="_blank">
                    Portfolio
                </Dropdown.Item>
                <Dropdown.Item href='https://www.linkedin.com/in/nikolay-shatalov-0963b28b/' rel='noopener noreferrer' target="_blank">
                    LinkedIn
                </Dropdown.Item>
                <Dropdown.Item href='https://github.com/Nikoobox/TreeCamp' rel='noopener noreferrer' target="_blank">
                    Github
                </Dropdown.Item>
            </>

        const whenCurrentUser = !currentUser ? 
            <>
                <li> <Link to="/" onClick={() => this.props.openModal('signup')} className='navbar-link hide-link'>Sign Up</Link>  </li>    
                <li><Link to="/" onClick={()=>this.props.openModal('login')} className='navbar-link hide-link'>Log In</Link> </li>
                <Dropdown className='dropdown'>
                    <Dropdown.Toggle variant="success" id="">
                        <div className='burger' onClick={this.toggleIcon}>
                            {menuIconToRend}
                        </div>
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <LinkContainer to='/'>
                            <Dropdown.Item onClick={() => this.props.openModal('login')}>Log In</Dropdown.Item>
                        </LinkContainer>
                        <LinkContainer to='/'>
                            <Dropdown.Item id='' onClick={() => this.props.openModal('signup')}>
                                Sign Up
                            </Dropdown.Item>
                        </LinkContainer>
                        
                        {socialDropLinks}

                        
                    </Dropdown.Menu>
                </Dropdown>
            </> : 
            <>
                <li className='navbar-welcome-user hide-link' onClick={this.showUser}>Welcome,<span> {currentUser.first_name}</span>!</li>

                <li ><Link to="/"><button onClick={() => logout()} className='navbar-logout-btn hide-link'>Log Out</button></Link></li>

                <Dropdown className='dropdown' >
                    <Dropdown.Toggle variant="success">
                        <div className='burger' onClick={this.toggleIcon}>
                            {menuIconToRend}
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

                        {socialDropLinks}

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