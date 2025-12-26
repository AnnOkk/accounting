import {useState} from "react";

const EditProfile = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const handleClickSave = () => {
        // TODO: Implement edit profile save and close logic
        alert('Profile updated!');
    }

    const handleClickClose = () => {
        // TODO: Implement edit profile close without save logic
        alert('EditProfile closed!');
    }

    const handleClickClear = () => {
        setFirstName('');
        setLastName('');
    }

    return (
        <>
            <label>First name:
                <input
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    type="text"
                />
            </label>
            <label>Last name:
                <input
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    type="text"
                />
            </label>
            <button onClick={handleClickSave}>Save and close</button>
            <button onClick={handleClickClose}>Close without Save</button>
            <button onClick={handleClickClear}>Clear</button>
        </>
    )
}

export default EditProfile;