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

export const DataContainer = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 30px;
  @media (max-width: ${({theme}) => theme.breakPoint.firstBreakPoint}px){
    grid-template-columns: 1fr;
    margin: 0 auto;

  }
`;

export const Photo = styled.img`
    max-width: 360px;
    width: 100%;
    height: 100%;
    border: 6px solid ${({ theme }) => theme.color.white};
    box-shadow: -8px 8px 0 ${({ theme }) => theme.color.secondColor};
    visibility: hidden;

    ${({ scrolled }) => scrolled && css`
    visibility: visible;
    animation: ${inAnimation} 1s;
  `}
`;

export const InformationWrapper = styled.div`
    max-width: 480px;
    display: grid;
    visibility: hidden;

    ${({ scrolled }) => scrolled && css`
    visibility: visible;
    animation: ${inAnimation} 1s;
  `}
`;

export const InformationContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 16px;
    grid-auto-rows: min-content;
    justify-content: center;
    min-height: 50px;
`;

export const Informations = styled.h1`
    font-size: 28px;
    margin: 0;
    color: ${({ theme }) => theme.color.secondColor};

    ${({ white }) => white && css`
    color:  ${({ theme }) => theme.color.white};
    font-weight: normal;
    `};

    ${({ rest }) => rest && css`
    font-size: 18px;
    `};
`;

export const Text = styled.h3`
    color: ${({ theme }) => theme.color.white};
    font-weight: normal;
    font-size: 14px;
    font-style: italic;
`;


