import styled from "styled-components";
import { Device } from "../../devices";
import Break from "../atoms/Break";
import Mail from "../atoms/Mail";
import Wrapper from "../atoms/Wrapper";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const Section = styled.section`
    width: 100%;
    display: flex;
    position: relative;
    flex-direction: column;
    z-index: 6;
`

const Background = styled.div`
    position: absolute;
    top: -150vh;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 0;
    background-image: url('/images/footer_gradient_mobile.jpg');
    background-repeat: no-repeat;
    background-size: cover;

    @media ${Device.laptop} {
        background-image: url('/images/footer_gradient.jpg');
    }
`

const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    position: relative;
    z-index: 9;
    margin-bottom: 64px;
    margin-top: 120px;

    @media ${Device.laptop} {
        margin-bottom: 196px;
    }
`

const Title = styled.h2`
    font-size: 80px;
    line-height: 100%;
    text-align: center;

    @media ${Device.laptop} {
        font-size: 96px;
        line-height: normal;
    }
`

const Body = styled.p`
    margin-top: 8px;
    margin-bottom: 0;
    opacity: 0.6;
    text-align: center;

    @media ${Device.laptop} {
        margin-bottom: 60px;
    }
`

const Row = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 48px;

    &> a:first-child {
        margin-right: 24px;
    }
`

const Contact = () => {

    return (
        <Section id='contact'>
            <Background />
            <Wrapper>
                <Content>
                    <Title>Let&apos;s get in touch!</Title>
                    <Body>Do you want to talk about design, programming or other tech stuff?<Break behavior='mobile-only' /> Just write me a mail.</Body>
                    <Mail mail='contact@dimitribalzer.com' />
                    <Row>
                        <a href='https://www.linkedin.com/in/dimitri-balzer-437705249' target='_blank' rel="noreferrer" ><LinkedInIcon fontSize='large' style={{ color: 'rgba(17,17,17,1)' }} /></a>
                        <a href='https://github.com/balzerdi' target='_blank' rel="noreferrer" ><GitHubIcon fontSize='large' style={{ color: 'rgba(17,17,17,1)' }} /></a>
                    </Row>
                </Content>
            </Wrapper>
        </Section>
    )
}

export default Contact