import { Link } from "react-router-dom";
import { validateEmail } from "../validations/validateEmail.js";
import { Jelly } from "@uiball/loaders";
import { Circles, MenuAuth } from "../components/index.js";
import React, { useEffect, useRef } from "react";
import { data } from "../data/data.js";
import { useTheme } from "../../hooks/useTheme/useTheme.js";

export const LoginLayout = ( { register, handleSubmit, onSubmit, errors, statePost } ) => {
    const { imgAuth } = data()
    const { hasError, isLoading } = statePost;
    const ref = useRef( null );
    const refInputEmail = useRef( null );
    const refInputPassword = useRef( null )
    const refButton = useRef( null )
    const { animationTheme, theme, animationInput, animationButton } = useTheme();

    useEffect( () => {
        animationTheme( ref )
        animationInput( refInputEmail )
        animationInput( refInputPassword )
        animationButton( refButton )
    }, [ theme ] );


    return (
        <main className="container">
            <form ref={ ref } onSubmit={ handleSubmit( onSubmit ) }>
                <div id="register"><h2>Login</h2></div>
                <img src={ imgAuth }
                     alt="background"/>
                <div id="username">
                    <label htmlFor="username">Email</label>
                    <input { ...register( "username", {
                        required: true,
                        pattern: validateEmail
                    } ) } type="email" name="username" ref={ refInputEmail }/>
                    { errors.username?.type === 'required' && <p>This field is required</p> }
                    { errors.username?.type === 'pattern' && <p>Invalid email</p> }
                    { hasError && <p>Invalid data</p> }
                </div>
                <div id="password">
                    <label htmlFor="password">Password</label>
                    <input { ...register( "password", {
                        required: true,
                        minLength: 3
                    } ) } type="password" name="password" ref={ refInputPassword }/>
                    { errors.password?.type === 'required' && <p>This field is required</p> }
                    { errors.password?.type === 'minLength' && <p>Password is too short!</p> }
                </div>

                <div id="go-login">
                    { isLoading ? <Jelly size={ 35 } color="#231F20"/> :
                        <>
                            <button ref={ refButton }>LOGIN</button>
                            <p>Already have an account? <Link to='/register'>Sign up</Link></p>
                        </>
                    }
                </div>
            </form>
            <MenuAuth/>
            <Circles/>
        </main>
    );
};
