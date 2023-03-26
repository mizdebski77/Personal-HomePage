import React, { useRef } from 'react';
import { DataContainer, Title, TitleContainer, Wrapper } from '../../storeElements';
import { ContactDataWrapper, ContactTitle, Form, Input, Message, SendButton, ContactLink, SVGIcon } from './styledContact';
import phone from "../../Images/phone.svg"
import mail from "../../Images/mail.svg"
import website from "../../Images/website.svg"
import emailjs from '@emailjs/browser';
import { Modal, message } from 'antd';


export const Contact = () => {

    const handleSendEmailSuccess = () => {
        message.success('E-mail was sent!');
    };

    const handleSendEmailError = () => {
        message.error('Email has not been sent. Try again!');
    };

    

    const form = useRef();

    const sendEmail = (event) => {
        event.preventDefault();

        emailjs.sendForm('service_p1wdtdz', 'template_tw2mnfg', form.current, 'ki2mepyulrmg22NST',).then((result) => {

            if (result.text === "OK") {
                event.target.reset();
                handleSendEmailSuccess();
            }
        }, (error) => {
            handleSendEmailError();
            console.log(error.text);
        });
    };

    return (
        <Wrapper leftWrapper id="contact" >
            <TitleContainer>
                <Title leftTitle > Contact </Title>
            </TitleContainer>
            <DataContainer>
                <Form onSubmit={sendEmail} ref={form}>
                    <Input name="name" placeholder='Name *' required />
                    <Input name="email" placeholder='Email *' required />
                    <Message name="message" placeholder='Message * ' />
                    <SendButton>Send</SendButton>

                </Form>

                <ContactDataWrapper>
                    <ContactTitle> <SVGIcon src={phone} />Phone</ContactTitle>
                    <ContactTitle> <SVGIcon src={mail} />E-Mail</ContactTitle>
                    <ContactTitle> <SVGIcon src={website} />Website</ContactTitle>
                    <ContactLink href="tel:+501375604" >501375604</ContactLink>
                    <ContactLink href="mailto: mizdebski123@gmail.com">mizdebski123@gmail.com</ContactLink>
                    <ContactLink target='_blank' href="https://github.com/mizdebski77"> https://github.com/mizdebski77 </ContactLink>
                </ContactDataWrapper>

            </DataContainer>


        </Wrapper>
    );
};

