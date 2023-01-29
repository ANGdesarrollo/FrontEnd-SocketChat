import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

export const PublicRoute = () => {

    const { status, done } = useSelector( state => state.auth );

    if(!done) {
        return <Navigate to="/"/>
    }

    if ( status ) {
        return <Navigate to="/chat"/>
    }

    return (
        <Outlet/>
    );
};
