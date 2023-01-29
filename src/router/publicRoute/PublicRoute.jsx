import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

export const PublicRoute = () => {

    const { status } = useSelector( state => state.auth );

    if ( status ) {
        return <Navigate to="/chat"/>
    }

    return (
        <Outlet/>
    );
};
