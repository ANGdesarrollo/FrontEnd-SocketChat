import { RegisterLayout } from "./RegisterLayout.jsx";
import { useForm } from "react-hook-form";
import { useAxiosPost } from "../../hooks/index.js";
import { SuccessMessage } from "../../components/successMessage/SuccessMessage.jsx";

export const RegisterContainer = () => {
    const { handleSubmit, register, formState: { errors }, getValues } = useForm();
    const { chatApiPost, statePost } = useAxiosPost( '/register' );
    const { data } = statePost;

    const { password, repeatPassword } = getValues();

    const validateEqualPasswords = () => password === repeatPassword;

    const onSubmit = ( { username, password } ) => {
        chatApiPost( { username, password } )
    };

    return (
        data ? <SuccessMessage path={ "/login" }/> :
            <RegisterLayout
                handleSubmit={ handleSubmit }
                onSubmit={ onSubmit }
                register={ register }
                errors={ errors }
                validateEqualPasswords={ validateEqualPasswords }
                statePost={ statePost }
            />
    );
};
