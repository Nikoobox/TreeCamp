import React from 'react';
import { FaGithub, FaLinkedin, FaRegUser, FaChevronUp } from 'react-icons/fa';
import { BsFillTriangleFill } from "react-icons/bs";


class Footer extends React.Component{
    constructor(props){
        super(props);
    }

    getYear() {
        return new Date().getFullYear();
    }
    
    render(){
        return(
            <div className='footer-container'>
                <div className="footer-date">
                    © {this.getYear()} by <a href='https://nikolayshatalov.com/' rel='noopener noreferrer' target="_blank">Nikolay Shatalov</a>
                </div>

                <div className="footer-message">
                    Made with love, passion and hope for more trees
                </div>
                <div className="footer-social">
                    <div className="social-item">
                        <a href='https://nikolayshatalov.com/' rel='noopener noreferrer' target="_blank">
                            <FaRegUser /> 
                        </a>
                    </div>
                    <div className="social-item">
                        <a href='https://github.com/Nikoobox/TreeCamp' rel='noopener noreferrer' target="_blank">
                            <FaGithub />
                        </a>

                    </div>
                    <div className="social-item">
                        <a href='https://www.linkedin.com/in/nikolay-shatalov-0963b28b/' rel='noopener noreferrer' target="_blank">
                            <FaLinkedin />
                        </a>
                    </div>
                    <div className="social-item">
                        <a href='https://www.hipcamp.com/' rel='noopener noreferrer' target="_blank">
                            <BsFillTriangleFill />
                        </a>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default Footer;