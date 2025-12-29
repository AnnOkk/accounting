import './App.css'
import Profile from "./components/Profile";
import {Route, Routes} from "react-router";
import Guest from "./components/Guest";
import ProtectedRouting from "./components/Profile/ProtectedRouting.tsx";

function App() {

    //TODO
    const token = '';

    const isAuthenticated = Boolean(token)






    return (
        <Routes>
            <Route path='/' element={<Guest/>}/>

<Route element={<ProtectedRouting isAuthentificated={isAuthenticated}/>}>

            <Route path='/profile' element={<Profile/>}/>
</Route>
        </Routes>

    );
}

export default App
