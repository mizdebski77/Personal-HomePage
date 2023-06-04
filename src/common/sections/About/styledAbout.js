import styled, { css } from "styled-components";
import { leftAnimation } from "../../animationsStore";

export const Photo = styled.img`
  width: 400px;
  border: 6px solid ${({ theme }) => theme.color.white};
  box-shadow: -8px 8px 0 ${({ theme }) => theme.color.secondColor};
  visibility: hidden;
    
  @media (max-width: ${({ theme }) => theme.breakPoint.firstBreakPoint}px){
    visibility: visible;
    margin: 0 auto;
  }

  @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
    width: 280px;
  }

  @media (max-width: ${({ theme }) => theme.breakPoint.smallPhone}px){
    width: 240px;
  }

  ${({ scrolled }) => scrolled && css`
    visibility: visible;
    animation: ${leftAnimation} 1s;`}
    
  @media (max-width: ${({ theme }) => theme.breakPoint.firstBreakPoint}px){
    animation:none;
  }
`;


export const InformationWrapper = styled.div`
  max-width: 480px;
  display: grid;
  visibility: hidden;
 
  @media (max-width: ${({ theme }) => theme.breakPoint.firstBreakPoint}px){
    visibility: visible;
    margin: 0 auto;
  }
  
  @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
    margin: 0 auto;
  }

  ${({ scrolled }) => scrolled && css`
    visibility: visible;
    animation: ${leftAnimation} 1s;`}

  @media (max-width: ${({ theme }) => theme.breakPoint.firstBreakPoint}px){
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
    font-size: 20px;
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
    font-size: 16px;
    font-style: italic;
    
  @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
    text-align: center;
    font-size: 14px;

    }    
`;


