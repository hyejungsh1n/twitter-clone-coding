import React from "react"
import {HashRouter as Route, Routes } from "react-router-dom"
import Auth from "../routes/Auth";
import Home from "../routes/Home";

export default () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    return <Routes>
        {isLoggedIn ? ( 
            <>
            <Route path="/" 
                elements={<Home />}> 
            </Route>
            </>
        ) : (
            <Route path="/">
                elements={<Auth />}
            </Route>
        )
        }
    )
    </Routes>
}