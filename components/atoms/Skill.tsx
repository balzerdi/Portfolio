import { ReactNode } from "react";
import styled from "styled-components";
import Skillpoint from "./Skillpoint";

const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`

const Label = styled.p`
    font-size: 16px;
    font-weight: 400;
    line-height: 19px;
    margin-right: 16px;
    opacity: 0.6;
`

const Skillpoints = styled.div`
    display: flex;
    flex-direction: row;

    & > div {
        margin-right: 8px;
    }

    & > div:last-child {
        margin-right: 0;
    }
`

const Skill = ({ label, level=5 } : {
    label: string,
    level?: number
}) => {

    function getPoints() : ReactNode[] {
        let elements: ReactNode[] = []

        for (let i = 0; i < 5; i++) {
            if (i < level) {
                elements.push(<Skillpoint active key={i} />)
            } else {
                elements.push(<Skillpoint active={false} key={i} />)
            }
        }

        return elements
    }

    return (
        <Container>
            <Label>{ label }</Label>
            <Skillpoints>
                { getPoints() }
            </Skillpoints>
        </Container>
    )
}

export default Skill