import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { remove } from "../../redux/toastSlices";
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { Device } from "../../devices";

const Container = styled.div`  
    position: relative;
    padding: 6px 16px;
    background-color: #111;
    color: white;
    box-shadow: 4px 4px 16px 0px rgba(0, 0, 0, 0.25);
    border-radius: 16px;
    margin-bottom: 8px;
    cursor: pointer;
    font-size: 14px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    transition: color 300ms ease-in;

    &> span {
        position: absolute;
        right: 2px;
        top: 50%;
        transform: translateY(-40%);
        color: #111;
        transition: color 300ms ease-in;

        @media ${Device.tablet} {
            right: 8px;
        }
    }

    @media ${Device.tablet} {
        padding: 8px 32px;
    }
`

const Body = styled.div`
    font-size: 12px;
    font-weight: 400;
    text-align: center;
    letter-spacing: 0.05rem;
    font-weight: 400;
    white-space: normal;

    @media ${Device.tablet} {
        white-space: nowrap;
    }
`

const Toast = ({ label, id } : {
    label: string
    id: string
}) => {

    const [ hover, setHover ] = useState(false)

    const dispatch = useDispatch()

    useEffect(() => {
        setTimeout(() => {
            dispatch(remove(id))
        }, 3000)
    }, [])

    return (
        <Container onClick={() => dispatch(remove(id)) } onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} >
            <Body>{ label }</Body>
            <span>
                <CloseOutlinedIcon fontSize='inherit' style={{ color: hover ? 'white' : '#111' }} />
            </span>
        </Container>
    )
}

export default Toast