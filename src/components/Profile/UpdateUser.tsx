import {useState} from "react";
import EditProfile from "./EditProfile.tsx";
import ChangePassword from "./ChangePassword.tsx";

const UpdateUser = () => {

    const [updateMode, setUpdateMode] = useState('default')
    switch (updateMode) {
        case 'edit profile':
            return <EditProfile/>
        case 'change password':
            return <ChangePassword/>
        case 'default':
            return (
                <div>
                    <button onClick={()=> setUpdateMode('edit profile')}>Edit profile</button>
                    <button onClick={()=> setUpdateMode('change password')}>Change password</button>
                </div>
            )
    }

    return (
        <div>

        </div>
    )
}

export default UpdateUser;