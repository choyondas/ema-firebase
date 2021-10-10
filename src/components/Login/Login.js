import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

import "./Login.css"
const Login = () => {
    const { signInUsingGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const Redirect_uri = location.state?.form || "/shop"

    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(Redirect_uri)
            })
    }
    return (
        <div className="login-form">
            <div >
                <h2>LOGIN</h2>
                <form onSubmit="">
                    <input type="email" name="" id="" placeholder="your email" />
                    <br />
                    <input type="password" name="" id="" placeholder="password" />
                    <br />
                    <input type="submit" value="Submit" />

                </form>
                <p>new to ema-jhon <Link to='/register' >Create Account</Link> </p>
                <div> ------------or------------</div>
                <button onClick={handleGoogleLogin} className="btn-regular">google sign in</button>
            </div>
        </div>
    );
};

export default Login;