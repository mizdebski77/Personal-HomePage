import React from 'react';
import { Links, LinksContainer, Logo, NavbarContent, Wrapper } from './styledNavbar';

export const Navbar = () => {
    return (
        <Wrapper>
            <NavbarContent>
                <Logo>Logo</Logo>
                <LinksContainer>
                    <Links>About</Links>
                    <Links>Education</Links>
                    <Links>Skills</Links>
                    <Links>Portfolio</Links>
                    <Links>Contact</Links>
                </LinksContainer>
            </NavbarContent>

        </Wrapper>
    );
};
