import styled, { css } from "styled-components";
import { leftAnimation, rightAnimation } from "../../animationsStore";


export const Category = styled.div`
  background: ${({ theme }) => theme.color.secondColor};
  padding: 10px 20px 10px 20px;
  text-align: center;
  border-radius: 10px;
  box-shadow: -6px 6px 5px ${({ theme }) => theme.color.white};
  visibility: hidden;
    
  @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
    visibility: visible;
    margin: 0 auto;
    width: 100%;
    padding: 10px;
  }

  ${({ scrolledLeft }) => scrolledLeft && css`
  visibility: visible;
  animation: ${leftAnimation} 1.5s;
  @media (max-width: ${({ theme }) => theme.breakPoint.firstBreakPoint}px){
    animation: none;
  }`} 

  ${({ scrolledRight }) => scrolledRight && css`
  animation: ${rightAnimation} 1.5s;
  visibility: visible;
  @media (max-width: ${({ theme }) => theme.breakPoint.firstBreakPoint}px){
    animation: none;
  }`} 
`;


export const CategoryTitle = styled.h1`
  color: ${({ theme }) => theme.color.white};
  font-weight: normal;
  font-size: 32px;
  margin: 0;
  text-transform: uppercase;
  border-bottom: 2px solid ${({ theme }) => theme.color.white};

  @media (max-width: ${({ theme }) => theme.breakPoint.firstBreakPoint}px){
   font-size:24px;
  };
`;

export const CategoryWrapper = styled.div`
  display: flex;
  gap: 30px;
  justify-content: center;
`;

export const List = styled.ul`
  color: ${({ theme }) => theme.color.fontMain};
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  padding: 0px;

  ${({ icons }) => icons && css`
  display: flex;
  flex-wrap: wrap;
  flex-basis: 50%;
  margin: 20px auto;
  gap:20px  100px;
  padding: 0;
  justify-content: center;

  @media (max-width: ${({ theme }) => theme.breakPoint.firstBreakPoint}px){
    gap:10px  25px;
    margin: 20px 0 0 0 ;
  }`};

  ${({ flags }) => flags && css`
    display: flex;
    margin: 45px 20px 10px 20px;
    justify-content: space-between;
    padding: 0;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
      flex-direction: column;
      margin: 0;
  }`};
`;

export const ListItem = styled.li`
  letter-spacing: 0.05em;
  display: flex;
  font-weight: bold;
  font-size: 17px;

  &::before {
    content: "•";
    margin-right: 0.5em;}

  @media (max-width: ${({ theme }) => theme.breakPoint.firstBreakPoint}px){
    font-size: 14px;}
 `;

export const IconContainer = styled.div`
  width: 100px;
  display: grid;

  ${({ flags }) => flags && css`
    width: auto;
    margin-top: 45px;

  @media (max-width: ${({ theme }) => theme.breakPoint.firstBreakPoint}px){
    margin-top: 20px;}`};
 `;

export const ProgramIcon = styled.img`
  width: 100px;
  text-align: center;
  margin: 0 auto;

  @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
    width: 50px;
  }
`;

export const PictureCaption = styled.figcaption`
  font-weight: bold;
  padding-top: 10px;
  font-style: italic;

  @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px) {
    font-size: 14px;
  }
`;

export const FlagIcon = styled.img`
  width: 130px;
  height: 80px;
  border-radius: 10px;
  margin: auto;
  box-shadow: 0 0 16px ${({ theme }) => theme.color.fontMain};

  @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
    width: 80px;
    height: 50px  ;
  }
`;

export const Level = styled.h1`
  display: flex;
  font-size: 32px;
  color: ${({ theme }) => theme.color.black};
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
    font-size: 24px;
    margin: auto;
  }
`;

export const Color = styled.span`
  color: ${({ theme }) => theme.color.white};
`;

