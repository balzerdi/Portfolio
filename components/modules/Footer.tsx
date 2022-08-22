import Link from "next/link";
import styled from "styled-components";
import { Device } from "../../devices";
import Wrapper from "../atoms/Wrapper";

const Section = styled.footer`
    width: 100%;
    background-color: #111;
    color: white;
    display: flex;
    flex-direction: column;
`

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 64px 0;

    @media ${Device.laptop} {
        flex-direction: row;
    }
`

const Column = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 64px;

    @media ${Device.laptop} {
        width: 33%;
        margin-bottom: 0;
    }
`

const Title = styled.p`
    color: white;
    font-size: 14px;
    font-weight: 600;
    line-height: 14px;
    margin-bottom: 32px;
`

const Label = styled.a`
    font-size: 14px;
    font-weight: 400;
    line-height: 14px;
    transition: color 300ms ease-in;
    margin-bottom: 24px;
    color: rgba(255,255,255,0.6);

    &:last-child {
        margin-bottom: 0;
    }

    &:hover {
        color: #FF9999;
    }
`

const Notice = styled.a`
    font-size: 12px;
    color: rgba(255,255,255,0.6);
    width: 100%;
    text-align: center;
    margin-bottom: 24px;
    transition: color 300ms ease-in;

    &:hover {
        color: #FF9999;
    }
`

const Footer = () => {

    return (
        <Section>
            <Wrapper>
                <Container>
                    <Column>
                        <Title>My Things</Title>
                        <Link href="/#about" passHref><Label>About Me</Label></Link>
                        <Link href="/blog" passHref><Label>My Blog</Label></Link>
                        <Link href="/#contact" passHref><Label>Contact</Label></Link>
                    </Column>
                    <Column>
                        <Title>My Work</Title>
                        <Link href="/blog" passHref><Label>Soulidarity</Label></Link>
                        <Link href="/blog" passHref><Label>Interaction of Color</Label></Link>
                    </Column>
                    <Column>
                        <Title>Legal Stuff</Title>
                        <Link href="/impressum" passHref><Label>Impressum</Label></Link>
                        <Link href="/datenschutz" passHref><Label>Datenschutzerklärung</Label></Link>
                    </Column>
                </Container>
            </Wrapper>
            <Link href='/' passHref ><Notice>©2022 Dimitri Balzer, All Rights Reserved</Notice></Link>
        </Section>
    )
}

export default Footer