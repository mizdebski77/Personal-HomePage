import styled from "styled-components";
import SVG from "react-inlinesvg";

export const Form = styled.form`
    display: grid;
    gap: 20px;
    width: 90%;
    margin: auto;
`;

export const Input = styled.input`
    padding: 10px;
    font-size: 20px;
    border-radius: 5px;

    &:focus {
        outline: none;
    }
`;

export const Message = styled.textarea`
    padding: 10px;
    font-size: 20px;
    font-family: 'Poppins', sans-serif;
    color: ${({ theme }) => theme.color.fontMain};
    min-height: 150px;
    border-radius: 5px;
    resize: none;

    &:focus {
        outline: none;
    }
`;

export const ContactDataWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(3, auto);
    grid-auto-rows: min-content;
    gap: 20px;
    align-items: center;
`;

export const SVGIcon = styled(SVG)`
    fill: ${({ theme }) => theme.color.secondColor};
    width: 40px;
`;

export const ContactTitle = styled.h1`
    color: ${({ theme }) => theme.color.fontSecond};
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const SendButton = styled.button`
    background: ${({ theme }) => theme.color.secondColor};
    margin: 0;
    padding: 10px;
    border-radius: 5px;
    font-size: 20px;
    border: none;
    color: ${({theme}) => theme.color.white};
    cursor: pointer;
    transition: 0.5s;

    &:hover {
        transform: scale(1.03);
    }

    &:active {
        background: ${({ theme }) => theme.color.mainColor};
        border: 1px solid ${({theme}) => theme.color.secondColor};
    }
`;

export const ContactLink = styled.a`
    color: ${({ theme }) => theme.color.white};
    text-decoration: none;
    font-size: 16px;
    text-align: center;
    font-style: italic;
`;
