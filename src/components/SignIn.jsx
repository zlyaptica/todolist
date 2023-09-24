'use client'
import React from 'react'
import styles from '../styles/Signin.module.css'
import {useState} from 'react'

const SignIn = ({setPopupSignInActive, setPopupSignUpActive}) => {
    const [nickName, setNickName] = useState('')
    const [password, setPassword] = useState('')
    async function signIn(e) {
        e.preventDefault()
        console.log(nickName)
        let url = 'http://localhost:3000/api/user/signin/'+nickName+'/'+password
        let response= await fetch(url)
        let result
        if (response.status===302){
            result = await response.json()
            alert('Дарова ' + result.Name)
        }else{
            alert('Ты кто? error:'+response.status)
        }

        debugger

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
                        <input
                            onChange={(e) => setNickName(e.target.value)}
                            className={styles.input}
                            name="email"
                            type="text"
                            placeholder="Почта"
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