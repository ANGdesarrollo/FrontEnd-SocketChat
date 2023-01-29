import { Link } from "react-router-dom";
import { Jelly } from "@uiball/loaders";
import { validateEmail } from "../validations/validateEmail.js";
import { Circles, MenuAuth } from "../components/index.js";
import React from "react";

export const RegisterLayout = ( { handleSubmit, onSubmit, register, errors, validateEqualPasswords, statePost } ) => {


    const { isLoading, hasError } = statePost;

    return (
        <main className="container">
            <form onSubmit={ handleSubmit( onSubmit ) }>
                <div id="register"><h2>Register</h2></div>
                <img
                    src="https://res.cloudinary.com/dwz16rstr/image/upload/v1674147320/chat/login_ch0nnq.png"
                    alt="background"/>
                <div id="username">
                    <label htmlFor="username">Email</label>
                    <input defaultValue="test" type="email" name="username" { ...register( "username", {
                        required: true,
                        pattern: validateEmail
                    } ) }/>
                    { errors.username?.type === 'required' && <p>This field is required</p> }
                    { errors.username?.type === 'pattern' && <p>Invalid email</p> }
                    { hasError && <p>Invalid data</p> }
                </div>
                <div id="password">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" { ...register( "password", {
                        required: true,
                        minLength: 3,
                        validate: validateEqualPasswords
                    } ) }/>
                    { errors.password?.type === 'minLength' && <p>Password is too short!</p> }
                    { errors.password && <p>Passwords must match!</p> }
                </div>
                <div id="repeat-password">
                    <label htmlFor="repeat-password">Repeat Password</label>
                    <input type="password" name="repeatPassword" { ...register( "repeatPassword", {
                        required: true
                    } ) } required={ true }/>
                </div>
                <div id="go-login">
                    { isLoading ? <Jelly size={ 35 } color="#231F20"/> :
                        <>
                            <button type="submit">REGISTER</button>
                            <p>Already have an account? <Link to='/login'>Sign in</Link></p>
                        </> }

                </div>
            </form>
            <MenuAuth/>
            <Circles/>
        </main>
    );
};
