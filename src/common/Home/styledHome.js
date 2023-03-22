import styled from "styled-components";

export const Wrapper = styled.main`
    min-height: 100vh;
    background: linear-gradient(
    to right,
    ${({theme}) => theme.color.mainColor} 0%,
    ${({theme}) => theme.color.mainColor} 60%,
    ${({theme}) => theme.color.secondColor} 50%,
    ${({theme}) => theme.color.secondColor} 100%
  );
`;