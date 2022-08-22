import Link from "next/link";
import styled from "styled-components";
import WorkMenu from "./WorkMenu";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Container = styled.div`
    height: 100%;
    display: flex;
    align-items: center;

    &>div>div>div {
        transition: all 200ms ease-in-out;
        transform: scale(0.75) translateY(-7%);
        height: 0px;
        border-style: none;
        margin-top: 0;
    }

    &:hover {
        &>div>div>div {
            transform: scale(1);
            height: 360px;
            border-style: solid;
            margin-top: 8px;
        }
    }

    &>li>a {
        position: relative;
        font-weight: 500;
        opacity: 0.6;

        &::before {
            position: absolute;
            content: '';
            width: 0;
            height: 2px;
            background-color: #111;
            border-radius: 1x;
            opacity: 0.6;
            bottom: -6px;
            left: 50%;
            transform: translateX(-50%);
            transition: all 200ms ease-in-out;
        }
    }

    &:hover>li>a {
        &::before {
            width: calc(100% + 4px);
        }
    }
`

const MegaMenu = () => {

    return (
        <Container>
            <li>
                <Link href="/" passHref >
                    <a style={{ display: 'flex', alignItems: 'center' }} >
                        My Work
                        <KeyboardArrowDownIcon fontSize='medium' style={{ opacity: 0.6, cursor: 'pointer' }} />
                    </a>
                </Link>
            </li>
            <WorkMenu />
        </Container>
    )
}

export default MegaMenu