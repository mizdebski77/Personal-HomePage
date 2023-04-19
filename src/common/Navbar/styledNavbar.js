import { Link } from "react-scroll";
import styled from "styled-components";
import { inNavbar, outNavbar } from "../animationsStore";

export const Wrapper = styled.nav`
    background: ${({ theme }) => theme.color.navbar};
    position: sticky;
    z-index: 10;
    top: 0;
`;

export const NavbarContent = styled.section`
    max-width: 1600px;
    display: flex;
    justify-content: space-between;
    margin: auto;
    padding: 20px;
`;

export const Logo = styled(Link)`
    color: ${({ theme }) => theme.color.fontSecond};
    font-weight: bold;
    font-size: 30px;
    cursor: pointer;
    
    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px) {
      font-size: 20px;
    }
`;

export const LinksContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(5, auto);
    gap: 50px;
    align-items: center;

    @media (max-width: ${({ theme }) => theme.breakPoint.mobileMax}px) {
        display: none;
    }
`;

const activeClassName = "active";

export const Links = styled(Link)`
    color: ${({ theme }) => theme.color.white};
    text-decoration: none;
    text-transform: uppercase;
    cursor: pointer;



    &.${activeClassName} {
    color: ${({ theme }) => theme.color.fontSecond};
    border-bottom: 1px solid ${({ theme }) => theme.color.fontSecond};
  }
`;

export const PhoneNavbarContainer = styled.div`
  background: ${({ theme }) => theme.color.navbar};
  position: fixed;
  padding: 20px;
  width: 100%;
  display: grid;
  z-index: 980;
  grid-gap: 20px;
  opacity: 10%;
  animation: ${({ phoneNavbar }) => (phoneNavbar ? inNavbar : outNavbar)} 0.5s ease-in-out forwards;

@media (min-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
    display: none;
  }
`;

export const PhoneNavbar = styled.div`
  cursor: pointer;

  @media (min-width: ${({ theme }) => theme.breakPoint.mobileMax}px){
    display: none;
  }
`;
