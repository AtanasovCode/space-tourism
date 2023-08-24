import { useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

import logo from '../assets/logo.svg';
import menu from '../assets/icons/menu.svg';
import close from '../assets/icons/close.svg';

const Nav = ({
    activeTab
}) => {

    const [open, setOpen] = useState(false);

    return (
        <Navigation>
            <Logo src={logo} alt="logo" />
            <NavItems open={open}>
                <CloseIcon src={close} alt="close icon" onClick={() => setOpen(false)} />
                <NavItem
                    to="/"
                >
                    <NavNumber>00</NavNumber>
                    <NavName>Home</NavName>
                </NavItem>
                <NavItem
                    to="/destinations"
                >
                    <NavNumber>01</NavNumber>
                    <NavName>Destination</NavName>
                </NavItem>
                <NavItem
                    to="/crew"
                >
                    <NavNumber>02</NavNumber>
                    <NavName>Crew</NavName>
                </NavItem>
                <NavItem
                    to="/technology"
                >
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
    margin-bottom: calc(48rem / 16);

    @media (min-width: 768px) {
        padding: 0;
    }

    @media (min-width: 1024px) {
        position: absolute;
        top: calc(40rem / 16);
        left: 0;
    }
`;

const CloseIcon = styled.img`
    width: 20px;
    height: 20px;
    position: absolute;
    top: 33px;
    right: 26px;
    cursor: pointer;
    display: block;

    @media (min-width: 768px) {
        display: none;
    }
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
    max-width: calc(300rem / 16);
    background: rgba(255, 255, 255, 0.04);
    backdrop-filter: blur(40.774227142333984px);
    z-index: 10;
    padding: calc(118rem / 16) calc(32rem / 16);
    transition: all .2s linear;

    ${props => props.open && `
        transform: translateX(0);
    `}

    @media (min-width: 768px) {
        position: relative;
        transform: translateX(0);
        background: rgba(255, 255, 255, 0.04);
        backdrop-filter: blur(40.774227142333984px);
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-evenly;
        height: auto;
        max-width: calc(450rem / 16);
        width: calc(450rem / 16);
        padding: calc(40rem / 16) calc(48rem / 16);
    }

    @media (min-width: 1024px) {
        position: relative;
        width: calc(850rem / 16);
        max-width: calc(850rem / 16);
        background: rgba(255, 255, 255, 0.04);
        backdrop-filter: blur(40.774227142333984px);
    }
`;

const NavItem = styled(NavLink)`
    text-decoration: none;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: calc(32rem / 16);
    cursor: pointer;
    position: relative;

    &.active::before {
        content: '';
        position: absolute;
        width: 100%;
        height: 3px;
        bottom: calc(-40rem / 16);
        transition: all .3s ease;
        background-color: #fff;
    }

    &:hover::before {
        ${props => !props.$active && `
            background-color: #fff;
            opacity: 0.5021;
        `}
    }

    @media (min-width: 768px) {
        margin-bottom: 0;
    }
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
    display: span;

    @media (min-width: 768px) {
        display: none;
    }

    @media (min-width: 1024px) {
        display: block;
    }
`;

const NavName = styled.span`
    color: #FFF;
    font-family: Barlow Condensed;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 2.7px;

    @media (min-width: 768px) {
        color: #FFF;
        font-size: 14px;
        letter-spacing: 2.362px;
    }

    @media (min-width: 1024px) {
        font-size: 16px;
    }
`;

const Logo = styled.img`
    width: 40px;
    height: 40px;
    cursor: pointer;

    @media (min-width: 768px) {
        margin: calc(25rem / 16);
    }

    @media (min-width: 1024px) {
        width: 48px;
        height: 48px;
    }
`;

const Menu = styled.img`
    width: 24px;
    height: 21px;
    cursor: pointer;
    display: block;

    @media (min-width: 768px) {
        display: none;
    }
`;