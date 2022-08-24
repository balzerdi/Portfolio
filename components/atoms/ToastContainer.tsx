import { AnimatePresence, motion, MotionConfig } from "framer-motion";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { Device } from "../../devices";
import { RootState } from "../../redux/store";
import Toast from "./Toast";

/**
 * Necessary to fix overflow bug.
 */
const Box = styled.div`
    position: absolute;
    top: 84px;
    left: 0;
    right: 0;
    z-index: 10;
    padding: 24px 0;
    max-width: 100vw;
    overflow-x: hidden;

    @media ${Device.tablet} {
        overflow-x: visible;
        padding: 0;
    }
`

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const ToastContainer = () => {

    const toasts = useSelector( (state: RootState) => state.toasts?.list )

    return (
        <Box>
            <Container>
                <AnimatePresence mode={'popLayout'} >
                {
                    toasts?.map( (toast) => {
                        return (
                            <motion.div
                                key={toast.id}
                                initial={{ y: 24, opacity: 0, }}
                                animate={{ y: 0, opacity: 1, }}
                                exit={{ x: 48, opacity: 0, }}
                                layout
                            >
                                <Toast label={toast.label} id={toast.id} />
                            </motion.div> 
                        )
                    })
                }
                </AnimatePresence>
            </Container>
        </Box>
    )
}

export default ToastContainer