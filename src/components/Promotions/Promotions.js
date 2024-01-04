import { Box, Slide } from "@mui/material";
import { MessageText, PromotionsContainer } from "../../styles/promotionsStyles/promotionsStyles";
import { useEffect, useRef, useState } from "react";


//In real scenario, you'd get this info from a db
const messages = [
    "20% off on your first order",
    "Summer sale starts now, visit any store",
    "Please like and subscribe"
];

export default function Promotions() {
    const containerRef = useRef(); //somehow, this keeps this text in the component
    const [messageIndex, setMessageIndex] = useState(0);
    const [show, setShow] = useState(true); //somehow, this helps the text slide

    useEffect(() => {
        setTimeout(() => { //somehow, this helps the text slide
            setShow(false);
        }, 3000)

        const intervalId = setInterval(() => {
            setMessageIndex(i => (i + 1) % messages.length); //resets index back to zero once index exceeds messages array length
            setShow(true); //somehow, this helps the text slide

            setTimeout(() => {
                setShow(false); //somehow, this helps the text slide
            }, 3000)
        }, 4000);

        return () => {
            clearInterval(intervalId);
        }
    }, [])

    return (
        <PromotionsContainer ref={containerRef }> {/* somehow, this keeps this text in the component */}
            <Slide
                container={containerRef.current}
                direction={show ? "left" : "right"}
                in={show}
                timeout={{
                    enter: 500,
                    exit: 100
                }}
            >
                <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
                    <MessageText>
                        {messages[messageIndex]}
                    </MessageText>
                </Box>
            </Slide>
        </PromotionsContainer>
    );
}