import styled from "styled-components";

import backgroundBottomMobile from '../assets/images/home-mobile-bg.png';
import backgroundBottomTablet from '../assets/images/home-tablet-bg.png';
import backgroundBottomDesktop from '../assets/images/home-desktop-bg.png';
import backgroundTopMobile from '../assets/images/background-top-mobile.png';
import backgroundTopTablet from '../assets/images/background-top-tablet.png';


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
            <ImageBackground>
                <Explore>Explore</Explore>
            </ImageBackground>
        </Container>
    );
}

export default Homepage;

const Container = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    @media (min-width: 1024px) {
        flex-direction: row;
        align-items: flex-start;
        justify-content: flex-end;
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
    background: url(${backgroundTopMobile});
    mix-blend-mode: screen;

    @media (min-width: 768px) {
        background: url(${backgroundTopTablet});
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

    @media (min-width: 768px) {
        font-size: 150px;
        line-height: 150px;
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
`;

const Explore = styled.div`
    width: 150px;
    height: 150px;
    border-radius: 50%;
    background-color: ${props => props.theme.white};
    display: flex;
    align-items: center;
    justify-content: center;
    color: #0B0D17;
    text-align: center;
    font-family: Bellefair;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 1.25px;
    text-transform: uppercase;
    cursor: pointer;

    @media (min-width: 768px) {
        width: 242px;
        height: 242px;
        font-size: 32px;
        letter-spacing: 2px;
    }
`;

const ImageBackground = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    height: 55%;
    width: 100%;
    padding-bottom: 48px;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    background: url(${backgroundBottomMobile}) lightgray 0px 0px / 100% 100% no-repeat;
    mix-blend-mode: screen;

    @media (min-width: 768px) {
        background: url(${backgroundBottomTablet}) lightgray 0px 0px / 100% 100% no-repeat;
    }

    @media (min-width: 1024px) {
        background: url(${backgroundBottomDesktop}) lightgray 0px 0px / 100% 100% no-repeat;
        top: 0;
        left: auto;
        right: 0;
        height: 100vh;
        padding-bottom: 0;
        align-items: center;
        justify-content: center;
    }
`; 