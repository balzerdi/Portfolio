import Link from "next/link";
import styled from "styled-components";
import Wrapper from "../atoms/Wrapper";
import Button from "../atoms/Button"
import { Device } from "../../devices";
import MobileMenu from "./MobileMenu";
import { useEffect, useState } from "react";
import { useScroll } from "framer-motion";
import MegaMenu from "./MegaMenu";
import { useDispatch } from "react-redux";
import { add, addToast } from "../../redux/toastSlices";
import { AppDispatch } from "../../redux/store";
import ToastContainer from "../atoms/ToastContainer";


const Box = styled.header`
    width: 100%;
    position: relative;
    left: 0;
    z-index: 99;
    transition: all 400ms ease-in-out;

    @media ${Device.laptop} {
        position: sticky;
        top: ${({extend} : {extend: boolean}) => extend ? '0' : '32px' };
    }
`

const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto 0 auto;
    height: 72px;
    transition: all 400ms ease-in-out;

    @media ${Device.laptop} {
        border-radius: 40px;
        box-shadow: 4px 4px 16px 0px;

        width: ${({extend} : {extend: boolean}) => extend ? '100%' : '980px' };
        background-color: ${({extend} : {extend: boolean}) => extend ? 'transparent' : 'rgba(255, 255, 255, 0.8)' };
        padding: ${({extend} : {extend: boolean}) => extend ? '0' : '0 32px 0 32px' };
        top: ${({extend} : {extend: boolean}) => extend ? '0' : '64px' };
        color: ${({extend} : {extend: boolean}) => extend ? 'transparent' : '#0000001F' };
        backdrop-filter: blur( ${({extend} : {extend: boolean}) => extend ? '0' : '12px' } );

        @-moz-document url-prefix() {
            & {
                background-color: ${({extend} : {extend: boolean}) => extend ? 'transparent' : 'rgba(255, 255, 255, 0.95)' };
            }
        }
    }
`

const Logo = styled.h3`
    font-size: 24px;
    font-weight: 600;
`

const Menu = styled.nav`
    display: none;
    flex-direction: row;
    align-items: center;
    height: 100%;

    & > li, & > div > li  {
        list-style: none;
        color: #111;
        font-size: 14px;
        font-weight: 400;
        margin-right: 48px;
    }

    & > li:last-child {
        margin-right: 0;
    }

    @media ${Device.laptop} {
        display: flex;
    }
`

const MenuLink = styled.li`
    &>a {
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

        &:hover {
            &::before {
                width: calc(100% + 4px);
            }
        }
    }
`

const Header = () => {

    const { scrollY} = useScroll()
    const [ extend, setExtend ] = useState(true)

    useEffect(() => {
        scrollY.onChange( y => {
            y >= 60 ? setExtend(false) : setExtend(true)
        })
    }, [scrollY])

    const dispatch: AppDispatch = useDispatch()

    function handleClick() {
        navigator.clipboard.writeText('contact@dimitribalzer.com');
        dispatch(add('My email was copied to your clipboard. Write me a message!'))
    }

    return (
        <Box extend={extend}>
            <ToastContainer />
            <Wrapper>
                <Container extend={extend} >
                    <Link href='/' passHref><a><Logo>Dimitri Balzer</Logo></a></Link>
                    <Menu>
                        <MegaMenu />
                        <MenuLink><Link href="/#about">About Me</Link></MenuLink>
                        <MenuLink><Link href="/blog">My Blog</Link></MenuLink>
                        <li>
                            <Button size='small' onClick={handleClick} >Let&apos;s talk</Button>
                        </li>
                    </Menu>
                    <MobileMenu />
                </Container>
            </Wrapper>
        </Box>
    )
}

export default Header