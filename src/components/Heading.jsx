import styled from "styled-components";

const Heading = ({
    number,
    title
}) => {
    return (
        <Container>
            <Number> {number} </Number>
            <Title> {title} </Title>
        </Container>
    );
}

export default Heading;

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 2rem;

    @media (min-width: 768px) {
        width: 100%;
        justify-content: flex-start;
        padding-left: calc(38rem / 16);
        margin-bottom: calc(60rem / 16);
    }

    @media (min-width: 1024px) {
        margin-bottom: calc(97rem / 16);
        margin-left: calc(166rem / 16);
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