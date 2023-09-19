import React from 'react'
import styles from '../styles/SignUp.module.css'


const SignUp = () => {
    const signUp = () => {
        console.log("signed up")
    }
    return (
        <div className={styles.signUp}>
            <div className={styles.wrapper}>
                <div className={styles.header}>Регистрация</div>
                <form onSubmit={signUp}>
                    <input className={styles.input} name="username" type="text" placeholder="Имя"/>
                    <input className={styles.input} name="email" type="text" placeholder="Почта" />
                    <input className={styles.input} name="password" type="password" placeholder="Пароль" />
                    <button className={styles.signUpButton}>Регистрация</button>
                </form>
            </div>
        </div>
    )
}

export {SignUp}