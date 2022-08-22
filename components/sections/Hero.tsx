import Image from "next/image";
import styled, { keyframes } from "styled-components";
import { Device } from "../../devices";
import ScrollIndicator from "../atoms/ScrollIndicator";
import Wrapper from "../atoms/Wrapper";

import DesignSystem from '../../public/images/design_system.png'
import Code from '../../public/images/code.png'
import Mockup from '../../public/images/mockup.png'
import { motion } from "framer-motion";

const Section = styled.section`
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
    flex-direction: column;
    margin-top: -72px;
`

const Content = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    position: relative;
    z-index: 9;
`

const Background = styled.div`
    position: absolute;
    top: 0;
    bottom: -100vh;
    left: 0;
    right: 0;
    z-index: 0;
    background-image: url('/images/hero_gradient_mobile.jpg');
    background-repeat: no-repeat;
    background-size: cover;

    @media ${Device.laptop} {
        background-image: url('/images/hero_gradient.jpg');
    }
`

const Container = styled(motion.div)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 130px;

    @media ${Device.laptop} {
        margin-top: 150px;
    }
`

const fadeIn = keyframes`
    0% { opacity: 0; }
    100% { opacity: 1; }
`

const moveFadeIn = keyframes`
    0% { 
        opacity: 0;
        transform : translateY(32px);
    }
    100% { 
        opacity: 1;
        transform : translateY(0px);
    }
`

const Title = styled.h1`
    font-size: 28px;
    font-weight: 700;
    line-height: 110%;
    text-align: center;
    letter-spacing: 0;
    opacity: 0;
    transform: translateY(32px);
    animation: ${moveFadeIn} 1000ms ease-in-out 0ms 1 forwards;

    @media ${Device.laptop} {
        font-size: 48px;
        line-height: 53px;
        font-weight: 700;
        letter-spacing: 0.05rem;
    }
`

const Subtitle = styled.h2`
    font-size: 16px;
    font-weight: 500;
    line-height: 19px;
    text-align: center;
    color: rgba(17, 17, 17, 0.6);
    margin-bottom: 8px;
    opacity: 0;
    animation: ${fadeIn} 1000ms ease-in 0ms 1 forwards;
    animation-delay: 400ms;

    @media ${Device.laptop} {
        font-size: 20px;
        line-height: 24px;
        text-align: center;
    }
`

const ImageRow = styled.div`
    margin-top: auto;
    margin-bottom: 0;
    width: 100%;
    height: 350px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-end;
`

const BottomRow = styled(motion.div)`
    width: 100%;
    margin-top: auto;
    margin-bottom: 0;
    padding-bottom: 48px;
    transition: opacity 200ms ease-in;

    @media ${Device.laptop} {
        padding-bottom: 24px;
    }
`

const ImageContainer = styled(motion.div)`
    position: relative;
    display: none;
    width: 25%;
    height: 100%;
    align-self: ${ ({ align='center' } : { align?: 'center' | 'flex-start' }) => align };

    @media ${Device.laptop} {
        display: flex;
    }
`

const CenterImage = styled(ImageContainer)`
    display: block;
    width: 100%;
    
    @media ${Device.laptop} {
        width: 30%;
    }
`

const Hero = () => {

    return (
        <Section>
            <Background />
            <Wrapper>
                <Content>
                    <Container>
                        <Subtitle> {/* Subtitle */}
                            Interaction Designer &amp; Frontend Developer
                        </Subtitle>
                        <Title> {/* Hero Title */}
                            Hi, nice to meet you!<br/>I help you turn ideas into<br/>stunning digital products.
                        </Title>
                    </Container>
                    <ImageRow>
                        <ImageContainer
                            style={{ height: '50%' }}
                            initial={{
                                translateY: 75,
                                opacity: 0,
                            }}
                            animate={{
                                translateY: 0,
                                opacity: 1,
                            }}
                            transition={{ type: 'linear', duration: 1.2, delay: 0.2 }}
                        >
                            <Image src={DesignSystem} alt='Conceptual design system for a digital product' objectFit='contain' layout="fill" priority/>
                        </ImageContainer>
                        <CenterImage
                            initial={{
                                translateY: 40,
                                opacity: 0,
                            }}
                            animate={{
                                translateY: 0,
                                opacity: 1,
                            }}
                            transition={{ type: 'linear', duration: 1.2, delay: 0.4 }}
                        >
                            <Image src={Mockup} alt='Artistic mock-up of a navigation app' objectFit='contain' layout="fill" priority />
                        </CenterImage>
                        <ImageContainer 
                            align='flex-start' 
                            style={{ height: '50%' }}
                            initial={{
                                translateY: 60,
                                opacity: 0,
                            }}
                            animate={{
                                translateY: 0,
                                opacity: 1,
                            }}
                            transition={{ type: 'linear', duration: 1.4, delay: 0.6 }}
                        >
                            <Image src={Code} alt='Conceptual graphic of a code snippet inspired by typescript' objectFit='contain' layout="fill" priority />
                        </ImageContainer>
                    </ImageRow>
                    <BottomRow>
                        <ScrollIndicator />
                    </BottomRow>
                </Content>
            </Wrapper>
        </Section>
    )
}

export default Hero