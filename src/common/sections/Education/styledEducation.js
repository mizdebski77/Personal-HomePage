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
  width: 80%;
  margin: 0 auto;
  visibility: hidden;
  ;
  ${({ scrolledLeft }) => scrolledLeft && css`
  visibility: visible;
  animation: ${leftAnimation} 1.5s;
  `} 

  ${({ scrolledRight }) => scrolledRight && css`
  animation: ${rightAnimation} 1.5s;
  visibility: visible;
  `}
`;

export const InformationWrapper = styled.div`
  display: grid;
  width: 80%;
  font-size: 24px;
  color:${({ theme }) => theme.color.white};
  padding: 20px 0 20px 0;
  margin: 0 auto;
  border-bottom: 1px solid ${({ theme }) => theme.color.white};
  font-style: italic;
  align-items: center;
  visibility: hidden;

  ${({ scrolledLeft }) => scrolledLeft && css`
  visibility: visible;
  animation: ${leftAnimation} 1.5s;
  `} 

  ${({ scrolledRight }) => scrolledRight && css`
  animation: ${rightAnimation} 1.5s;
  visibility: visible;
  `} 
`;

export const Color = styled.span`
  color:${({ theme }) => theme.color.fontSecond};
`;


