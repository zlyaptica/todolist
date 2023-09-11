"use client"
import React from 'react'
import classes from '../styles/Signin.module.css'

const Signin = (props) => {

    const signIn = () => {
        console.log("signed in")
    }
    const popupHandle = () => {
        props.setPopupSigninActive(false)
        props.setPopupSignUpActive(true)
    }
    return (
        <div className={classes.signIn}>
            <div className={classes.wrapper}>
                <div className={classes.header}>Войти</div>
                <form onSubmit={signIn}>
                    <div>
                        <input className={classes.input} name="email" type="text" placeholder="Почта"/>
                    </div>
                    <div>
                        <input className={classes.input} name="password" type="password" placeholder="Пароль"/>
                    </div>
                    <div>
                        <input name="rememberMe" type="checkbox" /> Запомнить меня <br></br>
                    </div>
                    <div>
                        <button className={classes.signInButton}>Войти</button>
                    </div>
                </form>
                <p>или</p>
                <button className={classes.toSignUp} onClick={() => popupHandle()}>Зарегистрироваться</button>
            </div>
        </div>
    )
}


export {Signin}