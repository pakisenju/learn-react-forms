import { useState } from "react";

function Login2() {
    const [user, setUser] = useState({
        username: "",
        password: ""
    })

    const handleInput = (e) => {
        setUser({
            ...user,
            [e.target.name] : e.target.value
        })
    }

	return (
        <form action="submit">
            <h1>Login</h1>
            <br />
            <input 
                type="text" 
                name="username" 
                placeholder="username"
                value={user.username}
                onChange={handleInput}
            />
            <br />
            <input 
                type="password" 
                name="password" 
                placeholder="password"
                value={user.password}
                onChange={handleInput}
            />
            <br />
            <button>Login</button>
        </form>
    )
}

export default Login2;
