import React, { useEffect } from 'react';
import { Navigate, Route, Routes } from "react-router-dom";
import { ChatContainer } from "../chat/ChatContainer";
import { PrivateRoute } from "./privateRoute/PrivateRoute";
import { RegisterContainer } from "../auth/register/RegisterContainer";
import { LoginContainer } from "../auth/login/LoginContainer";
import { PublicRoute } from "./publicRoute/PublicRoute";
import { useDispatch } from "react-redux";
import { getAuth } from "../store/slices/auth/index.js";
import { SocketsProvider } from "../chat/context/SocketProvider";


export const AppRouter = () => {
    const dispatch = useDispatch();

    useEffect( () => {
        dispatch( getAuth() )
    }, [] );

    return (
        <SocketsProvider>
            <Routes>
                <Route element={ <PublicRoute/> }>
                    <Route path="/login" element={ <LoginContainer/> }></Route>
                    <Route path="/register" element={ <RegisterContainer/> }></Route>
                    <Route path="/*" element={ <Navigate to="/register"/> }></Route>
                </Route>

                <Route element={ <PrivateRoute/> }>
                    <Route path="/chat" element={ <ChatContainer/> }></Route>
                    <Route path="/*" element={ <Navigate to="/chat"/> }></Route>

                </Route>
            </Routes>
        </SocketsProvider>
    );
}
