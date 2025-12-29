
import Guest from "../Guest";
import Profile from "./index.tsx";

const ProtectedRouting = ({isAuthentificated}:{isAuthentificated:boolean}) => {
    if(!isAuthentificated){
        return <Guest/>
    }

    return (
        <Profile/>
    )
}

export default ProtectedRouting;