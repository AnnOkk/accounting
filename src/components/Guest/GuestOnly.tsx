import {Navigate, Outlet} from "react-router-dom";


const GuestOnly = ({isAuthentificated}:{isAuthentificated:boolean}) => {
    if(isAuthentificated){
        return <Navigate to="/profile" /> //where we are coming if isAutenthificated
    }
    return <Outlet/>


}

export default GuestOnly;