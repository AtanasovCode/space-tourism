import { useEffect, useState } from "react";

import styled from "styled-components";

import mobileBG from '../assets/images/destination/background-destination-mobile.jpg';
import tabletBG from '../assets/images/destination/background-destination-tablet.jpg';
import desktopBG from '../assets/images/destination/background-destination-desktop.jpg';

import moon from '../assets/images/destination/image-moon.png';
import mars from '../assets/images/destination/image-mars.png';
import europa from '../assets/images/destination/image-europa.png';
import titan from '../assets/images/destination/image-titan.png';



import Nav from "../components/Nav";
import Steps from "../components/Steps";

const Destination = () => {

    const [destinations, setDestinations] = useState([
        {
            name: "moon",
            description: "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
            duration: "3 days",
            distance: "384,400 km",
            url: moon,
        },
        {
            name: "mars",
            description: "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
            duration: "9 months",
            distance: "225 MIL. km",
            url: mars,
        },
        {
            name: "europa",
            description: "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
            duration: "3 years",
            distance: "628 MIL. km",
            url: europa,
        },
        {
            name: "titan",
            description: "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
            duration: "7 years",
            distance: "1.6 BIL. km",
            url: titan,
        },
    ]);
    const [chosenDestination, setChosenDestination] = useState("moon");
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState();
    const [distance, setDistance] = useState("");
    const [duration, setDuration] = useState("");

    useEffect(() => {
        destinations.map((destination) => {
            if (destination.name === chosenDestination) {
                setName(destination.name);
                setDescription(destination.description);
                setImage(destination.url);
                setDuration(destination.duration);
                setDistance(destination.distance);
            }
        })
    }, [chosenDestination])

    return (
        <Container>
            <Nav />

            <ImageContainer>
                <Steps number="01" title="Pick your destination" />
                <DestinationImage src={image} />
            </ImageContainer>

            <TextContainer>
                <Choices>
                    <Choice
                        active={chosenDestination === "moon" && true}
                        onClick={() => setChosenDestination("moon")}
                    >
                        Moon
                    </Choice>
                    <Choice
                        active={chosenDestination === "mars" && true}
                        onClick={() => setChosenDestination("mars")}
                    >
                        Mars
                    </Choice>
                    <Choice
                        active={chosenDestination === "europa" && true}
                        onClick={() => setChosenDestination("europa")}
                    >
                        Europa
                    </Choice>
                    <Choice
                        active={chosenDestination === "titan" && true}
                        onClick={() => setChosenDestination("titan")}
                    >
                        Titan
                    </Choice>
                </Choices>

                <DestinationChosen>
                    {name}
                </DestinationChosen>

                <DestinationDescription>
                    {description}
                </DestinationDescription>

                <StatsContainer>
                    <DestinationStats>
                        <StatsTitle>Avg. Distance</StatsTitle>
                        <StatNumber> {distance} </StatNumber>
                    </DestinationStats>
                    <DestinationStats>
                        <StatsTitle>Est. travel time</StatsTitle>
                        <StatNumber>{duration}</StatNumber>
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
    background: url(${mobileBG}) lightgray no-repeat 0px 0px / 100% 100%;
    mix-blend-mode: screen;
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
    padding-bottom: calc(8rem / 16);
    cursor: pointer;

    ${props => props.active && `
        border-bottom: 3px solid #fff;
    `}

    @media (min-width: 768px) {
        font-size: 16px;
        letter-spacing: 2.7px;
        padding-bottom: calc(12rem / 16);
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