import React from "react";
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import LandingPage from "./pages/LandingPage";
import Resume from "./pages/Resume";

const Routers = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<LandingPage/>}/>
                <Route path="/resume" element={<Resume/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Routers