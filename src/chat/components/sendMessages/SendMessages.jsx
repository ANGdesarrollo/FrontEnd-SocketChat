import React, { useEffect, useRef } from 'react';
import { data } from "../../data/data.js";
import { useTheme } from "../../../hooks/useTheme/useTheme.js";

export const SendMessages = ( { handleSubmit, onSubmit, username, register, handleKeyPress } ) => {
    const refButton = useRef( null );
    const refMessage = useRef( null )
    const { sendBoxImg, sendMsg } = data();
    const ref = useRef( null )
    const { animationTheme, theme } = useTheme()

    useEffect( () => {
        animationTheme( ref )
    }, [ theme ] );

    useEffect( () => {
        document.addEventListener( 'keydown', ( e ) => handleKeyPress( e, refButton ), true );
        return () => {
            document.removeEventListener( 'keydown', ( e ) => handleKeyPress( e, refButton ), true );
        }
    }, [] );

    return (
        <div ref={ ref } className="container-sendMsg">
            <div className="sub-container-sendMsg">
                <form onSubmit={ handleSubmit( onSubmit ) }>
                    <div>
                        <img className="container-img"
                             src={ sendBoxImg }
                             alt="chat fondo"/>
                        <div className="form-user">
                            <label style={{color: "white"}} htmlFor="user">User</label>
                            <input value={ username } id="user" type="text" disabled={ true }/>
                        </div>
                        <div className="textarea-message">
                            <textarea ref={ refMessage } name='msg' placeholder="Message" { ...register( "message", {
                                required: true,
                            } ) }/>
                        </div>
                        <div className="button-send">
                            <button ref={ refButton } type="submit">
                                <img
                                    src={ sendMsg }
                                    alt="sned-message"/>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};
