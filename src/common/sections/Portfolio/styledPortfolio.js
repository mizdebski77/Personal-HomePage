import styled, { css } from "styled-components";
import { leftAnimation, rightAnimation } from "../../animationsStore";
import Slider from "react-slick";

export const ProjectWrapper = styled.section`
    background: transparent;
    border: 2px solid ${({ theme }) => theme.color.secondColor};
    color: white;
    min-height: 472px;
    padding: 20px;
    border-radius: 5px;
    color: ${({ theme }) => theme.color.fontSecond};
    transition: 0.5s;
    visibility: visible;

      
  @media (max-width: ${({ theme }) => theme.breakPoint.firstBreakPoint}px){
    visibility: visible;
    padding: 10px;
  }


    ${({ scrolledLeft }) => scrolledLeft && css`
        visibility: visible;
        /* animation: ${leftAnimation} 1.5s; */
    @media (max-width: ${({ theme }) => theme.breakPoint.firstBreakPoint}px){
        animation:none;
    };
  `} 

  ${({ scrolledRight }) => scrolledRight && css`
     /* animation: ${rightAnimation} 1.5s; */
    visibility: visible;
    @media (max-width: ${({ theme }) => theme.breakPoint.firstBreakPoint}px){
        animation:none;
    };
  `}

    &:hover{
        box-shadow: 0 0 7px ${({ theme }) => theme.color.white};
    }
`;

export const CustomSlider = styled(Slider)`
    width: 1200px;
    margin: 10px;

    @media (max-width: ${({ theme }) => theme.breakPoint.firstportfolioBreakPoint}px){
      width: 1000px;
  }

    @media (max-width: ${({ theme }) => theme.breakPoint.portfolioBreakPoint}px){
      width: 800px;
  }

  @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
      width: 500px;
  }

  @media (max-width: ${({ theme }) => theme.breakPoint.tinyPhone}px){
      width: 300px;
  }

    .slick-slide {

      @media (max-width: ${({ theme }) => theme.breakPoint.smallPhone}px){
        padding: 4px;
  }
      padding: 10px;
    }
    .slick-prev:before,
    .slick-next:before {
      color: ${({theme}) => theme.color.secondColor};
    }

      .slick-dots {
    li {
      button:before {
        color: ${({ theme }) => theme.color.secondColor};
        font-size: 16px;
        margin-top: 20px;
      }
    }
  }
`;


export const ProjectTitle = styled.h1`
    margin: 0;
    font-size: 28px;
    text-decoration: underline;
    text-decoration-skip-ink: auto;
    text-underline-offset: 8px;
    text-align: center;
    color: ${({ theme }) => theme.color.fontSecond};
    font-weight: normal;
    margin-bottom: 16px;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
        font-size: 20px;
    };
`;

export const DescriptionTitle = styled.h2`
    font-size: 24px;
    margin: 0;
    text-align: center;
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
    margin-bottom: 20px;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
    font-size: 16px;
    column-gap: 10px;
    };
`;

export const Description = styled.h3`
    text-decoration: none;
    font-weight: normal;
    color: ${({ theme }) => theme.color.white};
    font-size: 16px;
    font-style: italic;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
      font-size: 14px;
  }
  `;

export const LinkTitle = styled.h3`
    margin: 0 ;
    font-weight: normal;
    font-size: 20px;
    min-width: 115px;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
    font-size: 16px;
    min-width: 90px;
    };
`;

export const ProjectLink = styled.a`
    text-decoration: none;
    color: ${({ theme }) => theme.color.white};
    font-size: 16px;
    transition: 0.3s;
    font-style: italic;
    min-height: 50px;
    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
    font-size: 14px;
    };

    &:hover{
        color: ${({ theme }) => theme.color.fontSecond};
    }
  
`;

