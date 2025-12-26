import {useState} from "react";

const ChangePassword = () => {
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleClickSave = () => {
        // TODO: Implement change password save and close logic
        alert('Password changed!');
    }

    const handleClickClose = () => {
        // TODO: Implement change password close without save logic
        alert('ChangePassword closed!');
    }

    const handleClickClear = () => {
        setOldPassword('');
        setNewPassword('');
        setConfirmPassword('');
    }

    return (
        <>
            <label>Old password:
                <input
                    value={oldPassword}
                    onChange={(e) => setOldPassword(e.target.value)}
                    type="password"/>
            </label>
            <label>New password:
                <input
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    type="password"/>
            </label>
            <label>Confirm password:
                <input
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    type="password"/>
            </label>
            <button onClick={handleClickSave}>Save and close</button>
            <button onClick={handleClickClose}>Close without Save</button>
            <button onClick={handleClickClear}>Clear</button>
        </>
    )
}

export default ChangePassword;