import styled from "styled-components";
import Wrapper from "../atoms/Wrapper";
import Me from "../../public/images/me.jpg";
import Image from "next/image";
import Skills from "../modules/Skills";
import { Device } from "../../devices";
import Break from "../atoms/Break";

const Section = styled.section`
    width: 100%;
    margin-bottom: 0px;
    position: relative;
    z-index: 9;
    padding-top: 64px;

    @media ${Device.laptop} {
        margin-bottom: 200px;
    }
`

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column-reverse;
    justify-content: center;
    align-items: flex-start;

    @media ${Device.laptop} {
        flex-direction: row;
    }
`

const ImageContainer = styled.div`
    position: relative;
    width: 100%;
    height: 60vh;
    border-radius: 32px;
    overflow: hidden;

    @media ${Device.laptop} {
        width: 45%;
        height: 80vh;
    }

    &>p {
        opacity: 0;
        transition-delay: 0ms;
    }

    @media (hover: hover) {
        & img {
            transition: transform 300ms ease-in-out;
            transition-delay: 0ms;
        }

        &:hover {
            &>p {
                opacity: 1;
                transition-delay: 3300ms;
            }

            & img {
                transform: scale(3.5) translate(16%, 19%);
                transition-delay: 3000ms;
            }
        }
    }
`

const Content = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding-left: 0;

    @media ${Device.laptop} {
        width: 55%;
        padding-left: 64px;
    }
`

const Heading = styled.h2`
    margin-bottom: 24px;
`

const Body = styled.p`
    max-width: 510px;
    opacity: 0.6;
    margin-bottom: 40px;

    @media ${Device.laptop} {
        margin-bottom: 64px;
    }
`

const MobileOnlyContainer = styled.div`
    display: block;

    @media ${Device.laptop} {
        display: none;
    }
`

const NotMobileContainer = styled.div`
    display: none;
    margin-top: 64px;

    @media ${Device.laptop} {
        display: block;
    }
`

const Caption = styled.p`
    position: absolute;
    text-transform: uppercase;
    text-align: center;
    font-size: 48px;
    font-weight: 900;
    line-height: 72px;
    color: white;
    text-shadow: 
        2px 2px 0px #111, 
        -2px -2px 0px #111,
        -2px 0px 0px #111,
        0px -2px 0px #111,
        2px 0px 0px #111,
        0px 2px 0px #111;
    left: 50%;
    width: 100%;
    transform: translateX(-50%);
    ${( {alignment} : {alignment: 'top' | 'bottom'} ) => alignment == 'top' ? 'top: 48px' : 'bottom: 48px' };
`

const About = () => {

    return (
        <Section id='about'>
            <Wrapper>
                <Container>
                    <ImageContainer>
                        <Image src={Me} alt='Portrait of the interaction designer and frontend developer Dimitri Balzer' layout='fill' objectFit='cover' />
                        <Caption alignment='top' >Me looking at an</Caption>
                        <Caption alignment='bottom' >exciting project</Caption>
                    </ImageContainer>
                    <Content>
                        <Heading>About Me</Heading>
                        <Body>
                            Hi! I&apos;m an interaction designer, frontend developer and smart home enthusiast based in Berlin, Germany.
                            My Mission is to design and develop visually breathtaking and accessible digital products.
                            <Break behavior='tablet-desktop' />I&apos;m constantly looking for new challenges and exciting projects. So let&apos;s work together!
                        </Body>
                        <NotMobileContainer>
                            <Skills />
                        </NotMobileContainer>
                    </Content>
                </Container>
                <MobileOnlyContainer>
                    <Skills />
                </MobileOnlyContainer>
            </Wrapper>
        </Section>
    )
}

export default About