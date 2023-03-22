import styled from "styled-components";

export const Wrapper = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 91vh;
    background: linear-gradient(
    to right,
    ${({theme}) => theme.color.mainColor} 0%,
    ${({theme}) => theme.color.mainColor} 55%,
    ${({theme}) => theme.color.secondColor} 50%,
    ${({theme}) => theme.color.secondColor} 100%
  );
`;

export const TextBox = styled.div`
    width: 800px;
    background: ${({theme}) => theme.color.boxColor};
    display: grid;
    justify-content: center;
    align-items: center;
    gap: 20px;
    padding: 50px 20px 50px 20px;
`;

export const BigText = styled.h1`
    color: ${({theme}) => theme.color.white};
    font-size: 60px;
    font-weight: bold;
    margin: 0;
`;

export const Text = styled.h1`
    color: ${({theme}) => theme.color.white};
    font-weight: normal;
    margin: 0;
`;

export const Span = styled.span`
    color: ${({theme}) => theme.color.fontSecond};
`;

export const SocialsContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
`;

export const DownloadButton = styled.button`
    color: ${({theme}) => theme.color.white};
    background: ${({theme}) => theme.color.secondColor} ;
    padding: 16px;
    border: none;
    width: 200px;
    border-radius: 30px;
    font-size: 16px;
`;

export const SocialImage = styled.img`
    height: 40px;
`;

export const SocialLink = styled.a`

`;



