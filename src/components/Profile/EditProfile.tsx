import {useState} from "react";

const EditProfile = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')

    const handleClickSave = () => {
        //TODO implement edit profile save and close logic
        alert(" Profile updated")
    }
    const handleClickClose = () => {
        //TODO close without save
        alert(" Closing Profile")
    }
    const handleClickClear = () => {
        setFirstName('')
        setLastName('')

    }


    return (
        <>
            <label>First name
                <input type='text'
                       value={firstName}
                       onChange={(e) => setFirstName(e.target.value)}/>
            </label>
            <label>Last name
                <input type='text'
                       value={lastName}
                       onChange={(e) => setLastName(e.target.value)}/>
            </label>
            <button onClick={handleClickSave}>Save and close</button>
            <button onClick={handleClickClose}> Close without save</button>
            <button onClick={handleClickClear}> Clear</button>

        </>
    )
}

export default EditProfile;