import { useState } from "react";

import styled from "styled-components";

import mobileBG from '../assets/images/destination/background-destination-mobile.jpg';
import tabletBG from '../assets/images/destination/background-destination-tablet.jpg';
import desktopBG from '../assets/images/destination/background-destination-desktop.jpg';


import Nav from "../components/Nav";

const Destination = () => {

    const [destination, setDestination] = useState("moon");

    return (
        <Container>
            <Nav />
            <Heading>
                <Number>01</Number>
                <Title>Pick your destination</Title>
            </Heading>
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

const Heading = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
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