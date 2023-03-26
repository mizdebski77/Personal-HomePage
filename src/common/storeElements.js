import styled, { css } from "styled-components";
import { titleLeftAnimation, titleRightAnimation } from "./animationsStore";

export const Wrapper = styled.section`
    min-height: 100vh;
    background: ${({ theme }) => theme.color.mainColor};
    padding: 50px;
    display: grid;
    align-items: center;

    ${({ leftWrapper }) => leftWrapper && css`
    grid-template-columns: auto 1fr;
    `}
    
    ${({ RightWrapper }) => RightWrapper && css`
    grid-template-columns:  1fr auto;
    `}
`;

export const TitleContainer = styled.div`
    display: flex;
    justify-content: center;
    align-content: center;
    width: 300px;
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

  ${({ leftTitle }) => leftTitle && css`
  left: 150px;
  transform: translate(-50%, -50%) rotate(-90deg);
  right: none;

  ${({ scrolled }) => scrolled && css`
  display: inline;
    animation: ${titleLeftAnimation} 1s;
  `} 
  
  ${({BigTitle}) => BigTitle && css`
      letter-spacing: 1.6rem;
      font-size: 110px;
    `}
  `};

  ${({ RightTitle }) => RightTitle && css`
  transform: translate(50%, -50%) rotate(-90deg);
  right: 200px; 

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

`;

