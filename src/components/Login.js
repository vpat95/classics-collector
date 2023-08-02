import React, {useState} from "react";

function Login(){
    const [login, setLogin] = useState(false)

    function handleClick(){
        setLogin((login) => !login)
    }
    return (
        <button onClick = {handleClick} className="login">{login ? 'Logout': 'Login'}</button>
    )
}

export default Login