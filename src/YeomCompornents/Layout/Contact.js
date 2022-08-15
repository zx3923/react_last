import React from 'react';
import './Contact.css'

const Contact = () => {
    return (
        <div className='contact_body'>
            <div className='img_box'><img src="img/contact_img1.jpg" alt="contact_img" /></div>
            <ul>
                <li>연락처</li>
                <li>블로그</li>
                <li>이메일</li>
            </ul>
        </div>
    );
};

export default Contact;