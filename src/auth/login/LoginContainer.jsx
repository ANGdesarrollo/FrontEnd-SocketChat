import React, { useEffect } from 'react';
import { LoginLayout } from "./LoginLayout.jsx";
import { useForm } from "react-hook-form";
import { useAxiosPost } from "../../hooks/index.js";
import { SuccessMessage } from "../../components/successMessage/SuccessMessage.jsx";

export const LoginContainer = () => {

    const { handleSubmit, register, formState: { errors } } = useForm();
    const { statePost, chatApiPost } = useAxiosPost( '/login' );

    const { data } = statePost

    const onSubmit = ( { username, password } ) => {
        chatApiPost( { username, password } );
    }

    return (
        data ? <SuccessMessage path={ '/chat' } data={data}/> :
            <LoginLayout
                handleSubmit={ handleSubmit }
                register={ register }
                onSubmit={ onSubmit }
                errors={ errors }
                statePost={ statePost }
            />
    );
};
