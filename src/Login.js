import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom';

function Login() {
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
                    <input type='text' />

                    <h5>Password</h5>
                    <input type='password' />

                    <button className='login__signinbutton'>Sign In</button>

                    <p>By signing in you agree to Amzn fake clone conditions of use & sale. Please see our privacy ntice, our cookies notice and out interest-based ads notice.</p>

                    <button className='login__registerbutton'>Create your Amazon account</button>
                </form>
            </div>
        </div>
    )
}

export default Login;
