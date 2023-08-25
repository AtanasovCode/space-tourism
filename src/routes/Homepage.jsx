import styled from "styled-components";
import { Link } from "react-router-dom";

import mobileBG from '../assets/images/home/background-home-mobile.jpg'
import tabletBG from '../assets/images/home/background-home-tablet.jpg'
import desktopBG from '../assets/images/home/background-home-desktop.jpg'



//importing components
import Nav from "../components/Nav";

const Homepage = () => {
    return (
        <Container>
            <Nav />
            <Heading>
                <Title>
                    SO, YOU WANT TO TRAVEL TO
                </Title>
                <Space>
                    SPACE
                </Space>
                <Subtitle>
                    Let’s face it; if you want to go to space,
                    you might as well genuinely go to outer space
                    and not hover kind of on the edge of it.
                    Well sit back, and relax because we’ll
                    give you a truly out of this world experience!
                </Subtitle>
            </Heading>
            <Explore to="/destinations">
                Explore
            </Explore>
        </Container>
    );
}

export default Homepage;

const Container = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    background: url(${mobileBG}) lightgray no-repeat 0px 0px / 100% 100%;
    mix-blend-mode: screen;

    @media (min-width: 768px) {
        background: url(${tabletBG}) lightgray  no-repeat 0px 0px / 100% 100%;
    }

    @media (min-width: 1024px) {
        flex-direction: row;
        align-items: flex-end;
        justify-content: space-between;
        background: url(${desktopBG}) lightgray no-repeat 0px 0px / 100% 100%;
        padding-top: 5%;
    }
`;

const Heading = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: ${props => props.theme.white};
    padding: calc(30rem / 16);
    padding-top: 0;
    mix-blend-mode: screen;

    @media (min-width: 768px) {
        margin-top: calc(106rem / 16);
    }

    @media (min-width: 1024px) {
        padding: calc(15rem / 16);
        margin: calc(115rem / 16) calc(155rem / 16);
    }
`;

const Title = styled.div`
    color: ${props => props.theme.gray};
    text-align: center;
    font-family: Barlow Condensed;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 2.7px;
    margin-bottom: 1rem;

    @media (min-width: 768px) {
        font-size: 20px;
        letter-spacing: 3.375px;
        margin-bottom: calc(24rem / 16);
    }

    @media (min-width: 1024px) {
        font-size: 28px;
        letter-spacing: 4.725px;
        text-align: left;
        width: 100%;
    }
`;

const Space = styled.div`
    color: ${props => props.theme.white};
    text-align: center;
    font-family: Bellefair;
    font-size: 80px;
    font-style: normal;
    font-weight: 400;
    line-height: 100px; /* 125% */
    margin-bottom: 1rem;
    padding: .7rem 0;

    @media (min-width: 768px) {
        font-size: 150px;
        line-height: 150px;
        margin-bottom: calc(24rem / 16);
    }
`;

const Subtitle = styled.div`
    color: ${props => props.theme.gray};
    text-align: center;
    font-family: Barlow;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 25px; /* 166.667% */
    max-width: calc(444rem / 16);

    @media (min-width: 768px) {
        font-size: 16px;
        line-height: 28px; /* 175% */
    }

    @media (min-width: 1024px) {
        text-align: left;
        font-size: 18px;
        line-height: 32px;
    }
`;

const Explore = styled(Link)`
    width: calc(150rem / 16);
    height: calc(150rem / 16);
    border-radius: 50%;
    background-color: ${props => props.theme.white};
    display: flex;
    align-items: center;
    justify-content: center;
    color: #0B0D17;
    font-family: Bellefair;
    font-size: 20px;
    font-style: normal;
    text-decoration: none;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 1.25px;
    text-transform: uppercase;
    cursor: pointer;
    margin-bottom: calc(48rem / 16);

    @media (min-width: 768px) {
        width: calc(242rem / 16);
        height: calc(242rem / 16);
        font-size: 32px;
        letter-spacing: 2px;
        bottom: calc(90rem / 16);
        z-index: 10;
    }

    @media (min-width: 1024px) {
        width: calc(274rem / 16);
        height: calc(274rem / 16);
        position: absolute;
        bottom: 9%;
        right: 11%;

        &::before {
            content: '';
            position: absolute;
            width: calc(274rem / 16);
            height: calc(274rem / 16);
            border-radius: 50%;
            transition: all .3s linear;
        }

        &:hover::before {
            width: calc(450rem / 16);
            height: calc(450rem / 16);
            background-color: #FFFFFF;
            opacity: 0.1036;
            z-index: -1;
        }
    }
`;