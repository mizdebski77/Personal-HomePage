import styled, { css, keyframes } from "styled-components";

const inAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateX(-200%);
  }
  to {
    opacity: 1;
    transform: translateX(0%);
  }
`;

export const Photo = styled.img`
  max-width: 360px;
  width: 100%;
  height: 100%;
  border: 6px solid ${({ theme }) => theme.color.white};
  box-shadow: -8px 8px 0 ${({ theme }) => theme.color.secondColor};
  visibility: hidden;
    
  @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
    visibility: visible;
  }

  @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
    margin: 0 auto;
    width: 80%;
  }
  ${({ scrolled }) => scrolled && css`
    visibility: visible;
    animation: ${inAnimation} 1s;`}
    
  @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
    animation:none;
  }
`;

export const InformationWrapper = styled.div`
  max-width: 480px;
  display: grid;
  visibility: hidden;
 
  @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
    visibility: visible;
  }
  
  @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
    margin: 0 auto;
  }

  ${({ scrolled }) => scrolled && css`
    visibility: visible;
    animation: ${inAnimation} 1s;`}

  @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
    animation:none;
  }
`;

export const InformationContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 16px;
  grid-auto-rows: min-content;
  min-height: 50px;

  @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
    grid-template-columns: 1fr;
    text-align: center;
    margin: 0 auto;
    gap: 10px;
  }
`;

export const Informations = styled.h1`
  font-size: 28px;
  margin: 0;
  color: ${({ theme }) => theme.color.secondColor};

  @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
    font-size: 24px;
  }

  ${({ white }) => white && css`
    color:  ${({ theme }) => theme.color.white};
    font-weight: normal;
  `};

  ${({ rest }) => rest && css`
    font-size: 18px;

  @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
    font-size: 14px;
  }
  `};
`;

export const Text = styled.h3`
    color: ${({ theme }) => theme.color.white};
    font-weight: normal;
    font-size: 14px;
    font-style: italic;
    
  @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
    text-align: center;}    
`;


