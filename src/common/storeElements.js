import styled, { css } from "styled-components";
import { titleLeftAnimation, titleRightAnimation } from "./animationsStore";
import SVG from "react-inlinesvg";

export const Wrapper = styled.section`
  min-height: 100vh;
  background: ${({ theme }) => theme.color.mainColor};
  padding: 50px;
  display: grid;
  align-items: center;
  
  @media (max-width: ${({ theme }) => theme.breakPoint.firstBreakPoint}px){
    padding: 30px;
  }

  ${({ leftWrapper }) => leftWrapper && css`
    grid-template-columns: auto 1fr;
  @media (max-width: ${({ theme }) => theme.breakPoint.firstBreakPoint}px){
    grid-template-columns: 1fr;
    justify-content: center;
  `};
    
  ${({ RightWrapper }) => RightWrapper && css`
    grid-template-columns:  1fr auto;

  @media (max-width: ${({ theme }) => theme.breakPoint.firstBreakPoint}px){
    display: flex;
    flex-direction: column-reverse;  `};
`;

export const TitleContainer = styled.div`
    display: flex;
    justify-content: center;
    align-content: center;
    width: 300px;

  @media (max-width: ${({ theme }) => theme.breakPoint.firstBreakPoint}px){
    width: 90%;
    margin: 0 auto 20px auto;
  };
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.color.white};
  position: absolute;
  margin: 0;
  font-size: 124px;
  transition: all 0.5s 0.6s ease-out;
  letter-spacing: 2rem;
  opacity: 20%;
  text-transform: uppercase;
  border-bottom: 2px solid ${({ theme }) => theme.color.white};
  display: none;

  @media (max-width: ${({ theme }) => theme.breakPoint.firstBreakPoint}px){
    font-size: 80px;
    letter-spacing: 1.2rem;
    position: static;
  };

  @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
    font-size: 30px;
    letter-spacing: 1.2rem;
    position: static;
  };



  ${({ BigTitle }) => BigTitle && css`
      letter-spacing: 1.6rem;
      font-size: 110px;
      word-break: normal;

    `}

  ${({ leftTitle }) => leftTitle && css`
    left: 150px;
    transform: translate(-50%, -50%) rotate(-90deg);
    right: none;

  @media (max-width: ${({ theme }) => theme.breakPoint.firstBreakPoint}px){
    left: none;
    transform: none;
    display: inline;
  };

  ${({ scrolled }) => scrolled && css`
    display: inline;
    animation: ${titleLeftAnimation} 1s;`} 
  `};

  ${({ RightTitle }) => RightTitle && css`
  transform: translate(50%, -50%) rotate(-90deg);
  right: 200px; 

  @media (max-width: ${({ theme }) => theme.breakPoint.firstBreakPoint}px){
    transform: none;
    right: none; 
    display: inline;
  }

  ${({ scrolled }) => scrolled && css`
  display: inline;
  animation: ${titleRightAnimation} 1s;
  `} 
  `};
  `;

export const DataContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;

    ${({ notSuccess }) =>
    notSuccess &&
    css`
      grid-template-columns: auto;
    `}

  @media (max-width: ${({ theme }) => theme.breakPoint.firstBreakPoint}px){
    grid-template-columns: 1fr;
  }
  
  ${({ ab }) => ab && css`
    grid-template-columns: auto 1fr;
  `};


  ${({ gh }) => gh && css`
      grid-template-columns: 1fr 1fr 1fr;
  `};

`;

export const SocialsContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;

    ${({ footer }) => footer && css`
      justify-content: space-between;
      margin-right: 40px;
      gap: 40px;

      @media (max-width: ${({theme}) => theme.breakPoint.mobileMax}px) {
        margin: 0;
    }
  `};

`;

export const SocialImage = styled(SVG)`
    height: 40px;
    width: 40px;
    fill: ${({ theme }) => theme.color.white};
    transition: 0.7s;

    &:hover {
        fill: ${({ theme }) => theme.color.secondColor};
    }
`;

export const SocialLink = styled.a`
    transition: 0.3s;

    &:hover{
        transform: scale(1.2);
    }
`;


