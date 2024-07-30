import { useState } from "react";

function Login() {
    const [username, setUsername] = useState("admin")
    const [password, setPassword] = useState("")

    const handleUsername = (e) => {
        setUsername(e.target.value)
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    const login = (e) => {
        e.preventDefault()
        console.log(username)
        console.log(password)
    }

	return (
        <form action="submit">
            <h1>Login</h1>
            <br />
            <input type="text" name="username" placeholder="username" onChange={handleUsername}/>
            <br />
            <input type="password" name="password" placeholder="password" onChange={handlePassword}/>
            <br />
            <button className="btn btn-xs" onClick={login}>Login</button>
        </form>
    )
}

export default Login;
