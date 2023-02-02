import { AllMessages } from "./AllMessages";
import { data } from "../../data/data.js";
import { useEffect, useRef } from "react";
import { useTheme } from "../../../hooks/useTheme/useTheme.js";

export const ShowMessages = () => {
    const { chatBoxImg } = data();
    const ref = useRef(null)
    const { animationTheme, theme } = useTheme()

    useEffect( () => {
       animationTheme(ref)
    }, [ theme ] );


    return (
        <div ref={ ref } className="chatBox-container">
            <div className="chatBox-subContainer">
                <img src={ chatBoxImg }
                     alt="chatBox"/>
                <div className="chatBox">
                    <AllMessages/>
                </div>
            </div>
        </div>
    );
};
