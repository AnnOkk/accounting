import SignIn from "../Guest/SignIn.tsx";
import ProfileData from "./ProfileData.tsx";

const ProtectedRouting = ({isAuthentificated}:{isAuthentificated:boolean}) => {
    if(!isAuthentificated){
        return <SignIn/>
    }




    return (
        <ProfileData/>
    )
}

export default ProtectedRouting;