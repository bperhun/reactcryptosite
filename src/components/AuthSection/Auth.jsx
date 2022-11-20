import React from "react";
import { useRef } from "react";
import classes from "../AuthSection/Auth.module.css";
import { registration, login } from "../../actions/user";
import { useDispatch, useSelector } from "react-redux";

const Auth = (props) => {
    const email = useSelector(state => state.auth.templatesData.email);
    const name = useSelector(state => state.auth.templatesData.name);
    const password = useSelector(state => state.auth.templatesData.password);

    const loginn = React.useRef();


    const userName = React.useRef();
    const userPassword = React.useRef();
    const userEmail = React.useRef();

    const loginPassword = React.useRef();
    const loginEmail = React.useRef();
    const dispatch = useDispatch();

    function openLogin() {
        loginn.current.classList.add(`${classes.active}`);
    };

    function openRegistr() {
        loginn.current.classList.remove(`${classes.active}`);
    };

    function updateRegForm() {
        props.updateRegForm(userName.current.value, userPassword.current.value, userEmail.current.value);
    }

    function loginUser() {
        dispatch(login(loginEmail.current.value, loginPassword.current.value));
    }

    return (
        <div className={classes.loginPage}>
            <div className="container">
                <span className={classes.registr__circle}></span>
                <span className={classes.registr__circle}></span>
                <div className={classes.form}>
                    <div className={classes.block} ref={loginn}>
                        <div className={classes.registerForm}>
                            <input type="text" onChange={updateRegForm} ref={userName} placeholder="name" value={props.data.templatesData.name} />
                            <input type="password" onChange={updateRegForm} ref={userPassword} placeholder="password" value={props.data.templatesData.password} />
                            <input type="email" onChange={updateRegForm} ref={userEmail} placeholder="email address" value={props.data.templatesData.email} />
                            <a onClick={() => registration(email, name, password)} className={classes.button}>create</a>
                            <p className={classes.message}>Already registered? <a href="#" onClick={openLogin}>Sign In</a></p>
                        </div>
                    </div>
                    <div className={classes.block1}>
                        <div className={classes.loginForm}>
                            <input type="email" placeholder="email address" ref={loginEmail} />
                            <input type="password" placeholder="password" ref={loginPassword} />
                            <div onClick={loginUser} className={classes.button}>login</div>
                            <p className={classes.message} >Not registered? <a href="#" onClick={openRegistr}>Create an account</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Auth;