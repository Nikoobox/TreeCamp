import React from 'react';
import { FaGithub, FaLinkedin, FaRegUser, FaChevronUp } from 'react-icons/fa'; 

class NotFoundPage extends React.Component{
    constructor(props){
        super(props);

    }


    render(){
        return(
            <div className='page-not-found-container'> 
                <div className='container'>
                    <div className='image-container'>
                        <img src={window.page_not_found} alt="" className='404-image' />

                        
                    </div>
                        <div className='message'>404 Error</div>    
                        <div className='message-sub'>No trees were found here...</div>  

                </div>
            </div>
        )
    }
}

export default NotFoundPage;