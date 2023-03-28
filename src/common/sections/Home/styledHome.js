import styled from "styled-components";
import SVG from "react-inlinesvg";


export const Wrapper = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 91vh;
    background: linear-gradient(
    to right,
    ${({ theme }) => theme.color.mainColor} 0%,
    ${({ theme }) => theme.color.mainColor} 55%,
    ${({ theme }) => theme.color.secondColor} 50%,
    ${({ theme }) => theme.color.secondColor} 100%
  );
`;

export const TextBox = styled.div`
    max-width: 850px;
    width: 90%;
    backdrop-filter: blur(3px);
    background: ${({ theme }) => theme.color.boxColor};
    display: grid;
    justify-content: center;
    align-items: center;
    gap: 20px;
    padding: 50px 20px 50px 20px;
    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
        text-align: center;
    }


`;

export const BigText = styled.h1`
    color: ${({ theme }) => theme.color.white};
    font-size: 60px;
    font-weight: bold;
    margin: 0;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
        font-size: 40px;
    }
`;

export const Text = styled.h1`
    color: ${({ theme }) => theme.color.white};
    font-weight: normal;
    margin: 0;
    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
        font-size: 24px;
    }
`;

export const Span = styled.span`
    color: ${({ theme }) => theme.color.fontSecond};
`;

export const SocialsContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
`;

export const SocialImage = styled(SVG)`
    height: 40px;
    width: 40px;
    fill: ${({ theme }) => theme.color.white};
    transition: 0.7s;

    &:hover {
        fill: ${({ theme }) => theme.color.secondColor};
    }
`;

export const SocialLink = styled.a`
    transition: 0.3s;

    &:hover{
        transform: scale(1.2);
    }
`;
