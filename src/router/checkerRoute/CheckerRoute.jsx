import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

export const CheckerRoute = () => {
    const {  done, status } = useSelector( state => state.auth );

    if(done && status) {
        return <Navigate to="/chat"/>
    }

    if(done && !status) {
        return <Navigate to="/register"/>
    }

    if ( !done ) {
        return (
            <Outlet/>
        );
    }
};
