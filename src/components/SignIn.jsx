'use client'
import React from 'react'
import styles from '../styles/Signin.module.css'

const SignIn = ({setPopupSignInActive, setPopupSignUpActive}) => {

    const signIn = () => {
        console.log("signed in")
    }
    const popupHandle = () => {
        setPopupSignInActive(false)
        setPopupSignUpActive(true)
    }
    return (
        <div className={styles.signIn}>
            <div className={styles.wrapper}>
                <div className={styles.header}>Войти</div>
                <form onSubmit={signIn}>
                    <div>
                        <input className={styles.input} name="email" type="text" placeholder="Почта"/>
                    </div>
                    <div>
                        <input className={styles.input} name="password" type="password" placeholder="Пароль"/>
                    </div>
                    <div>
                        <input className={styles.rememberMe} type="checkbox" /> Запомнить меня <br></br>
                    </div>
                    <div>
                        <button className={styles.signInButton}>Войти</button>
                    </div>
                </form>
                <p>или</p>
                <button className={styles.toSignUp} onClick={() => popupHandle()}>Зарегистрироваться</button>
            </div>
        </div>
    )
}


export {SignIn}