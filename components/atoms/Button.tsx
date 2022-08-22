import styled from "styled-components";


const Button = styled.a`
    font-size: 14px;
    font-weight: 500;
    padding: ${ ({size='large'} : { size?: 'large' | 'small' }) => size == 'large' ? '12px 24px' : '8px 16px' };
    color: white;
    background-color: #111111;
    border-radius: 24px;
    cursor: pointer;
    transition: all 300ms ease-in;

    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
     -khtml-user-select: none; /* Konqueror HTML */
       -moz-user-select: none; /* Old versions of Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome, Edge, Opera and Firefox */

    &:hover {
        box-shadow: 4px 4px 16px 0px #0000001F;
    }
`

export default Button