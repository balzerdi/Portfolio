import { AnimatePresence, motion, MotionConfig } from "framer-motion";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { RootState } from "../../redux/store";
import Toast from "./Toast";

const Container = styled.div`
    position: absolute;
    top: 84px;
    left: 0;
    right: 0;
    z-index: 10;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow: visible;
`

const ToastContainer = () => {

    const toasts = useSelector( (state: RootState) => state.toasts?.list )

    return (
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
    )
}

export default ToastContainer