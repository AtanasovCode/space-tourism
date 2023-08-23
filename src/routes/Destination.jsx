import { useState } from "react";

import styled from "styled-components";

import mobileBG from '../assets/images/destination/background-destination-mobile.jpg';
import tabletBG from '../assets/images/destination/background-destination-tablet.jpg';
import desktopBG from '../assets/images/destination/background-destination-desktop.jpg';

import moon from '../assets/images/destination/image-moon.png';


import Nav from "../components/Nav";

const Destination = () => {

    const [destination, setDestination] = useState("moon");
    const [description, setDescription] = useState();
    const [distance, setDistance] = useState("");
    const [time, setTime] = useState();

    return (
        <Container>
            <Nav />
            
            <ImageContainer>
                <Heading>
                    <Number>01</Number>
                    <Title>Pick your destination</Title>
                </Heading>
                <DestinationImage src={moon} />
            </ImageContainer>

            <TextContainer>
                <Choices>
                    <Choice active={destination === "moon" && true}>Moon</Choice>
                    <Choice active={destination === "mars" && true}>Mars</Choice>
                    <Choice active={destination === "europa" && true}>Europa</Choice>
                    <Choice active={destination === "titan" && true}>Titan</Choice>
                </Choices>

                <DestinationChosen>
                    Moon
                </DestinationChosen>

                <DestinationDescription>
                    See our planet as you’ve never seen it before.
                    A perfect relaxing trip away to help regain
                    perspective and come back refreshed. While
                    you’re there, take in some history by
                    visiting the Luna 2 and Apollo 11 landing sites.
                </DestinationDescription>

                <StatsContainer>
                    <DestinationStats>
                        <StatsTitle>Avg. Distance</StatsTitle>
                        <StatNumber>384,400 km</StatNumber>
                    </DestinationStats>
                    <DestinationStats>
                        <StatsTitle>Est. travel time</StatsTitle>
                        <StatNumber>3 days</StatNumber>
                    </DestinationStats>
                </StatsContainer>
            </TextContainer>
        </Container>
    );
}

export default Destination;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    background: url(${mobileBG}) no-repeat 0px 0px / 100% 100%;
    min-height: 100vh;

    @media (min-width: 768px) {
        background: url(${tabletBG}) lightgray no-repeat 0px 0px / 100% 100%;
    }

    @media (min-width: 1024px) {
        background: url(${desktopBG}) lightgray no-repeat 0px 0px / 100% 100%;
        flex-direction: row;
        justify-content: center;
        padding-top: 20%;
    }
`;

const ImageContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-right: calc(18rem / 16);

    @media (min-width: 1024px) {
        width: 50%;
        margin-right: 0;
        justify-content: flex-start;
    }
`;

const Heading = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: calc(32rem / 16);

    @media (min-width: 768px) {
        width: 100%;
        justify-content: flex-start;
        padding-left: calc(38rem / 16);
        margin-bottom: calc(60rem / 16);
    }

    @media (min-width: 1024px) {
        margin-bottom: calc(97rem / 16);
    }
`;

const Number = styled.span`
    color: #FFF;
    font-family: Barlow Condensed;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 2.7px;
    opacity: .25;
    margin-right: calc(18rem / 16);

    @media (min-width: 768px) {
        font-size: 20px;
        letter-spacing: 3.375px;
    }

    @media (min-width: 1024px) {
        font-size: 28px;
        letter-spacing: 4.725px;
    }
`;

const Title = styled.span`
    color: #FFF;
    font-family: Barlow Condensed;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 2.7px;
    text-transform: uppercase;

    @media (min-width: 768px) {
        font-size: 20px;
        letter-spacing: 3.375px;
    }

    @media (min-width: 1024px) {
        font-size: 28px;
        letter-spacing: 4.725px;
    }
`;

const DestinationImage = styled.img`
    width: calc(170rem / 16);
    height: calc(170rem / 16);
    margin-bottom: calc(26rem / 16);

    @media (min-width: 768px) {
        width: calc(300rem / 16);
        height: calc(300rem / 16);
    }

    @media (min-width: 1024px) {
        width: calc(445rem / 16);
        height: calc(445rem / 16);
    }
`;

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media (min-width: 1024px) {
        align-items: flex-start;
    }
`;

const Choices = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    max-width: 237.5px;
    margin-bottom: calc(20rem / 16);

    @media (min-width: 768px) {
        margin-bottom: calc(32rem / 16);
        max-width: calc(285.5rem / 16);
    }

    @media (min-width: 1024px) {
        justify-content: space-between;
        margin-bottom: calc(37rem / 16);
    }
`;

const Choice = styled.div`
    color: ${props => props.theme.gray};
    font-family: Barlow Condensed;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 2.362px;
    text-transform: uppercase;

    ${props => props.active && `
        border-bottom: 2px solid #fff;
    `}

    @media (min-width: 768px) {
        font-size: 16px;
        letter-spacing: 2.7px;
    }
`;

const DestinationChosen = styled.div`
    color: #FFF;
    text-align: center;
    font-family: Bellefair;
    font-size: 56px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-transform: uppercase;
    padding: 8px 0;

    @media (min-width: 768px) {
        font-size: 80px;
    }

    @media (min-width: 768px) {
        font-size: 100px;
    }
`;

const DestinationDescription = styled.div`
    olor: #D0D6F9;
    text-align: center;
    font-family: Barlow;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 25px; /* 166.667% */
    max-width: calc(327rem / 16);
    margin: 0 calc(10rem / 16);
    margin-bottom: calc(65rem / 16);

    @media (min-width: 768px) {
        font-size: 16px;
        line-height: 28px;
        max-width: calc(573rem / 16);
    }

    @media (min-width: 1024px) {
        font-size: 18px;
        line-height: 32px; /* 177.778% */
        text-align: left;
        max-width: calc(444rem / 16);
    }
`;

const StatsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media (min-width: 768px) {
        margin-top: calc(78rem / 16);
        width: 100%;
        flex-direction: row;
        justify-content: space-evenly;
    }
`;

const DestinationStats = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: calc(32rem / 16);

    @media (min-width: 1024px) {
        align-items: flex-start;
        width: 100%;
    }
`;

const StatsTitle = styled.div`
    color: #D0D6F9;
    text-align: center;
    font-family: Barlow Condensed;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 2.362px;
    text-transform: uppercase;

    @media (min-width: 1024px) {
        margin-bottom: calc(12rem / 16);
    }
`;

const StatNumber = styled.div`
    color: #FFF;
    text-align: center;
    font-family: Bellefair;
    font-size: 28px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-transform: uppercase;
`;