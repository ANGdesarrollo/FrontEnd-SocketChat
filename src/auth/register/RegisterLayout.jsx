import { Link } from "react-router-dom";
import { Jelly } from "@uiball/loaders";
import { validateEmail } from "../validations/validateEmail.js";
import { Circles, MenuAuth } from "../components/index.js";
import React, { useEffect, useRef } from "react";
import { data } from "../data/data.js";
import { useTheme } from "../../hooks/useTheme/useTheme.js";
import { Button } from "../components/button/Button.jsx";

export const RegisterLayout = ( { handleSubmit, onSubmit, register, errors, validateEqualPasswords, statePost } ) => {
    const { isLoading, hasError } = statePost;
    const { imgAuth } = data()
    const ref = useRef( null );
    const { animationTheme, theme , inputBackground } = useTheme();

    useEffect( () => {
        animationTheme( ref )
    }, [ theme ] );

    useEffect( () => {
        animationTheme( ref )
    }, [ theme ] );


    return (
        <main className="container">
            <form ref={ ref } onSubmit={ handleSubmit( onSubmit ) }>
                <div id="register"><h2>Register</h2></div>
                <img
                    src={ imgAuth }
                    alt="background"/>
                <div id="username">
                    <label htmlFor="username">Email</label>
                    <input type="email" name="username" { ...register( "username", {
                        required: true,
                        pattern: validateEmail
                    } ) }  style={{backgroundColor: inputBackground}} />
                    { errors.username?.type === 'required' && <p>This field is required</p> }
                    { errors.username?.type === 'pattern' && <p>Invalid email</p> }
                    { hasError && <p>Invalid data</p> }
                </div>
                <div id="password">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" { ...register( "password", {
                        required: true,
                        minLength: 3,
                    } ) }  style={{backgroundColor: inputBackground}} />
                    { errors.password?.type === 'minLength' && <p>Password is too short!</p> }
                    { validateEqualPasswords && <p>Passwords must match!</p> }
                </div>
                <div id="repeat-password">
                    <label htmlFor="repeat-password">Repeat Password</label>
                    <input type="password" name="repeatPassword" { ...register( "repeatPassword", {
                        required: true
                    } ) } style={{backgroundColor: inputBackground}}/>
                </div>
                <div id="go-login">
                    { isLoading ? <Jelly size={ 35 } color="#231F20"/> :
                        <>
                            <Button data={ "REGISTER" }/>
                            <p>Already have an account? <Link to='/login'>Sign in</Link></p>
                        </> }

                </div>
            </form>
            <MenuAuth/>
            <Circles/>
        </main>
    );
};
