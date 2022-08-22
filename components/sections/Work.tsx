import Link from "next/link";
import styled from "styled-components";
import { Device } from "../../devices";
import Button from "../atoms/Button";
import Wrapper from "../atoms/Wrapper";


const Section = styled.section`
    width: 100%;
    position: relative;
    z-index: 9;
    margin: 96px 0 0 0;
    background-color: transparent;

    @media ${Device.tablet} {
        margin: 200px 0;
    }
`

const Heading = styled.h2`
    margin-bottom: 64px;
`

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    position: relative;
`

const Card = styled.div`
    width: 100%;
    height: 100%;
    min-height: 87vh;
    display: flex;
    align-items: flex-start;
    border-radius: 32px;
    overflow: hidden;
    padding: 24px;
    position: sticky;
    top: 32px;

    @media ${Device.tablet} {
        min-height: 620px;
        padding: 80px;
        top: 15%;
        align-items: center;
    }
`

const Soulidarity = styled(Card)`
    justify-content: flex-start;
    background: #F3DEFD;
    z-index: 9;
    background-image: url('/images/background_soulidarity_mobile.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;

    @media ${Device.laptop} {
        background-image: url('/images/background_soulidarity.jpg');
    }
`

const Color = styled(Card)`
    margin-top: 300px;
    justify-content: flex-end;
    background: #DDDDDD;
    z-index: 11;
    background-image: url('/images/background_ioc_mobile.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;

    @media ${Device.laptop} {
        background-image: url('/images/background_ioc.jpg');
    }
`

const Content = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    @media ${Device.tablet} {
        width: 50%;
    }
`

const Type = styled.p`
    font-size: 16px;
    font-weight: 700;
    line-height: 19px;
    color: rgba(17, 17, 17, 0.4);
    margin-left: 2px;
`

const Title = styled.h3`
    font-size: 24px;
    font-weight: 600;
    line-height: normal;

    @media ${Device.tablet} {
        font-size: 48px;
        line-height: 58px;
    }
`

const Body = styled.p`
    margin: 24px 0 40px 0;
`

const Spacer = styled.div`
    height: 96px;

    @media ${Device.tablet} {
        height: 200px;
    }
`

const CardButton = styled(Button)`
    display: none;

    @media ${Device.tablet} {
        display: block;
    }
`

const Work = () => {

    return (
        <Section id='work'>
            <Wrapper>
                <Container>
                    <Heading>My Work</Heading>
                    <Soulidarity>
                        <Content>
                            <Type>Case study</Type>
                            <Title>Soulidarity</Title>
                            <Body>
                                Use this App to purchase tickets for any kind of events, be it a concert, a musical, or a stage play.
                                And choose which charity will receive a part of the ticket price as a Donation.
                                <br/><br/>
                                Learn more about the approach I took to create this conceptual app. From user research to a high-fidelity prototype.
                            </Body>
                            <Link href="/" passHref >
                                <CardButton>Read More</CardButton>
                            </Link>
                        </Content>
                    </Soulidarity>
                    <Color>
                        <Content>
                            <Type>Webapp</Type>
                            <Title>Interaction of Color</Title>
                            <Body>
                                Experience the theories of the late Yale professor, Josef Albers, and his students in an interactive web experience.
                                <br/>
                                Explore and create your own experiments and see how deceptive colors can be.
                            </Body>
                            <Link href="/" passHref >
                                <CardButton>Read More</CardButton>
                            </Link>
                        </Content>
                    </Color>
                    <Spacer />
                </Container>
            </Wrapper>
        </Section>
    )
}

export default Work