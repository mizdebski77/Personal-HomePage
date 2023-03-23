import styled, { css, keyframes } from "styled-components";



export const Wrapper = styled.section`
    min-height: 100vh;
    background: ${({ theme }) => theme.color.mainColor};
    padding: 50px;
    display: grid;
    align-items: center;
    grid-template-columns: auto 1fr;
`;

export const TextContainer = styled.div`
    display: flex;
    justify-content: center;
    align-content: center;
    width: 300px;
`;

const InAnimation = keyframes`
  from {
    left: -10%;
  }
  to {
    left: 150px;
  }
`;



export const SectionInformation = styled.h1`
  color: white;
  position: absolute;
  left: 150px;
  margin: 0;
  font-size: 124px;
  transition: all 0.5s 0.6s ease-out;
  letter-spacing: 2.5rem;
  display: inline-block;
  transform: translate(-50%, -50%) rotate(-90deg);
  opacity: 20%;
  text-transform: uppercase;

  ${({ scrolled }) => scrolled && css`
    animation: ${InAnimation} 2s;
  `} 
`;

export const DataContainer = styled.div`
    display: flex;
    gap: 30px;
`;

export const Photo = styled.img`
    width: 350px;
    border: 6px solid ${({ theme }) => theme.color.white};
    box-shadow: -8px 8px 0 ${({ theme }) => theme.color.secondColor};
    ${({ scrolled }) => scrolled && css`
    animation: ${InAnimation} 2s;
  `}
`;

export const InformationWrapper = styled.div`
    display: grid;
    max-width: 480px;
    animation-delay: 1s;
    ${({ scrolled }) => scrolled && css`
    animation: ${InAnimation} 2s;
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


