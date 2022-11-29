import React, { useRef, useState, useContext } from 'react'
import './Contact.css'
import Phone from '../../img/phone.png'
import Email from '../../img/email.png'
import Address from '../../img/address.png'
import emailjs from '@emailjs/browser';
import { ThemeContext } from "../../context";

const Contact = () => {
    const formRef = useRef()
    const [done, setDone] = useState(false);
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_yxdou8p', 'template_a9vo6js', formRef.current, '-JW1UUqYwHhXpfgtx')
            .then((result) => {
                window.location.reload();
                setDone(true)
            }, (error) => {
            });
    }
    return (
        <div className='c'>
            <div className='c-bg'>

            </div>
            <div className='c-wrapper'>
                <div className='c-left'>
                    <h1 className='c-title'>Let's discuss your project</h1>
                    <div className='c-info'>
                        <div className='c-info-item'>
                            <img src={Phone} alt='' className='c-icon' />
                            +52 56 2421 9070
                        </div>
                        <div className='c-info-item'>
                            <img src={Email} alt='' className='c-icon' />
                            erve@live.com.mx
                        </div>
                        <div className='c-info-item'>
                            <img src={Address} alt='' className='c-icon' />
                            Mexico, Ciudad De México
                        </div>
                    </div>
                </div>
                <div className='c-right'>
                    <p className='c-desc'>
                        Contact me
                    </p>
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <input type='text' style={{backgroundColor: darkMode && "#333", color: darkMode ? "white":"black"}} placeholder='Name' name='user_name' />
                        <input type='text' style={{backgroundColor: darkMode && "#333", color: darkMode ? "white":"black"}} placeholder='Sebject' name='user_subject' />
                        <input type='text' style={{backgroundColor: darkMode && "#333", color: darkMode ? "white":"black"}} placeholder='Email' name='user_email' />
                        <textarea rows='5' style={{backgroundColor: darkMode && "#333", color: darkMode ? "white":"black"}} placeholder='Message' name='message' />
                        <button>Submit</button>
                        {done &&
                            <span>"Thank you"</span>}
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact