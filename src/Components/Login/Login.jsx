import React, { useState } from "react";
import './Login.css';
import { useHistory } from "react-router-dom";
const Login = () => {


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [records, setRecords] = useState([]);

    const history = useHistory();
    const navigatePage = () => {

    }

    const submitForm = (e) => {

        e.preventDefault();

        const userLogin = JSON.parse(localStorage.getItem("userdata"));
        if (userLogin === null) {
            alert("Invalid Login Credentials");
        }
        else {
            let flag = 0;
            for (let i = 0; i < userLogin.length; i++) {
                if (userLogin[i].email === email && userLogin[i].password == password) {
                    flag = 1;
                    localStorage.setItem("userCredentials", JSON.stringify({
                        email: email,
                        password: password
                    }))
                    alert("login Successfull")
                    history.push("/");
                    break;
                }
            }
            if(flag === 0){
                alert("Invalid Login Credentials");
            }
        }

    }

    return (

        <>

            <div className="main-container">






                <form className="form-container">

                    <div className="header">

                        <h1 className="register-heading">

                            Kanban Board

                        </h1>

                    </div>

                    <div className="input-field">

                        <label htmlFor="email">Email</label>

                        <input type="email"  placeholder="enter your email" value={email} onChange={(e) => setEmail(e.target.value)} required/>

                        <label htmlFor="password">Password</label>

                        <input type="password" placeholder="enter password"  value={password} onChange={(e) => setPassword(e.target.value)} required/>




                    </div>

                    <div className="button-container">

                        <button onClick={submitForm} className="submit-button">Login</button>

                    </div>
                    <p>New user... <a onClick={() => { history.push('/signup') }}>Sign up</a></p>

                </form>


            </div>




        </>

    )

}

export default Login;