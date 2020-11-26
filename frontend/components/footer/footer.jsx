import React from 'react';
import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faGithub} from '@fortawesome/free-solid-svg-icons';
import { FaGithub, FaLinkedin, FaRegUser, FaChevronUp } from 'react-icons/fa';
import { BsFillTriangleFill } from "react-icons/bs";
// import { FaBeer } from "@react-icons/all-files/fa/FaBeer";
// BsFillTriangleFill
class Footer extends React.Component{
    constructor(props){
        super(props);
    }

    getYear() {
        return new Date().getFullYear();
    }

    // AiFillGithub
    
    render(){
        // const githubIcon = <FontAwesomeIcon icon={faGithub} />
        return(
            <div className='footer-container'>
                <div className="footer-date">
                    © {this.getYear()} by <a href='https://nikolayshatalov.com/'>Nikolay Shatalov</a>
                </div>

                <div className="footer-message">
                    Made with love, passion and <a href='https://www.appacademy.io/'>Aap Academy</a> guidance
                </div>

                <div className="footer-social">
                    <div className="social-item">
                        <a href='https://nikolayshatalov.com/'>
                            <FaRegUser /> 
                        </a>
                    </div>
                    <div className="social-item">
                        <a href='https://github.com/Nikoobox/TreeCamp'>
                            <FaGithub />
                        </a>

                    </div>
                    <div className="social-item">
                        <a href='https://www.linkedin.com/in/nikolay-shatalov-0963b28b/'>
                            <FaLinkedin />
                        </a>
                    </div>
                    <div className="social-item">
                        <a href='https://www.hipcamp.com/'>
                            <BsFillTriangleFill />
                        </a>
                    </div>
                </div>

                
            </div>
        )
    }
}

export default Footer;