import Head from "next/head";
import React from "react";
import styled from "styled-components";
import Wrapper from '../components/atoms/Wrapper'

export const Container = styled.div`
    padding: 64px;
    border-radius: 32px;
    background-color: #F3F3F3;
    display: flex;
    flex-direction: column;
    margin: 64px 0;
`

export const Title = styled.h1`
    font-size: 40px;
    font-weight: 700;
    line-height: 130%;
    margin-bottom: 48px;
`

export const Heading = styled.h2`
    font-size: 24px;
    font-weight: 500;
    line-height: 130%;
    margin-bottom: 16px;
`

export const Body = styled.p`
    font-size: 16px;
    font-weight: 400;
    margin-bottom: 48px;
`

const Impress = () => {

    return (
        <>
            <Head>
                <title>Impressum - Dimitri Balzer</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Wrapper>
                <Container>
                    <Title>Impressum</Title>
                    <Heading>Angaben gemäß § 5 TMG</Heading>
                    <Body>  
                        Dimitri Balzer<br/>
                        Dimitri Balzer, IT Dienstleistungen<br/>
                        Herrfurthstraße 3<br/>
                        12049 Berlin<br/>
                    </Body>
                    <Heading>Kontakt</Heading>
                    <Body>  
                        Telefon: +49 176 63800971<br/>
                        E-Mail: contact@dimitribalzer.com
                    </Body>
                    <Heading>Umsatzsteuer-ID</Heading>
                    <Body>  
                        Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br/>
                        DE341616914
                    </Body>
                    <Heading>Redaktionell verantwortlich</Heading>
                    <Body>  
                        Dimitri Balzer<br/>
                        Herrfurthstraße 3<br/>
                        12049 Berlin
                    </Body>
                    <Heading>Verbraucherstreitbeilegung/Universalschlichtungsstelle</Heading>
                    <Body>  
                        Ich bin nicht bereit oder verpflichtet, an Streitbeilegungsverfahren<br/>
                        vor einer Verbraucherschlichtungsstelle teilzunehmen.
                    </Body>
                    <Body style={{ marginBottom: 0 }}>Quelle: <a href="https://www.e-recht24.de" target='_blank' rel="noreferrer" >eRecht24</a></Body>
                </Container>
            </Wrapper>
        </>
    )
}

export default Impress