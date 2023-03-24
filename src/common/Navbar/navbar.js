import React from 'react';
import { Links, LinksContainer, Logo, NavbarContent, Wrapper } from './styledNavbar';

export const Navbar = () => {
    return (
        <Wrapper>
            <NavbarContent>
                <Logo>Marcin Izdebski</Logo>
                <LinksContainer>
                    <Links
                        to="about"
                        spy={true}
                        smooth={true}
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
                        offset={-50}
                        duration={1500} >
                        Education</Links>
                    <Links>Portfolio</Links>
                    <Links>Contact</Links>
                </LinksContainer>
            </NavbarContent>

        </Wrapper >
    );
};
