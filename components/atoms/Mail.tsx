import styled from "styled-components";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { useEffect, useState } from "react";
import { Device } from "../../devices";

const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 64px 0 96px 0;

    @media ${Device.tablet} {
        margin: 0;
    }
`

const Container = styled.div`
    display: flex;
    flex-direction: row;
    position: relative;
`

const Input = styled.input`
    width: 250px;
    height: 40px;
    border: 2px solid rgba(17, 17, 17, 1);
    border-radius: 0;
    font-family: 'Open Sans', sans-serif;
    font-size: 16px;
    font-weight: 400;
    color: rgba(17, 17, 17, 0.6);
    text-align: center;
    padding: 0 24px;
    margin-right: 0 !important;
    margin-left: 0 !important;

    border-top-left-radius: 24px;
    border-bottom-left-radius: 24px;

    background-color: ${ ( { fill } : {fill: string} ) => fill };

    position: relative;
    z-index: 2;

    &:focus-visible {
        outline: none;
    }

    /* @media ${Device.tablet} {
        width: 220px;
        height: 32px;
        font-size: 14px;
    } */
`

const Copy = styled.div`
    width: 42px;
    height: 40px;
    background-color: #111;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;

    border-top-right-radius: 24px;
    border-bottom-right-radius: 24px;

    /* @media ${Device.tablet} {
        width: 30px;
        height: 32px;
    } */
`

const Notice = styled.p`
    padding: 8px 32px;
    background-color: #111;
    box-shadow: 4px 4px 16px 0px rgba(0, 0, 0, 0.25);
    font-size: 12px;
    font-weight: 400;
    color: white;
    position: absolute;
    top: 0;
    left: 50%;
    white-space: nowrap;
    letter-spacing: 0.05rem;
    border-radius: 16px;

    opacity: ${ ({active} : {active: boolean}) => active ? '100%' : '0%' };
    transform: ${ ({active} : {active: boolean}) => active ? 'translate(-50%, -105%)' : 'translate(-50%, 0)' };
    transition: all 300ms ease-in;
    z-index: 1;
`

const Mail = ({ mail, backgroundColor='#FAEEE8' } : { mail: string, backgroundColor?: string }) => {

    const [ copied, setCopied ] = useState(false)

    useEffect(() => {
        if (copied) {
            setTimeout(() => {
                setCopied(false)
            }, 2000);   
        }
    }, [copied, setCopied])

    return (
        <Content> {/* Container */}
            <Container>
                <Notice active={copied}>Copied to Clipboard!</Notice>
                <Input
                    fill={backgroundColor}
                    onFocus={(e) => { e.target.select(); }}
                    type={'text'}
                    value={mail}
                    readOnly
                /> {/* Input */}
                <Copy 
                    onClick={() => {
                        navigator.clipboard.writeText(mail);
                        setCopied(true);
                    }}
                > {/* Copy Button */}
                    <ContentCopyIcon sx={{ fontSize: 18, color: 'white' }} />
                </Copy>
            </Container>
        </Content>
    )
}

export default Mail