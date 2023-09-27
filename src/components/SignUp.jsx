import React, {useState} from 'react'
import styles from '../styles/SignUp.module.css'

const SignUp = () => {
    const [nickName, setNickName] = useState('')
    const [password, setPassword] = useState('')
    const [Name, setName] = useState('')

    const signUp = async (e) => {
        e.preventDefault()
        let url = `http://localhost:3000/api/user/signup/${Name}/${nickName}/${password}`
        let response = await fetch(url)
        let result
        if (response.status === 200) {
            result = await response.json()
            alert('Регистрация прошла успешно')
        } else {
            alert('Пользователь не был создан')
        }
    }
    return (
        <div className={styles.signUp}>
            <div className={styles.wrapper}>
                <div className={styles.header}>Регистрация</div>
                <form onSubmit={signUp}>
                    <input
                        className={styles.input}
                        name="username"
                        type="text"
                        placeholder="Имя"
                        onChange={(e) => setName(e.target.value)}
                        value={Name}
                    />
                    <input
                        className={styles.input}
                        name="nickName"
                        type="text"
                        placeholder="Никнейм"
                        onChange={(e) => setNickName(e.target.value)}
                        value={nickName}
                    />
                    <input
                        className={styles.input}
                        name="password"
                        type="password"
                        placeholder="Пароль"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                    />
                    <button className={styles.signUpButton}>Регистрация</button>
                </form>
            </div>
        </div>
    )
}

export {SignUp}