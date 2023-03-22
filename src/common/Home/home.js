import React from 'react';
import { Span, Text, BigText, TextBox, Wrapper, DownloadButton, SocialsContainer, SocialImage, SocialLink } from './styledHome';
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
                    <SocialLink target={'_blank'} href='https://github.com/mizdebski77'>
                        <SocialImage src={gh} />
                    </SocialLink>
                    <SocialLink target={'_blank'} href = 'https://www.linkedin.com/in/marcin-izdebski-63b7a026a/'>
                        <SocialImage src={lin} />
                    </SocialLink>
                    <SocialLink target={'_blank'}  href="mailto: mizdebski123@gmail.com">
                        <SocialImage src={gma} />
                    </SocialLink>
                    <SocialLink target={'_blank'} href = 'https://www.facebook.com/marcin.izdebski.7528'>
                        <SocialImage src={mess} />
                    </SocialLink>

                </SocialsContainer>
            </TextBox>
        </Wrapper>
    );
};

