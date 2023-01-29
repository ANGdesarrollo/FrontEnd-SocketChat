import React from 'react';
import { AllMessages } from "./AllMessages";
import { NewMessages } from "./NewMessages";

export const ShowMessages = ( { image } ) => {
    return (
        <div className="chatBox-container">
            <div className="chatBox-subContainer">
                <img src={ image } alt="chatBox"/>
                <div className="chatBox">
                    <AllMessages/>
                    <NewMessages/>
                </div>
            </div>
        </div>
    );
};
