import React, { useState } from 'react';
import { Photo, Informations, Text, InformationContainer, InformationWrapper, DataContainer } from '../About/styledAbout';
import prof from '../../Images/prof.png';
import {  Title, TitleContainer, Wrapper } from '../../storeElements';
export const About = () => {

  const [scrolledNavbar, setScrolledNavbar] = useState(false);


  const isWindowScroll = () => {
    if (window.scrollY > 200) {
      setScrolledNavbar(true);
      } else {
      setScrolledNavbar(false);
      }
  };

  window.addEventListener("scroll", isWindowScroll);

  return (
    <Wrapper leftWrapper  id="about">
      <TitleContainer>
        <Title leftTitle  scrolled={scrolledNavbar}> About </Title>
      </TitleContainer>
      <DataContainer>
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
          <Text>I'm an enthusiastic Frontend Developer who is passionate about new technologies and dedicated to learning React. Highly motivated fast learner currently looking for new job opportunities.</Text>
        </InformationWrapper>

      </DataContainer>
    </Wrapper>
  );
};

