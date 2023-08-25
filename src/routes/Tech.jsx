import { useState, useEffect } from "react";
import styled from "styled-components";

import mobileBG from '../assets/images/technology/background-technology-mobile.jpg';
import tabletBG from '../assets/images/technology/background-technology-tablet.jpg';
import desktopBG from '../assets/images/technology/background-technology-desktop.jpg';

import tech1mobile from '../assets/images/technology/image-launch-vehicle-landscape.jpg';
import tech1desktop from '../assets/images/technology/image-launch-vehicle-portrait.jpg';

import tech2mobile from '../assets/images/technology/image-spaceport-landscape.jpg';
import tech2desktop from '../assets/images/technology/image-spaceport-portrait.jpg';

import tech3mobile from '../assets/images/technology/image-space-capsule-landscape.jpg';
import tech3desktop from '../assets/images/technology/image-space-capsule-portrait.jpg';

import Nav from "../components/Nav";
import Steps from "../components/Steps";

const Tech = () => {

    const [tech, setTech] = useState([
        {
            id: 1,
            name: "LAUNCH VEHICLE",
            description: "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
            imageLandscape: tech1mobile,
            imagePortrait: tech1desktop,

        },
        {
            id: 2,
            name: "SPACEPORT",
            description: "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
            imageLandscape: tech2mobile,
            imagePortrait: tech2desktop,
        },
        {
            id: 3,
            name: "SPACE CAPSULE",
            description: "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
            imageLandscape: tech3mobile,
            imagePortrait: tech3desktop,
        },
    ]);
    const [choice, setChoice] = useState(1);
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [imageLandscape, setImageLandscape] = useState();
    const [imagePortrait, setImagePortrait] = useState();


    useEffect(() => {
        tech.map((item) => {
            if(item.id === choice) {
                setName(item.name);
                setDescription(item.description);
                setImageLandscape(item.imageLandscape);
                setImagePortrait(item.imagePortrait)
            }
        })
    }, [choice])

    return (
        <Container>
            <Nav />
            <Steps number="03" title="space launch 101" />

            <ContentContainer>

                <ImageContainer
                    $imageLandscape={imageLandscape}
                    $imagePortrait={imagePortrait}
                ></ImageContainer>

                <TextContainer>
                    <Choices>
                        <Choice
                            $active={choice === 1 && true}
                            onClick={() => setChoice(1)}
                        >1</Choice>
                        <Choice
                            $active={choice === 2 && true}
                            onClick={() => setChoice(2)}
                        >2</Choice>
                        <Choice
                            $active={choice === 3 && true}
                            onClick={() => setChoice(3)}
                        >3</Choice>
                    </Choices>

                    <Info>
                        <Terminology>
                            The Terminology
                        </Terminology>

                        <TechName>
                            {name}
                        </TechName>

                        <Description>
                            {description}
                        </Description>
                    </Info>
                </TextContainer>
            </ContentContainer>
        </Container>
    );
}

export default Tech;

const Container = styled.div`
    background: url(${mobileBG}) lightgray no-repeat 0px 0px / 100% 100%;
    mix-blend-mode: screen;
    min-height: 100vh;
`;

const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
`;

const ImageContainer = styled.div`
    width: 100%;
    height: 170px;
    background: url(${props => props.$imageLandscape}) lightgray 0px 0px / 100% 100% no-repeat;
    mix-blend-mode: screen;
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
    justify-content: space-between;
    width: calc(152rem / 16);
    margin-top: 2rem;
    margin-bottom: calc(50rem / 16);
`;

const Choice = styled.div`
    width: 40px;
    height: 40px;
    background-color: transparent;
    border: 1px solid rgba(255, 255, 255, .25);
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    border-radius: 50%;
    text-align: center;
    font-family: Bellefair;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 1px;
    cursor: pointer;
    transition: all .4s ease;

    ${props => props.$active && `
        background-color: #fff;
        border: none;
        color: #0B0D17;
    `}
`;

const Info = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;

    @media (min-width: 1024px) {
        align-items: flex-start;
    }
`;

const Terminology = styled.div`
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

    @media (min-width: 768px) {
        font-size: 24px;
        opacity: 0.4994;
    }

    @media (min-width: 1024px) {
        font-size: 32px;
        opacity: 0.5042;
        margin-bottom: 1rem;
        text-align: left;
        width: 100%;
    }
`;

const TechName = styled.div`
    color: #FFF;
    text-align: center;
    font-family: Bellefair;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-transform: uppercase;
    margin-bottom: 1rem;

    @media (min-width: 768px) {
        font-size: 40px;
    }

    @media (min-width: 1024px) {
        font-size: 56px;
        margin-bottom: calc(27rem / 16);
        text-align: left;
        width: 100%;
    }
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
    margin-bottom: 4rem;

    @media (min-width: 768px) {
        line-height: 28px; /* 175% */
        font-size: 16px;
        max-width: calc(458rem / 16);
        margin-bottom: 2.5rem;
    }

    @media (min-width: 1024px) {
        font-size: 18px;
        max-width: calc(444rem / 16);
        line-height: 32px; /* 177.778% */
        text-align: left;
        width: 100%;
    }
`;