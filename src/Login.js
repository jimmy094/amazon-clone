import React, { useState } from 'react';
import './Login.css'
import { Link, useHistory } from 'react-router-dom';
import { auth } from "./firebase";



function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault()

        auth 
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
                history.push('/')
            })
            .catch(error => alert(error.message))

    }

    const register = e => {
        e.preventDefault()

        auth
        .createUserWithEmailAndPassword(email, password)
        .then((auth) => {
            console.log(auth)
            if (auth) {
                history.push('/')
            }
        }) 
        .catch(error => alert(error.message))

    }


    return (
        <div className='login'>
            <Link to='/'>
            <img 
            className='login__logo'
            src='http://media.corporate-ir.net/media_files/IROL/17/176060/Oct18/Amazon%20logo.PNG' 
            alt='amazon logo' />
            </Link>

            <div className='login__container'>
                <h1>Sign in</h1>

                <form>
                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type='password' value={password}
                    onChange={e => setPassword(e.target.value)} />

                    <button className='login__signinbutton' type='submit' onClick={signIn}>Sign In</button>

                    <p>By signing in you agree to Amzn fake clone conditions of use & sale. Please see our privacy ntice, our cookies notice and out interest-based ads notice.</p>

                    <button className='login__registerbutton' onClick={register}>Create your Amazon account</button>
                </form>
            </div>
        </div>
    )
}

export default Login;
