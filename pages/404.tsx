import Head from 'next/head'
import styled from 'styled-components'
import Button from '../components/atoms/Button'
import { Device } from '../devices'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 80vh;
    position: relative;
    margin-top: -72px;
    z-index: 3;
`

const Background = styled.div`
    position: absolute;
    top: 0;
    bottom: 20vh;
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

const Title = styled.h1`
    font-size: 176px;
    font-weight: 900;
    line-height: 130px;
`

const Body = styled.p`
    font-size: 20px;
    font-weight: 700;
    line-height: 24px;
    margin: 16px 0 96px 0;
`

const Subtext = styled.p`
    font-size: 16px;
    font-weight: 400;
    line-height: 19px;
    margin-top: 24px;
    color: rgba(17,17,17,0.75);
`

const Page404 = () => {

    return (
        <>
            <Head>
                <title>Something went wrong - Dimitri Balzer</title>
                <link rel="icon" href="/favicon.ico" />
                <meta name="robots" content="noindex,nofollow" />
            </Head>
            <Container>
                <Title>404</Title>
                <Body>Ooops! This page could not be found!</Body>
                <Button onClick={() => history.back()} >Take me back</Button>
                <Subtext>Or stay and have a look at handpicked memes.</Subtext>
            </Container>
            <Background />
        </>
    )
}

export default Page404