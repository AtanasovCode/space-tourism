import { useState, useEffect } from "react";
import styled from "styled-components";
//importing nav
import Nav from "../components/Nav";

//importing images
import mobileBG from '../assets/images/crew/background-crew-mobile.jpg';
import tabletBG from '../assets/images/crew/background-crew-tablet.jpg';
import desktopBG from '../assets/images/crew/background-crew-desktop.jpg';

import crew1 from '../assets/images/crew/image-douglas-hurley.webp';
import crew2 from '../assets/images/crew/image-mark-shuttleworth.webp';
import crew3 from '../assets/images/crew/image-victor-glover.webp';
import crew4 from '../assets/images/crew/image-anousheh-ansari.webp';


const Crew = () => {

    const [crew, setCrew] = useState([
        {
            id: 1,
            name: "Douglas Hurley",
            rank: "Commander ",
            description: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
            url: crew1
        },
        {
            id: 2,
            name: "Mark Shuttleworth",
            rank: "Mission Specialist ",
            description: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
            url: crew2
        },
        {
            id: 3,
            name: "Victor Glover",
            rank: "PILOT",
            description: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. ",
            url: crew3
        },
        {
            id: 4,
            name: "Anousheh Ansari",
            rank: "Flight Engineer",
            description: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. ",
            url: crew4
        },
    ]);

    const [choice, setChoice] = useState(1)
    const [name, setName] = useState("");
    const [rank, setRank] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState();

    //map through the crew members and update state based on which crew member is selected
    useEffect(() => {
        crew.map((item) => {
            if (item.id === choice) {
                setName(item.name);
                setRank(item.rank);
                setDescription(item.description);
                setImage(item.url);
            }
        })
    }, [choice])

    return (
        <Container>
            <PageContainer>
                <Nav />
                <Heading>
                    <TitleNumber>02</TitleNumber>
                    <Title>Meet your crew</Title>
                </Heading>
                <ImageContainer>
                    <CrewImage src={image} alt="image from the crew" />
                </ImageContainer>

                <TextContainer>
                    <Choices>
                        <Choice $active={choice === 1 && true} onClick={() => setChoice(1)}></Choice>
                        <Choice $active={choice === 2 && true} onClick={() => setChoice(2)}></Choice>
                        <Choice $active={choice === 3 && true} onClick={() => setChoice(3)}></Choice>
                        <Choice $active={choice === 4 && true} onClick={() => setChoice(4)}></Choice>
                    </Choices>

                    <Info>
                        <Rank> {rank} </Rank>
                        <Name> {name} </Name>
                        <Description> {description} </Description>
                    </Info>
                </TextContainer>
            </PageContainer>
            <Tint />
        </Container>
    );
}

export default Crew;

const Container = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    background: url(${mobileBG}) no-repeat 0px 0px / 100% 100%;
`;

const Tint = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: black;
    opacity: .4;
    z-index: 1;
`;

const PageContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    z-index: 5;
`;

const Heading = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 2rem;
`;

const TitleNumber = styled.span`
    color: #FFF;
    font-family: Barlow Condensed;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 2.7px;
    opacity: 0.25;
    margin-right: 1rem;
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

const ImageContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-bottom: 2rem;
`;

const CrewImage = styled.img`
    width: 177.123px;
    height: 222px;
`;

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Choices = styled.div`
    width: 88px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 2rem;
`;


const Choice = styled.div`
    width: 10px;
    height: 10px;
    border-radius: 50%;
    opacity: 0.1744;
    background: #FFF;
    cursor: pointer;
    transition: all .4s ease;

    ${props => props.$active && `
        opacity: 1;
    `}
`;

const Info = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Rank = styled.div`
    color: #FFF;
    text-align: center;
    font-family: Bellefair;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-transform: uppercase;
    margin-bottom: .5rem;
    opacity: 0.4951;
`;

const Name = styled.div`
    color: #FFF;
    text-align: center;
    font-family: Bellefair;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-transform: uppercase;
    margin-bottom: 1rem;
`;

const Description = styled.div`
    max-width: calc(327rem / 16);
    color: #D0D6F9;
    text-align: center;
    font-family: Barlow;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 25px; /* 166.667% */
`;