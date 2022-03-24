import React, { useState } from "react"; 


const Auth = () => { 
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const onChange = (event) => {
        const { 
            target : { name, value}, // 변경이 일어난 부분
        } = event;
        if(name === 'email') {
            setEmail(value);
        } else if (name === "password") {
            setPassword(value);
        }
    }
    const onSubmit = (event) => {
        event.preventDefault();
    }
    return ( 
        <div >
        <form onSubmit={onSubmit}>
            <input 
                name="email" 
                type="email" 
                placeholder="Email" 
                required 
                value={email}
                onChange={onChange}  />
            <input 
                name="password" 
                type="password"
                placeholder="Password"
                required
                value={password}
                onChange={onChange} />
            <input
                type="submit" 
                value="Login" />
        </form>
        <div>
            <button>Continue with Google</button>
            <button>Continue with Github</button>
        </div>
        </div>
    );
};
export default Auth;