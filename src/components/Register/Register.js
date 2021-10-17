import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className="login-form">
            <div>
                <h1>Create Account</h1>
                <form onSubmit="">
                    <input type="email" name="" id="" placeholder="Enter Your Email" />
                    <br />
                    <input type="password" name="" id="" placeholder="Enter Your PassWord" />
                    <br />
                    <input type="password" name="" id="" placeholder="Re-Enter Your Password" />
                    <br />
                    <input type="submit" value="Submit" />


                </form>
                <p>Already have An Account ? <Link to="/login">Login</Link></p>
                <div>--------------------OR--------------------</div>
                <button className="btn-regular">Google Sing In </button>
            </div>

        </div>
    );
};

export default Register;