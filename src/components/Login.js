import React from "react";

function Login({user, setUser}){

    function handleLoginClick(){
        setUser({
            id: 1,
            username: 'Vivek'
        })
    }

    function handleLogoutClick(){
        setUser(null)
    }
    return (
        <nav>
            {user ? (
            <button onClick = {handleLogoutClick}>Logout</button>
            ) : (
            <button onClick = {handleLoginClick}>Login</button>
            )}
        </nav>
    )
}

export default Login