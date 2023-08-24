import styled from "styled-components";

//importing nav
import Nav from "../components/Nav";

//importing images
import mobileBG from '../assets/images/crew/background-crew-mobile.jpg';
import tabletBG from '../assets/images/crew/background-crew-tablet.jpg';
import desktopBG from '../assets/images/crew/background-crew-desktop.jpg';

import crew1 from '../assets/images/crew/image-douglas-hurley.webp';



const Crew = () => {
    return (
        <Container>
            <PageContainer>
                <Nav />
                <Heading>
                    <TitleNumber>02</TitleNumber>
                    <Title>Meet your crew</Title>
                </Heading>
                <ImageContainer>
                    <CrewImage src={crew1} alt="image from the crew" />
                </ImageContainer>

                <TextContainer>
                    <Choices>
                        <Choice></Choice>
                        <Choice></Choice>
                        <Choice></Choice>
                        <Choice></Choice>
                    </Choices>
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
    margin-bottom: calc(33rem / 16);
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
`;


const Choice = styled.div`
    width: 10px;
    height: 10px;
    border-radius: 50%;
    opacity: 0.1744;
    background: #FFF;
`;

const Info = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Rank = styled.div``;

const Name = styled.div``;

const Description = styled.div``;