import { authService } from "fbase";
import React, { useState } from "react"; 


const Auth = () => { 
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [newAccount, setNewAccount] = useState(true)
    const [error, setError] = useState("")
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
    const onSubmit = async(event) => {
        let data;
        event.preventDefault();
        try {
            if(newAccount) {
                // create account
                /** Link:
                 * https://firebase.google.com/docs/reference/js/auth.md#createuserwithemailandpassword */
               data = await authService.createUserWithEmailAndPassword(
                   email, password
               )
    
            } else { data = await authService.signInWithEmailAndPassword(email, password)
                // Login
                
            }
            console.log(data)
        } catch(error) {
            setError(error.message)
        }

    };

// newAccount의 이전값을 가져와서 그 값에 반대되는 것을 리턴. 
const toggleAccount = () => setNewAccount((prev) => !prev); 
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
                value={newAccount ? "Create Account" : "Sign in"} />
            { error }    
        </form>
        <span onClick={toggleAccount}>{newAccount ? "Sign In" : "Create Account"}

        </span>
        <div>
            <button>Continue with Google</button>
            <button>Continue with Github</button>
        </div>
        </div>
    );
};
export default Auth;