import React, { useState } from 'react';
import { Photo, Informations, Text, InformationContainer, InformationWrapper } from '../About/styledAbout';
import prof from '../../Images/prof.webp';
import { DataContainer, Title, TitleContainer, Wrapper } from '../../storeElements';
import { useEffect } from 'react';
export const About = () => {

  const [scrolledNavbar, setScrolledNavbar] = useState(false);

  const isWindowScroll = () => {
    if (window.scrollY > 500) {
      setScrolledNavbar(true);
    } 
  };


  useEffect(() => {
    window.addEventListener("scroll", isWindowScroll);
    return () => window.removeEventListener("scroll", isWindowScroll)
  }, []);

  
  return (
    <Wrapper leftWrapper id="about">
      <TitleContainer>
        <Title leftTitle scrolled={scrolledNavbar}> About </Title>
      </TitleContainer>
      <DataContainer ab>
        <Photo src={prof} scrolled={scrolledNavbar} />
        <InformationWrapper scrolled={scrolledNavbar}>
          <InformationContainer>
            <Informations>Name :</Informations>
            <Informations white >Marcin Izdebski</Informations>
            <Informations rest  >Adress :</Informations>
            <Informations rest white>Olkusz Legionów Polskich</Informations>
            <Informations rest>Proffesion :</Informations>
            <Informations rest white>React Frtontend Developer</Informations>
            <Informations rest>Website :</Informations>
            <Informations rest white>https://github.com/mizdebski77</Informations>
            <Informations rest>Contact :</Informations>
            <Informations rest white>mizdebski123@gmail.com</Informations>
            <Informations rest>Interest :</Informations>
            <Informations rest white>Music production, Graphic Design, Sport</Informations>
          </InformationContainer>
          <Text>I'm an enthusiastic Frontend Developer with a strong passion for new technologies and a deep commitment to learning React. I am highly motivated and thrive on being a fast learner. Currently, I am actively seeking new job opportunities to further enhance my skills and contribute to innovative projects.
          </Text>
        </InformationWrapper>

      </DataContainer>
    </Wrapper>
  );
};

