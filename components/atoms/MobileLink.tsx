import Link from "next/link";
import styled from "styled-components";


const Container = styled.a`
    display: block;
    border-bottom: 1px rgba(17, 17, 17, 0.12) solid;
    padding-bottom: 16px;
    padding-left: 4px;
`

const Title = styled.p`
    font-size: 20px;
    font-weight: 500;
    color: #111111;
`

const Body = styled.p`
    font-size: 12px;
    font-weight: 500;
    color: #C3C3C3;
`

const MobileLink = ({ label, description, href, onCloseAction } : {
    label: string,
    description: string,
    href: string,
    onCloseAction: () => void
}) => {

    return (
        <Link href={href} passHref >
            <Container onClick={() => onCloseAction()}>
                <Title>{ label }</Title>
                <Body>{ description }</Body>
            </Container>
        </Link>
    )
}

export default MobileLink