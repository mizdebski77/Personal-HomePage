import styled, { css, keyframes } from "styled-components";
import { leftAnimation, rightAnimation } from "../../animationsStore";


export const Category = styled.div`
  background: ${({ theme }) => theme.color.secondColor};
  padding: 10px 20px 10px 20px;
  text-align: center;
  border-radius: 10px;
  box-shadow: -6px 6px 5px ${({theme}) => theme.color.white};
  display: none;

  ${({ scrolledLeft }) => scrolledLeft && css`
  display: block;
  animation: ${leftAnimation} 1s;
  `} 

  ${({ scrolledRight }) => scrolledRight && css`
  animation: ${rightAnimation} 1s;
  display: block;

  `} 
`;

export const CategoryTitle = styled.h1`
  color: ${({ theme }) => theme.color.white};
  font-weight: normal;
  font-size: 32px;
  margin: 0;
  text-transform: uppercase;
  border-bottom: 2px solid ${({theme}) => theme.color.white};
`;

export const List = styled.ul`
  color: ${({ theme }) => theme.color.fontMain};
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));


  ${({ icons }) => icons && css`
  display: flex;
  flex-wrap: wrap;
  flex-basis: 50%;
  margin: 20px auto;
  gap:20px  100px;
  padding: 0;
  justify-content: center;
  `}

  ${({ flags }) => flags && css`
    display: flex;
    margin: 45px 20px 10px 20px;
    justify-content: space-between;
    padding: 0;
  `};
`;

export const ListItem = styled.li`
  letter-spacing: 0.05em;
  display: flex;
  font-weight: bold;
  font-size: 17px;
  &::before {
    content: "•";
    margin-right: 0.5em;
  }
 `;

export const IconContainer = styled.div`
    width: 100px;
    display: grid;
    justify-content: center;

    ${({flags}) => flags && css`
    width: auto;
    margin-top: 45px;
    `};

 `;

export const ProgramIcon = styled.img`
  width: 100%;
`;

export const PictureCaption = styled.figcaption`
  font-weight: bold;
  
`;

export const FlagIcon = styled.img`
  width: 130px;
  border-radius: 10px;
  box-shadow: 0 0 16px ${({theme}) => theme.color.fontMain};
`;

export const Level = styled.h1`
  display: flex;
  font-size: 35px;
  color: ${({theme}) => theme.color.black};
  margin: 0;
`;

export const Color = styled.span`
  color: ${({theme}) => theme.color.white};

`;

