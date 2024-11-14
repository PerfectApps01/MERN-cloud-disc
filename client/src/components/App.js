import React, {useEffect} from 'react';
import Navbar from "./navbar/Navbar";
import './App.css'
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Registration from "../components/autorization/Registration";
import Login from "../components/autorization/Login";
import {useDispatch, useSelector} from "react-redux";
import {auth} from "../actions/user";
import Disk from "./disk/Disk";

function App() {
    const isAuth = useSelector(state => state.user.isAuth)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(auth())
    }, [dispatch])


    return (
        <BrowserRouter>
            <div className='app'>
                <Navbar/>
                <div className="wrap">
                    {!isAuth ?
                        <Routes>
                            <Route path="/registration" component={Registration}/>
                            <Route path="/login" component={Login}/>
                            <Route to="/login" element={<Navigate to="/login" />}/>
                        </Routes>
                        :
                        <Routes>
                            <Route exact path="/" component={Disk}/>
                            <Route to="/" element={<Navigate to="/" />}/>
                        </Routes>
                    }
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
