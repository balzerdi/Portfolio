import styled from "styled-components";
import { Device } from "../../devices";
import Skill from "../atoms/Skill";
import Skillpoint from "../atoms/Skillpoint";


const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 40px;
`

const Title = styled.h4`
    font-size: 32px;
    font-weight: 600;
    line-height: 39px;
`

const Row = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 24px;
    padding: 0 12px 0 0;
    
    @media ${Device.tablet} {
        padding: 0;
    }
    
    & > div {
        @media ${Device.tablet} {
            margin-right: 48px;
        }
    }

    & > div:last-child {
        margin-right: 0;
    }

    @media ${Device.tablet} {
        flex-direction: row;
    }
`

const Column = styled.div`
    display: flex;
    flex-direction: column;

    & > div {
        margin-bottom: 24px;
    }

    & > div:last-child {
        @media ${Device.tablet} {
            margin-right: 0;
        }
    }
`

const Skills = () => {

    return (
        <Container>
            <Title>Skills</Title>
            <Row>
                <Column>
                    <Skill label='UI Desgin (Figma)' />
                    <Skill label='Prototyping (Framer)' />
                    <Skill label='Serif Affinity' level={3} />
                    <Skill label='TypeScript (JS)' />
                </Column>
                <Column>
                    <Skill label='Next.js' level={5} />
                    <Skill label='React Native' level={4} />
                    <Skill label='Redux' level={5} />
                    <Skill label='REST / GraphQL'  level={5} />
                </Column>
            </Row>
        </Container>
    )
}

export default Skills