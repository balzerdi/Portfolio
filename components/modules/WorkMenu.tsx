import Image from "next/image"
import styled from "styled-components"
import Wrapper from "../atoms/Wrapper"
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Link from "next/link"

import Soulidarity from '../../public/images/menu_soulidarity.jpg'
import IOC from '../../public/images/menu_ioc.jpg'


const Container = styled.div`
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    width: 100vw;
`

const Modal = styled.div`
    border: 0.5px solid rgba(17, 17, 17, 0.12);
    box-shadow: 16px 16px 32px 0px #0000001F;
    border-radius: 32px;
    background-color: white;
    width: 100%;
    overflow: hidden;
    margin-top: 8px;
`

const Content = styled.div`
    width: 100%;
    padding: 32px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

const Work = styled.div`
    display: flex;
    flex-direction: column;
    width: fit-content;
`

const Title = styled.p`
    font-size: 20px;
    font-weight: 600;
    margin: 18px auto 8px 0;
`

const Linktag = styled.a`
    font-size: 16px;
    font-weight: 500;
    line-height: 19px;
    color: #A0A0A0;
    margin: 0 0 0 auto;
    display: flex;
    align-items: center;
    overflow-x: visible;

    & > span {
        display: flex;
        align-items: center;
        margin-left: 4px;
        transition: all 200ms ease-in;
        position: relative;
    }

    & > span::before {
        position: absolute;
        content: '';
        height: 2px;
        width: 0px;
        transition: all 200ms ease-in;
        background-color: #A0A0A0;
        right: 10px;
    }

    &:hover {
        & > span {
            transform: translateX(8px);
        }

        & > span::before {
            width: 16px;
        }
    }
`

const Body = styled.p`
    font-size: 24px;
    font-weight: 600;
    line-height: 29px;
    margin-top: -40px;
    margin-right: 32px;
`

const ImageContainer = styled(Image)`
    border-radius: 16px;
`

const WorkMenu = () => {

    return (
        <Container>
            <Wrapper>
                <Modal> {/* Container */}
                    <Content>
                        <Work>
                            <ImageContainer src={Soulidarity} layout='fixed' />
                            <Title>Soulidarity</Title>
                            <Link href="/blog" passHref >
                                <Linktag>Learn more <span><ChevronRightIcon fontSize='medium' /></span></Linktag>
                            </Link>
                        </Work>
                        <Work>
                            <ImageContainer src={IOC} layout='fixed' />
                            <Title>Interaction of Color</Title>
                            <Link href="/blog" passHref >
                                <Linktag>Learn more<span><ChevronRightIcon fontSize='medium' /></span></Linktag>
                            </Link>
                        </Work>
                        <Body>And many more to come...</Body>
                    </Content>
                </Modal>
            </Wrapper>
        </Container>
    )
}

export default WorkMenu