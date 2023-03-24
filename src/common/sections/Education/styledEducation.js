import styled, { css, keyframes } from "styled-components";

export const Wrapper = styled.section`
    min-height: 100vh;
    background: ${({ theme }) => theme.color.mainColor};
    padding: 50px;
    display: grid;
    align-items: center;
    grid-template-columns: auto 1fr;
`;


const titleInAnimation = keyframes`
  from {
    left: -10%;
  }to {
    left: 150px;
  }
`;

export const TextContainer = styled.div`
    display: flex;
    justify-content: center;
    align-content: center;
    width: 300px;
`;


export const Title = styled.h1`
  color: white;
  position: absolute;
  left: 150px;
  margin: 0;
  font-size: 100px;
  transition: all 0.5s 0.6s ease-out;
  letter-spacing: 1.7rem;
  transform: translate(-50%, -50%) rotate(-90deg);
  opacity: 20%;
  text-transform: uppercase;
  border-bottom: 1px solid ${({theme}) => theme.color.white};
  
  ${({ scrolled }) => scrolled && css`
  display: inline-block;
  animation: ${titleInAnimation} 1s;
  `} 
`;


