import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import "./login.css";

const Login = () => {
    const { singInUsingGoogle } = useAuth();
    const Location = useLocation();
    const history = useHistory();
    console.log('Came From', Location.state?.from);
    const redirectURL = Location.state?.from || "/shop"


    const handleGoogleLogin = () => {
        singInUsingGoogle()
            .then(result => {
                history.push(redirectURL);

            })
    }
    return (
        <div className="login-form">
            <div className="form-body">
                <h2>Login</h2>
                <form onSubmit="">
                    <input type="email" name="" id="" placeholder="Your Email" />
                    <br />
                    <input type="password" name="" id="" />
                    <br />
                    <input type="submit" value="Submit" />
                </form>
                <p>New On Ema_Jhon ? <Link to="/register">Create Account</Link> </p>
                <div>--------------------OR--------------------</div>
                <button onClick={handleGoogleLogin} className="btn-regular">Google Sing In </button>
            </div>

        </div>
    );
};

export default Login;