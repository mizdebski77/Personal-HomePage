import styled, { css } from "styled-components";
import { leftAnimation, rightAnimation } from "../../animationsStore";

export const ProjectWrapper = styled.section`
    background: transparent;
    border: 2px solid ${({ theme }) => theme.color.secondColor};
    color: white;
    padding: 20px;
    border-radius: 5px;
    color: ${({ theme }) => theme.color.fontSecond};
    width: 100%;
    min-height: 200px;
    display: grid;
    justify-content: center;
    transition: 0.5s;
    visibility: hidden;
      
  @media (max-width: ${({ theme }) => theme.breakPoint.firstBreakPoint}px){
    visibility: visible;

    padding: 10px;

  }

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
        min-height: 100px;
    };

    ${({ scrolledLeft }) => scrolledLeft && css`
        visibility: visible;
        animation: ${leftAnimation} 1.5s;
    @media (max-width: ${({ theme }) => theme.breakPoint.firstBreakPoint}px){
        animation:none;
    };
  `} 

  ${({ scrolledRight }) => scrolledRight && css`
     animation: ${rightAnimation} 1.5s;
    visibility: visible;
    @media (max-width: ${({ theme }) => theme.breakPoint.firstBreakPoint}px){
        animation:none;
    };
  `}

    &:hover{
        box-shadow: 0 0 7px ${({ theme }) => theme.color.white};
    }
`;

export const ProjectTitle = styled.h1`
    margin: 0 auto;
    font-size: 28px;
    color: ${({ theme }) => theme.color.fontSecond};
    font-weight: normal;
    margin-bottom: 16px;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
        font-size: 20px;
    };
`;

export const LinkContainer = styled.div`
    display: grid;
    grid-auto-rows: min-content;
    grid-template-columns: auto 1fr;
    row-gap: 40px;
    column-gap: 20px;
    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
    font-size: 16px;
    column-gap: 10px;
    };
`;

export const LinkTitle = styled.h3`
    margin: 0 ;
    font-weight: normal;
    font-size: 20px;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
    font-size: 16px;
    };
`;

export const ProjectLink = styled.a`
    text-decoration: none;
    color: ${({ theme }) => theme.color.white};
    font-size: 16px;
    transition: 0.3s;
    font-style: italic;
    
    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
    font-size: 14px;
    };

    &:hover{
        color: ${({ theme }) => theme.color.fontSecond};
    }
  
`;

