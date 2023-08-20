import styled from "styled-components";

import backgroundBottom from '../assets/images/home-mobile-bg.png';
import background from '../assets/images/background.png';


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
`;

const Heading = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: ${props => props.theme.white};
    padding: 0 20px 20px 20px;
    background: url(${background}), lightgray 0px 0px / 100% 100% no-repeat;
    mix-blend-mode: screen;
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
    margin-bottom: 16px;
`;

const Space = styled.div`
    color: ${props => props.theme.white};
    text-align: center;
    font-family: Bellefair;
    font-size: 80px;
    font-style: normal;
    font-weight: 400;
    line-height: 100px; /* 125% */
    margin-bottom: 16px;
`;

const Subtitle = styled.div`
    color: ${props => props.theme.gray};
    text-align: center;
    font-family: Barlow;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 25px; /* 166.667% */
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
    background: url(${backgroundBottom}) lightgray 0px 0px / 100% 100% no-repeat;
    mix-blend-mode: screen;
`; 