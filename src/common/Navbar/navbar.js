import React from 'react';
import { Links, LinksContainer, Logo, NavbarContent, PhoneNavbar, PhoneNavbarContainer, Wrapper } from './styledNavbar';
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useState } from 'react';

export const Navbar = () => {
    const [phoneNavbar, setPhoneNavbar] = useState(null);

    const openMenu = () => {
        setPhoneNavbar(!phoneNavbar)
    };

    return (
        <>
            <Wrapper>
                <NavbarContent>
                    <Logo
                        to="home"
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={1500}>
                    Marcin Izdebski</Logo>
                    <PhoneNavbar onClick={openMenu}>
                        {phoneNavbar ? <AiOutlineClose size={28} color={'rgb(217, 184, 21)'} /> : <AiOutlineMenu size={28} color={'rgb(217, 184, 21)'} />}
                    </PhoneNavbar>
                    <LinksContainer>
                        <Links
                            to="about"
                            spy={true}
                            smooth={true}
                            offset={-50}
                            duration={1500}>
                            About</Links>
                        <Links
                            to="skills"
                            spy={true}
                            smooth={true}
                            offset={-50}
                            duration={1500} >
                            Skills</Links>
                        <Links
                            to="education"
                            spy={true}
                            smooth={true}
                            offset={-25}
                            duration={1500} >
                            Education</Links>
                        <Links
                            to="portfolio"
                            spy={true}
                            smooth={true}
                            duration={1500}
                            offset={-25}
                        >Portfolio</Links>
                        <Links
                            to="contact"
                            spy={true}
                            smooth={true}
                            duration={1500}
                            offset={-25}
                        >Contact</Links>
                    </LinksContainer>
                </NavbarContent>
            </Wrapper >


            {phoneNavbar !== null ?
                <PhoneNavbarContainer phoneNavbar={phoneNavbar}>
                    <Links
                        to="about"
                        spy={true}
                        smooth={true}
                        offset={-75}
                        duration={1500}>
                        About</Links>
                    <Links
                        to="skills"
                        spy={true}
                        smooth={true}
                        offset={-75}
                        duration={1500} >
                        Skills</Links>
                    <Links
                        to="education"
                        spy={true}
                        smooth={true}
                        offset={-75}
                        duration={1500} >
                        Education</Links>
                    <Links
                        to="portfolio"
                        spy={true}
                        smooth={true}
                        duration={1500}
                        offset={-75}
                    >Portfolio</Links>
                    <Links
                        to="contact"
                        spy={true}
                        smooth={true}
                        duration={1500}
                        offset={-75}
                    >Contact</Links>
                </PhoneNavbarContainer> : ""}
        </>
    );
};
