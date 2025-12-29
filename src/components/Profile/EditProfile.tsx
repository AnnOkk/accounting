import {useState} from "react";

interface EditProfile {
    close: () => void;
}

const EditProfile = ({close}:EditProfile) => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')

    const handleClickSave = () => {
        //TODO implement edit profile save and close logic
        alert(" Profile updated")
        close();
    }
    // const handleClickClose = () => {
    //     close();
    // }
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
            <button onClick={close}> Close without save</button>
            <button onClick={handleClickClear}> Clear</button>

        </>
    )
}

export default EditProfile;