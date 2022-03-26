import React from "react"
import { BrowserRouter as Router,
        Routes, 
        Route,
        Redirect,
         } from "react-router-dom"; 
import Auth from "../routes/Auth";
import Home from "../routes/Home";
import Navigation from "../components/Navigation";
import Profile from "../routes/Profile";

const AppRouter = ({ isLoggedIn }) => { 

    return (
        <Router>
            {isLoggedIn && <Navigation />}
         <Routes>
        { isLoggedIn ? ( 
            <>
            <Route path="/" 
                element={<Home />}> 
            </Route>
            <Route path="/profile" 
                element={<Profile />}> 
            </Route>
            <Redirect from="*" to="/" />
            </>
        ) : (
            <>
            <Route path="/"
                element={<Auth />}>
            </Route>
            <Redirect from="*" to="/" />
            </>
        )}
        </Routes>
    </Router>
    );
};

export default AppRouter;