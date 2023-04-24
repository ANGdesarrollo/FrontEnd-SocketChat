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
import { CheckerRoute } from "./checkerRoute/CheckerRoute";
import { Checker } from "../components/checker/Checker";
import { handleLocalStorage } from "../store/slices/theme/index.js";


export const AppRouter = () => {
    const dispatch = useDispatch();

    useEffect( () => {
        dispatch( getAuth() )
        dispatch(handleLocalStorage())
    }, [] );

    return (
        <SocketsProvider>
            <Routes>
                <Route element={<CheckerRoute/>}>
                    <Route path="/" element={<Checker/>}></Route>
                </Route>

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
