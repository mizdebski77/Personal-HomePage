import React from 'react';
import { Span, Text, BigText, TextBox, Wrapper, DownloadButton, SocialsContainer, Socials } from './styledHome';
import gh from '../Images/gh.svg'
import lin from '../Images/lin.svg'
import gma from '../Images/gma.svg'
import mess from '../Images/mess.svg'


export const Home = () => {
    return (
        <Wrapper>
            <TextBox>
                <Text> Hello</Text>
                <BigText> I'm </BigText>
                <BigText><Span>Marcin</Span> Izdebski</BigText>
                <Text> Frontend React Developer</Text>
                <SocialsContainer>
                    <DownloadButton>Download CV</DownloadButton>
                    <Socials src={gh} />
                    <Socials src={lin} />
                    <Socials src={gma} />
                    <Socials src={mess} />


                </SocialsContainer>
            </TextBox>
        </Wrapper>
    );
};

