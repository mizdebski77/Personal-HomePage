import React from 'react';
import { SectionInformation, DataContainer, Wrapper, TextContainer, Photo, Informations, Text, InformationContainer, InformationWrapper, Big } from './styledAbout';
import prof from '../Images/prof.png';
export const About = () => {
  return (
    <Wrapper id = "about">
      <TextContainer>
        <SectionInformation> About </SectionInformation>
      </TextContainer>
      <DataContainer>
        <Photo src={prof} />
        <InformationWrapper>
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

