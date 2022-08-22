import styled from "styled-components";


const Container = styled.div`
    position: relative;
    height: 14px;
    width: 14px;
    background-color: transparent;
    border-color: #111;
    border-style: solid;
    border-width: 1px;
    border-radius: 50%;
`

const InnerContainer = styled.div`
    position: absolute;
    height: 80%;
    width: 80%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: ${ ({active} : {active: boolean}) => active ? '#111' : 'transparent' };
    border-radius: 50%;
`

const Skillpoint = ({ active=true } : { active?: boolean }) => {

    return (
        <Container>
            <InnerContainer active={active} />
        </Container>
    )
}

export default Skillpoint