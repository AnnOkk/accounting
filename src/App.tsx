import './App.css'
import Profile from "./components/Profile";
import {Route, Routes} from "react-router-dom";
import Guest from "./components/Guest";
import ProtectedRouting from "./components/Profile/ProtectedRouting.tsx";
import GuestOnly from "./components/Guest/GuestOnly.tsx";
import SignIn from "./components/Guest/SignIn.tsx";
import SignUp from "./components/Guest/SignUp.tsx";


function App() {

    //TODO
    const token = '1234';

    const isAuthenticated = Boolean(token)

    return (
        <Routes>

            {/*Guest pages*/}
            <Route element={<GuestOnly isAuthentificated={isAuthenticated}/>}>
                <Route path='/' element={<Guest/>}/>
                <Route path='/signin' element={<SignIn/>}/>
                <Route path='/signup' element={<SignUp/>}/>
            </Route>


                {/*Protected*/}
            <Route element={<ProtectedRouting isAuthentificated={isAuthenticated}/>}>
                <Route path='/profile' element={<Profile/>}/>
                {/*<Route path='/profile/updateuser' element={<UpdateUser/>}/>*/}
                {/*<Route path='/profile/editprofile' element={<EditProfile/>}/>*/}
                {/*<Route path='/profile/changepassword' element={<ChangePassword/>}/>*/}
            </Route>
        </Routes>

    );
}

export default App
