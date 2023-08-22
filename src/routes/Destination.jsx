import { useState } from "react";

import styled from "styled-components";

import mobileBG from '../assets/images/destination/background-destination-mobile.jpg';
import tabletBG from '../assets/images/destination/background-destination-tablet.jpg';
import desktopBG from '../assets/images/destination/background-destination-desktop.jpg';

import moon from '../assets/images/destination/image-moon.png';


import Nav from "../components/Nav";

const Destination = () => {

    const [destination, setDestination] = useState("moon");

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
                    <Choice>Moon</Choice>
                    <Choice>Mars</Choice>
                    <Choice>Europa</Choice>
                    <Choice>Titan</Choice>
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
`;

const ImageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-right: calc(18rem / 16);
`;

const Heading = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: calc(32rem / 16);
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
`;

const DestinationImage = styled.img`
    width: 170px;
    height: 170px;
    margin-bottom: calc(26rem / 16);
`;

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Choices = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    max-width: 237.5px;
    margin-bottom: calc(20rem / 16);
`;

const Choice = styled.div`
    color: #FFF;
    font-family: Barlow Condensed;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 2.362px;
    text-transform: uppercase;
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
`;

const DestinationDescription = styled.div`
    color: #D0D6F9;
    text-align: center;
    font-family: Barlow;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 25px; /* 166.667% */
    max-width: calc(327rem / 16);
    margin: 0 calc(10rem / 16);
    margin-bottom: calc(65rem / 16);
`;

const StatsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const DestinationStats = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: calc(32rem / 16);
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