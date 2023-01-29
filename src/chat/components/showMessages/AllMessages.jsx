import React, { useContext } from 'react';
import { SocketContext } from "../../context/SocketContext.jsx";

export const AllMessages = ({  }) => {
    const { allMessages } = useContext( SocketContext );

    return (
        <>
            { allMessages.map( el => {
                return (
                    <p key={ el._id }>
                        <span className="date">[{el.date}]</span>
                        <span>{ el.username }: </span>
                        { el.message }
                    </p>
                )
            } ) }
        </>
    );
};
