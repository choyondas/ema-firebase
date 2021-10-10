import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className="login-form">
            <div>
                <h2>Register: Create Account</h2>
                <form onSubmit="">
                    <input type="email" value="" placeholder="Your Email" />
                    <br />
                    <input type="password" placeholder="your password" />
                    <br />
                    <input type="password" placeholder="re-enter password" />
                    <br />
                    <input type="submit" value="Submit" />
                </form>
                <p>Already have an account? <Link to="/login">Login</Link></p>
                <div>-----------or-----------</div>
                <button className="btn-regular">google sign in </button>
            </div>
        </div>
    );
};

export default Register;