import styled, { css } from "styled-components";
import { leftAnimation, rightAnimation } from "../../animationsStore";

export const ContentWrapper = styled.main`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const Category = styled.h1`
  color: ${({ theme }) => theme.color.fontSecond};
  font-size: 56px;
  text-align: center;
  padding: 20px;
  border: 2px solid ${({ theme }) => theme.color.fontSecond};
  width: 90%;  visibility: hidden;
    
  @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
    visibility: visible;
  }
  
  @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
    width: 100%;
    padding: 0px;
    font-size: 24px;
  }
  
  ${({ scrolledLeft }) => scrolledLeft && css`
  visibility: visible;
  animation: ${leftAnimation} 1.5s;

  @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
      animation: none;
  `}
   

  ${({ scrolledRight }) => scrolledRight && css`
  animation: ${rightAnimation} 1.5s;
  visibility: visible;
  
  @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
      animation: none;
      visibility: visible;}
  `}
`;

export const InformationContainer = styled.div`
  display: grid;
  gap: 50px;

  @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
    gap:10px
  }
`;

export const InformationWrapper = styled.div`
  display: grid;
  width: 90%;
  font-size: 24px;
  color:${({ theme }) => theme.color.white};
  padding: 20px 0 20px 0;
  border-bottom: 1px solid ${({ theme }) => theme.color.white};
  font-style: italic;
  visibility: hidden;
  min-height: 150px;
    
  @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
    visibility: visible;
  }
  
  
  @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
      font-size:16px;}
  

  ${({ scrolledLeft }) => scrolledLeft && css`
  visibility: visible;
  animation: ${leftAnimation} 1.5s;
  
  @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
      animation: none;
     }
  `} 

  ${({ scrolledRight }) => scrolledRight && css`
  animation: ${rightAnimation} 1.5s;
  visibility: visible;
  
  @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
      animation: none;
      visibility: visible;
     }
  `} 
`;

export const Color = styled.span`
  color:${({ theme }) => theme.color.fontSecond};
  display: block;
  font-style: italic;
`;


