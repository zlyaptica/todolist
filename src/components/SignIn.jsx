'use client'

import React from 'react'
import styles from '../styles/Signin.module.css'
import {useState} from 'react'

const SignIn = ({setPopupSignInActive, setPopupSignUpActive}) => {
    const [nickName, setNickName] = useState('')
    const [password, setPassword] = useState('')
    const signInSubmit = async (e) => {
        e.preventDefault()
        let url = `http://localhost:3000/api/user/signin/${nickName}/${password}`
        let response = await fetch(url)
        let result
        if (response.status === 200) {
            result = await response.json()
            alert('Добро пожаловать, ' + result.name + '!')
            if (typeof window !== 'undefined') {
                localStorage.setItem('isAuthenticatedUser', 'true')
                localStorage.setItem("user", JSON.stringify(result))
            }
        } else {
            alert('Ошибка:' + response.status)
        }
    }
    const popupHandle = () => {
        setPopupSignInActive(false)
        setPopupSignUpActive(true)
    }
    return (
        <div className={styles.signIn}>
            <div className={styles.wrapper}>
                <div className={styles.header}>Войти</div>
                <form onSubmit={signInSubmit}>
                    <div>
                        <input
                            onChange={(e) => setNickName(e.target.value)}
                            className={styles.input}
                            name="nickname"
                            type="text"
                            placeholder="Никнейм пользователя"
                            value={nickName}
                        />
                    </div>
                    <div>
                        <input
                            className={styles.input}
                            onChange={(e) => setPassword(e.target.value)}
                            name="password"
                            type="password"
                            placeholder="Пароль"
                            required
                            value={password}
                        />
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