import './App.css'
import Profile from "./components/Profile";
import {Route, Routes} from "react-router-dom";
import Guest from "./components/Guest";
import ProtectedRouting from "./components/Profile/ProtectedRouting.tsx";
import GuestOnly from "./components/Guest/GuestOnly.tsx";



function App() {

    //TODO
    const token = '1234';

    const isAuthenticated = Boolean(token)

    return (
        <Routes>

            {/*Guest pages*/}
            <Route element={<GuestOnly isAuthentificated={isAuthenticated}/>}>
                <Route path='/' element={<Guest/>}/>

            </Route>


                {/*Protected*/}
            <Route element={<ProtectedRouting isAuthentificated={isAuthenticated}/>}>
                <Route path='/profile' element={<Profile/>}/>

            </Route>
        </Routes>

    );
}

export default App
