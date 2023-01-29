import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from "react-redux";

export const PrivateRoute = () => {

    const { status } = useSelector( state => state.auth );

    if ( !status ) {
        return <Navigate to="/register"/>
    }

    return (
        <Outlet/>
    )
}
