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
import Heading from "../components/Heading";

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
    ])

    return (
        <Container>
            <Nav />
            <Heading number="03" title="space launch 101" />
        </Container>
    );
}

export default Tech;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    min-height: 100vh;
    background: url(${mobileBG}) lightgray no-repeat 0px 0px / 100% 100%;
    mix-blend-mode: screen;
`;

const ImageContainer = styled.div`
    width: 100%;
    height: 583px;
    background: url(${props => props.background}) lightgray 0px 0px / 100% 100% no-repeat;
`;