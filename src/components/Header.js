import React,{useState} from "react";
import Login from "./Login";

function Header(){
    const [user, setUser] = useState(false)
    return (
        <header className="header">
            <h1>Classic JDM Collector</h1>
            <nav>
                <Login user={user} setUser={setUser}/>
            </nav>
            {user ? <p>Welcome, {user.username}!</p>: <p>Please Login</p>}
        </header>
    )
}

export default Header