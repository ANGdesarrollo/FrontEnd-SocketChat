import { Link } from "react-router-dom";
import { validateEmail } from "../validations/validateEmail.js";
import { Jelly } from "@uiball/loaders";
import { Circles, MenuAuth } from "../components/index.js";
import React from "react";

export const LoginLayout = ( { register, handleSubmit, onSubmit, errors, statePost } ) => {

    const { hasError, isLoading } = statePost;

    return (
        <main className="container">
            <form onSubmit={ handleSubmit( onSubmit ) }>
                <div id="register"><h2>Login</h2></div>
                <img src="https://res.cloudinary.com/dwz16rstr/image/upload/v1674147320/chat/login_ch0nnq.png"
                     alt="background"/>
                <div id="username">
                    <label htmlFor="username">Email</label>
                    <input { ...register( "username", {
                        required: true,
                        pattern: validateEmail
                    } ) } type="email" name="username"/>
                    { errors.username?.type === 'required' && <p>This field is required</p> }
                    { errors.username?.type === 'pattern' && <p>Invalid email</p> }
                    { hasError && <p>Invalid data</p> }
                </div>
                <div id="password">
                    <label htmlFor="password">Password</label>
                    <input { ...register( "password", {
                        required: true,
                        minLength: 3
                    } ) } type="password" name="password"/>
                    { errors.password?.type === 'required' && <p>This field is required</p> }
                    { errors.password?.type === 'minLength' && <p>Password is too short!</p> }
                </div>

                <div id="go-login">
                    { isLoading ? <Jelly size={ 35 } color="#231F20"/> :
                        <>
                            <button>LOGIN</button>
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
