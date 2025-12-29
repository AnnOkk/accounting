import {Navigate, Outlet} from "react-router-dom";

const ProtectedRouting = ({isAuthentificated}:{isAuthentificated:boolean}) => {
    if(!isAuthentificated){
        return <Navigate to="/" /> //where we are coming if not isAuthentificated
    }

    return (
        <Outlet/>
    )
}

export default ProtectedRouting;