import { useState } from "react";
import styled from "styled-components";

import logo from '../assets/logo.svg';
import menu from '../assets/icons/menu.svg';
import close from '../assets/icons/close.svg';

const Nav = () => {

    const [open, setOpen] = useState(false);

    return (
        <Navigation>
            <Logo src={logo} alt="logo" />
            <NavItems open={open}>
                <CloseIcon src={close} alt="close icon" onClick={() => setOpen(false)} />
                <NavItem>
                    <NavNumber>00</NavNumber>
                    <NavName>Home</NavName>
                </NavItem>
                <NavItem>
                    <NavNumber>01</NavNumber>
                    <NavName>Destination</NavName>
                </NavItem>
                <NavItem>
                    <NavNumber>02</NavNumber>
                    <NavName>Crew</NavName>
                </NavItem>
                <NavItem>
                    <NavNumber>03</NavNumber>
                    <NavName>Technology</NavName>
                </NavItem>
            </NavItems>
            <Menu src={menu} alt="hamburger menu" onClick={() => setOpen(true)} />
        </Navigation>
    );
};

export default Nav;


const Navigation = styled.nav`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: calc(25rem / 16);
    padding-bottom: 0;
    margin-bottom: calc(48rem / 16);
`;

const CloseIcon = styled.img`
    width: 20px;
    height: 20px;
    position: absolute;
    top: 33px;
    right: 26px;
    cursor: pointer;
`;

const NavItems = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    position: fixed;
    top: 0;
    right: 0;
    transform: translateX(100%);
    height: 100%;
    //width: 254px;
    width: 68%;
    background: rgba(255, 255, 255, 0.04);
    backdrop-filter: blur(40.774227142333984px);
    z-index: 10;
    padding: calc(118rem / 16) calc(32rem / 16);
    transition: all .2s linear;

    ${props => props.open && `
        transform: translateX(0);
    `}
`;

const NavItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: calc(32rem / 16);
`;

const NavNumber = styled.span`
    color: #FFF;
    font-family: Barlow Condensed;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 2.7px;
    margin-right: calc(11rem / 16);
`;

const NavName = styled.span`
    color: #FFF;
    font-family: Barlow Condensed;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 2.7px;
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