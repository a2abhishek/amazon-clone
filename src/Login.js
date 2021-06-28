import React, { useState } from 'react'
import './Login.css'
import { Link , useHistory } from "react-router-dom";
import { auth } from './firebase';

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();
        //login using firebase
        auth
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
                history.push('/')
            })
            .catch(error => alert(error.message))
    }

    const register = e => {
        e.preventDefault();

        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                //successfully creates new user with email and password
                console.log(auth);

                if(auth) {
                    history.push('/');
                }
            })

            .catch(error => alert(error.message))
        //register using firebase
    }

    return (
        <div className="login">
            <Link to="/">
                <img 
                    className="login__logo"
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png   '
                    alt="amazon logo" 
                />
            </Link>    

                <div className="login__container">
                    <h1>Sign-in</h1>
                    <form action="">
                        <h5>E-mail</h5>
                        <input type="text" value={email} onChange= 
                            {e => setEmail(e.target.value)}/>

                        <h5>Password</h5>
                        <input type="password" value={password} onChange= 
                            {e => setPassword(e.target.value)} />

                        <button type="submit" className="login__signInButton" onClick={signIn}>Sign In</button>
                    </form>
                    <p>
                        By signing-in you agree to Amazon FAKE CLONE's conditions of Use & Sale. Please see our Privacy Notice,
                        our Cookies Notice and our Interest-Based Ads Notice.
                    </p>

                    <button className="login__registerButton" onClick={register}>Create your Amazon account</button>
                </div>
            
        </div>
    )
}

export default Login
