import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

export const CheckerRoute = () => {
    const {  done, status } = useSelector( state => state.auth );

    console.log('me renderice')

    if(done && status) {
        console.log('entre 1')
        return <Navigate to="/chat"/>
    }

    if(done && !status) {
        console.log('entre 2')
        return <Navigate to="/register"/>
    }

    if ( !done ) {
        return (
            <Outlet/>
        );
    }
};
