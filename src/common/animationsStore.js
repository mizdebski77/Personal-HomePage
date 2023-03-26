import { keyframes } from "styled-components";

export const titleRightAnimation = keyframes`
  from {
    right: 0px
  }
  to {
    right: 200px;
  }
`;

export const titleLeftAnimation = keyframes`
  from {
    left: -10%;
  }
  to {
    left: 150px;
  }
`;



export const leftAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateX(-200%);
  } to {
    opacity: 1;
    transform: translateX(0%);
  }
`;

export const rightAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateX(200%);
  } to {
    opacity: 1;
    transform: translateX(0%);
  }
`