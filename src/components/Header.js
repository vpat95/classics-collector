import React from "react";
import Login from "./Login";

function Header({isLoggedIn}){
    return (
        <header className="header">
            <h1>Classic Collector</h1>
            <nav>
                <Login />
            </nav>
        </header>
    )
}

export default Header