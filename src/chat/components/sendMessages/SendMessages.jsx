import React, { useEffect, useRef } from 'react';

export const SendMessages = ( { handleSubmit, onSubmit, username, register } ) => {

    const refButton = useRef( null );
    const refMessage = useRef( null )

    const handleKeyPress = ( e ) => {
        if ( e.key === 'Enter' && !e.shiftKey ) {
            e.preventDefault()
            refButton.current.click();
        }
    }

    useEffect( () => {
        document.addEventListener( 'keydown', handleKeyPress, true );
        return () => {
            document.removeEventListener( 'keydown', handleKeyPress, true );
        }
    }, [] );

    return (
        <div className="container-sendMsg">
            <div className="sub-container-sendMsg">
                <form onSubmit={ handleSubmit(onSubmit) }>
                    <div>
                        <img className="container-img"
                             src="https://res.cloudinary.com/dwz16rstr/image/upload/v1674147317/chat/SendMessage_vx0rtu.png"
                             alt="chat fondo"/>
                        <div className="form-user">
                            <label htmlFor="user">User</label>
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
                                    src="https://res.cloudinary.com/dwz16rstr/image/upload/v1674156478/chat/button_ngxa8w.png"
                                    alt="sned-message"/>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};
