import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from "react-redux";

export const PrivateRoute = () => {
    const { status, done } = useSelector( state => state.auth );

    if(!done) {
        return <Navigate to="/"/>
    }

    if(!status) {
        return <Navigate to="/register"/>
    }

    return (
        <Outlet/>
    )
}
