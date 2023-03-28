import styled from "styled-components";


export const Wrapper = styled.footer`
    min-height: 100px;
    width: 100%;
    background: ${({ theme }) => theme.color.navbar};
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    
    @media (max-width: ${({theme}) => theme.breakPoint.mobileMax}px) {
        display: grid;
        gap: 20px;
        justify-content: center;
    }
`;


export const FooterCopyrights = styled.div`
    color:${({theme}) => theme.color.fontSecond};
    margin-left: 40px;
    @media (max-width: ${({theme}) => theme.breakPoint.mobileMax}px) {
        margin: 0;
    }
`;