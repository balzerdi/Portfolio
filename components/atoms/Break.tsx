import styled from "styled-components"
import { Device } from "../../devices"


interface IBreakProps {
    behavior?: 'always' | 'mobile-only' | 'tablet-only' | 'desktop-only' | 'mobile-tablet' | 'tablet-desktop' | 'never' 
}

/**
 * Sets a <br /> tag.
 * By setting the "behavior" attribute you can specify for which device screen this break applies.
 * Now you can style the text appropriate to the screen width.
 * 
 * @param {'always' | 'mobile-only' | 'tablet-only' | 'desktop-only' | 'mobile-tablet' | 'tablet-desktop' | 'never'} behavior Choose a behavior to specify when this break should apply
 * 
 */
const Break = styled.br`
    ${ ( { behavior='always' } : IBreakProps) => 
        behavior == 'always' ? 'display: block;'
        : behavior == 'mobile-only' ? 'display: block;'
        : behavior == 'mobile-tablet' ? 'display: block;'
        : 'display: none;'
    }

    @media ${Device.tablet} {
        ${ ( { behavior='always' } : IBreakProps) => 
            behavior == 'always' ? 'display: block;'
            : behavior == 'mobile-tablet' ? 'display: block;'
            : behavior == 'tablet-only' ? 'display: block'
            : behavior == 'tablet-desktop' ? 'display: block'
            : 'display: none;'
        }
    }

    @media ${Device.desktop} {
        ${ ( { behavior='always' } : IBreakProps) => 
            behavior == 'always' ? 'display: block;'
            : behavior == 'desktop-only' ? 'display: block;'
            : behavior == 'tablet-desktop' ? 'display: block'
            : 'display: none;'
        }
    }
`

export default Break