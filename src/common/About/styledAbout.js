import styled from "styled-components";

export const Wrapper = styled.section`
    min-height: 100vh;
    background: ${({theme}) => theme.color.mainColor};
    padding: 50px;
`;

export const PhotoContainer = styled.div`
    width: 100px;
    height: 300px;
    background: red;
    border: 10px solid white;
    box-shadow: -10px 10px 0 orange;
`;