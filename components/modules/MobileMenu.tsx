import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Device } from "../../devices";
import MobileLink from "../atoms/MobileLink";


const Menu = styled.div`
    display: block;

    @media ${Device.laptop} {
        display: none;
    }
`

const Container = styled.div`
    position: absolute;
    width: 100vw;
    height: calc(100vh - 72px);
    right: 0;
    top: 72px;
    z-index: 99;
    transition-delay: 300ms;
    overflow-x: hidden;
`

const Sidebar = styled.div`
    margin: 0 0 0 auto;
    height: 100%;
    width: 275px;
    box-shadow: -4px 4px 16px rgba(0, 0, 0, 0.12);
    border-radius: 24px 0px 0px 0px;
    background-color: white;
    display: flex;
    flex-direction: column;
    padding: 32px 0 0 24px;

    transform: translateX( ${ ({ isOpen } : { isOpen: boolean }) => isOpen ? '0' : '100%' } );
    transition: transform 300ms ease-in;

    &> a {
        margin-bottom: 16px;
    }

    &> a:last-child {
        margin-bottom: 0;
    }
`

const Burger = styled.div`
    padding: 12px 6px;
    
    &> div {
        height: 2px;
        background-color: #111;
        transition: all 200ms ease-in;
    }

    &> div:last-child {
        width: ${ ({isOpen} : {isOpen: boolean}) => isOpen ? '24px' : '28px' };
        margin: 8px 0 0 auto;

        transform: translateY( ${ ({isOpen} : {isOpen: boolean}) => isOpen ? '-5px' : '0' } ) rotate(${ ({isOpen} : {isOpen: boolean}) => isOpen ? '-45deg' : '0' });
    }

    &> div:first-child {
        width: ${ ({isOpen} : {isOpen: boolean}) => isOpen ? '24px' : '32px' };
        transform: translateY( ${ ({isOpen} : {isOpen: boolean}) => isOpen ? '5px' : '0' } ) rotate(${ ({isOpen} : {isOpen: boolean}) => isOpen ? '45deg' : '0' });
    }
`

const MobileMenu = () => {

    const [ isOpen, setOpen ] = useState(false)
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden'
            window.scrollTo(0, 0)
            containerRef.current?.setAttribute('display', 'flex')
        } else {
            document.body.style.overflow = 'unset'
            setTimeout(() => {
                containerRef.current?.setAttribute('display', 'none')
            }, 800);
        }

    }, [isOpen])

    return (
        <Menu>  {/* General Anchor */}
            <Burger isOpen={isOpen} onClick={() => setOpen(!isOpen)}> {/* Burger Menu */}
                <div />
                <div />
            </Burger>
            <Container ref={containerRef}> {/* Wholescreen Container */}
                <Sidebar isOpen={isOpen}> {/* Sidecontainer */}
                    <MobileLink 
                        label='My Work'
                        description='Have a look at my latest work!'
                        href='/#work'
                        onCloseAction={() => setOpen(false) }
                    />
                    <MobileLink 
                        label='About Me'
                        description='Learn more about me and my Skills.'
                        href='/#about'
                        onCloseAction={() => setOpen(false) }
                    />
                    <MobileLink 
                        label='My Blog'
                        description='Here I talk about design and tech.'
                        href='/blog'
                        onCloseAction={() => setOpen(false) }
                    />
                    <MobileLink 
                        label='Contact'
                        description="Let's talk about stuff and projects!"
                        href='/#contact'
                        onCloseAction={() => setOpen(false) }
                    />
                </Sidebar>
            </Container>
        </Menu>
    )
}

export default MobileMenu