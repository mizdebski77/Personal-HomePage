import React from 'react';
import { Links, LinksContainer, Logo, NavbarContent, Wrapper } from './styledNavbar';

export const Navbar = () => {
    return (
        <Wrapper>
            <NavbarContent>
                <Logo>Marcin Izdebski</Logo>
                <LinksContainer>
                    <Links 
                    to = "about"
                    spy = {true}
                    smooth = {true}
                    duration = {1000}
                    >About</Links>
                    <Links>Skills</Links>
                    <Links>Education</Links>
                    <Links>Portfolio</Links>
                    <Links>Contact</Links>
                </LinksContainer>
            </NavbarContent>

        </Wrapper>
    );
};
