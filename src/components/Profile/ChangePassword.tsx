import {useState} from "react";
import type EditProfile from "./EditProfile.tsx";




const ChangePassword = ({close}:EditProfile) => {
    const [oldPassword,setOldPassword]=useState('')
    const [newPassword,setNewPassword]=useState('')
    const [confirmPassword,setConfirmPassword]=useState('')


    const handleClickSave = () => {
        //TODO implement edit password save and close logic
        alert(" Password updated")
        close()
    }
    // const handleClickClose = () => {
    //     close()
    // }
    const handleClickClear = () => {
        setNewPassword('')
        setConfirmPassword('')
        setConfirmPassword('')

    }

    return (
        <>
            <label>Old password
                <input type='password'
                value={oldPassword}
                onChange={(e) => setOldPassword(e.target.value)}/>
            </label>

            <label>New password
                <input type='password'
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}/>
            </label>

            <label>Confirm password
                <input type='password'
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}/>
            </label>

            <button onClick={handleClickSave}>Save and close</button>
            <button onClick={close}> Close without save</button>
            <button onClick={handleClickClear}> Clear</button>

        </>
    )
}

export default ChangePassword;