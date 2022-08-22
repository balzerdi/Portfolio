import styled from "styled-components";
import { Device } from '../../devices';

const Wrapper = styled.div`
    width: 100%;
    max-width: 1384px;
    height: 100%;
    margin: 0 auto 0 auto;
    padding: 0 12px 0 12px;

    @media ${Device.laptop} {
        padding: 0 64px 0 64px;
    }
`

export default Wrapper