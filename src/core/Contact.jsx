import style from '../app/App.module.css';
import emailjs from '@emailjs/browser';
import React, { useState, useRef } from 'react';
import clsx from 'clsx';
import InputField from '../shared/components/InputField/InputField';
import TextAreaField from '../shared/components/TextAreaField/TextAreaField';
import SubmitButton from '../shared/components/SubmitButton/SubmitButton';
import Loader from '../shared/components/Loader/Loader';

// import icons
import { RiSendPlaneFill } from "react-icons/ri";

function Contact(){
	const form = useRef();
	const [loading, setLoading] = useState(false);
    const [menu, setMenu] = useState(false);
    
	const sendEmail = (e) => {
		e.preventDefault();
		setLoading(true);

		setTimeout(function () {
			emailjs.sendForm('service_gjbmeus', 'template_qk6p0pa', form.current, 'HDMwz57k3xrihLg4J')
				.then((result) => {
					e.target.name.value = '';
					e.target.email.value = '';
					e.target.message.value = '';
				});
			setLoading(false);
		}, 2000);

	};

    return(
			<div id='Contact' className={style.contact}>
            <div className={style.container}>
                <h2 className={style.title}>Contact</h2>
                <p>Feel free to Contact me by submitting the form below and I will get back to you as soon as possible</p>
                <form
                    ref={form} onSubmit={sendEmail}
                    className={
                        clsx(
                            { [style['inactive-form']]: loading }
                        )}
                >
                    <InputField
                        width="700px"
                        height="40px"
                        name="name"
                        placeholder="Enter Your Name"
                        label="Name"
                        type="text"
                    />
                    <InputField
                        width="700px"
                        height="40px"
                        name="email"
                        placeholder="Enter Your Email"
                        label="Email"
                        type="email"
                    />
                    <TextAreaField
                        width="700px"
                        height="250px"
                        name="message"
                        placeholder="Enter Your Message"
                        label="Message"
                        type="text"
                    />
                    <SubmitButton
                        icon={<RiSendPlaneFill size="20px" color='white' />}
                        width="200px"
                        height="60px"
                        color="white"
                        backgroundColor="var(--primary-main)"
                    >
                        Submit
                    </SubmitButton>
                    {
                        loading &&
                        <div className={style.loader}>
                            <Loader />
                        </div>
                    }
                </form>
            </div>
        </div>

    )
}
export default Contact;
