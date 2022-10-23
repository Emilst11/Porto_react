import React from "react";
import { Route, Routes, HashRouter } from 'react-router-dom'
import LandingPage from "./pages/LandingPage";
import Resume from "./pages/Resume";

const Routers = () => {
    return(
        <HashRouter>
            <Routes>
                <Route path='/' element={<LandingPage/>}/>
                <Route path="/resume" element={<Resume/>}/>
            </Routes>
        </HashRouter>
    )
}

export default Routers