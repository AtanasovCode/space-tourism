import styled from "styled-components";

import logo from '../assets/logo.svg';
import menu from '../assets/icons/menu.svg';

const Nav = () => {
    return (
        <Navigation>
            <Logo src={logo} alt="logo" />
            <Menu src={menu} alt="hamburger menu" />
        </Navigation>
    );
};

export default Nav;

const Navigation = styled.nav`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 25px;
    padding-bottom: 0;
    margin-bottom: 48px;
`;

const Logo = styled.img`
    width: 40px;
    height: 40px;
    cursor: pointer;
`;

const Menu = styled.img`
    width: 24px;
    height: 21px;
    cursor: pointer;
`;