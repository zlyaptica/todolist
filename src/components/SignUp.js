import React from 'react'
import classes from '../styles/SignUp.module.css'


const SignUp = () => {
    const signUp = () => {
        console.log("signed up")
    }
    return (
        <div className={classes.signUp}>
            <div className={classes.wrapper}>
                <div className={classes.header}>Регистрация</div>
                <form onSubmit={signUp}>
                    <input className={classes.input} name="username" type="text" placeholder="Имя"/>
                    <input className={classes.input} name="email" type="text" placeholder="Почта" />
                    <input className={classes.input} name="password" type="password" placeholder="Пароль" />
                    <button className={classes.signUpButton}>Регистрация</button>
                </form>
            </div>
        </div>
    )
}

export {SignUp}