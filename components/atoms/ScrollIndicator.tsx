import styled, { keyframes } from 'styled-components'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;

    &>p {
        padding: 0;
        margin: 0 0 8px 0;
        font-family: 'Inter', sans-serif;
        font-size: 14px;
        font-weight: 400;
        color: #111;
        width: fit-content;
    }
`

const moveArrow = keyframes`
     0% { transform: translateY(0px); }
    5% { transform: translateY(0px); }
    50% { transform: translateY(8px); }
    95% { transform: translateY(8px); }
    100% { transform: translateY(8px); }
`

const moveBody = keyframes`
    0% { transform: translateY(0px); }
    5% { transform: translateY(0px); }
    50% { transform: translateY(0px); }
    95% { transform: translateY(8px); }
    100% { transform: translateY(8px); }
`

const Body = styled.path`
    animation: ${moveBody} 800ms ease-in-out 400ms infinite alternate none;
`

const ArrowDown = styled.path`
    animation: ${moveArrow} 800ms ease-in-out 400ms infinite alternate none;
`

const ScrollIndicator = () => {

    return (
        <Container>
            <p>scroll down</p>
            <svg width="18" height="43" viewBox="0 0 18 43" fill="none" xmlns="http://www.w3.org/2000/svg" overflow={'visible'}>
                <Body d="M0 17V26C0 30.9498 4.04982 35 9 35C13.9498 35 18 30.9502 18 26L17.9996 17C17.9996 12.0502 13.9498 8 8.99959 8C4.04983 8 9.66584e-06 12.0502 9.66584e-06 17H0ZM8.99958 10.0002C12.8494 10.0002 15.9994 13.1501 15.9994 17V26C15.9994 29.8499 12.8494 32.9998 8.99958 32.9998C5.14972 32.9998 1.99973 29.8499 1.99973 26V17C1.99973 13.1501 5.14972 10.0002 8.99958 10.0002Z" fill="#111"/>
                <Body d="M8.99912 18.5001C9.54927 18.5001 9.99922 18.0501 9.99922 17.5V14.5001C9.99922 13.9499 9.54928 13.5 8.99912 13.5C8.44896 13.5 7.99902 13.9499 7.99902 14.5001V17.5C7.99944 18.0501 8.44937 18.5001 8.99912 18.5001Z" fill="#111"/>
                <ArrowDown d="M8.29956 42.7003C8.49958 42.9003 8.7495 43.0001 8.99942 43.0001C9.24934 43.0001 9.49927 42.9003 9.69928 42.7003L12.1993 40.2002C12.5994 39.8002 12.5994 39.2001 12.1993 38.8C11.7993 38.4 11.1992 38.4 10.7992 38.8L8.99941 40.6002L7.19922 38.8C6.79918 38.4 6.19912 38.4 5.79906 38.8C5.399 39.2001 5.39902 39.8001 5.79906 40.2002L8.29956 42.7003Z" fill="#111"/>
                <path d="M8.29911 0.300031L5.79905 2.80009C5.39901 3.20013 5.39901 3.80019 5.79905 4.20025C5.99907 4.39985 6.24899 4.50007 6.49933 4.50007C6.74925 4.50007 6.99917 4.40026 7.19918 4.20025L8.99937 2.40006L10.7996 4.20025C10.9992 4.39985 11.2491 4.50007 11.499 4.50007C11.7489 4.50007 11.9988 4.40026 12.1989 4.20025C12.5989 3.80021 12.5989 3.20015 12.1989 2.80009L9.69881 0.300031C9.29918 -0.10001 8.69912 -0.10001 8.29907 0.300031H8.29911Z" fill="#111"/>
            </svg>
        </Container>
    )
}

export default ScrollIndicator