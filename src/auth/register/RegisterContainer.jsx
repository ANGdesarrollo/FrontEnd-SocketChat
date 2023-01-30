import { RegisterLayout } from "./RegisterLayout.jsx";
import { useForm } from "react-hook-form";
import { useAxiosPost } from "../../hooks/index.js";
import { SuccessMessage } from "../../components/successMessage/SuccessMessage.jsx";
import { useState } from "react";

export const RegisterContainer = () => {
    const { handleSubmit, register, formState: { errors }, getValues } = useForm();
    const { chatApiPost, statePost } = useAxiosPost( '/register' );
    const [ checkPassword, setCheckPassword ] = useState( false );
    const { data } = statePost;

    const onSubmit = ( { username, password, repeatPassword } ) => {
       if(password !== repeatPassword) return setCheckPassword(true);
        chatApiPost( { username, password } )
    };

    return (
        data ? <SuccessMessage path={ "/login" }/> :
            <RegisterLayout
                handleSubmit={ handleSubmit }
                onSubmit={ onSubmit }
                register={ register }
                errors={ errors }
                validateEqualPasswords={ checkPassword }
                statePost={ statePost }
            />
    );
};
