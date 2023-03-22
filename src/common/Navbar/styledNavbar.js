import { Link } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled.nav`
    background: ${({theme}) => theme.color.navbar};
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

export const Logo = styled.div`
    color: ${({theme}) => theme.color.fontSecond};
    font-weight: bold;
    font-size: 30px;
`;

export const LinksContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(5, auto);
    gap: 50px;
    align-items: center;
`;

export const Links = styled(Link)`
    color: ${({theme}) => theme.color.white};
    text-decoration: none;
    text-transform: uppercase;
`;