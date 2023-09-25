import React, {useState} from 'react'
import styles from '../styles/SignUp.module.css'


const SignUp = () => {
    const [nickName, setNickName] = useState('')
    const [password, setPassword] = useState('')
    const [Name, setName] = useState('')
    async function signUp(e) {
        e.preventDefault()
        console.log(Name)
        console.log(nickName)
        console.log(password)
        let url= 'http://localhost:3000/api/user/check/'+nickName+'/'+password
        let response = await fetch(url)
        if (response.status===401){
            url = 'http://localhost:3000/api/user/signup/'+Name+'/'+nickName+'/'+password
            response = await fetch(url)
            let result
            if (response.status===201){
                result = await response.json()
                alert('Successful sign up')
            }else{
                alert('Oops! User has not been added! This user already exists.')
            }
        }else{
            alert('Oops! User has not been added!')
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
                        value = {Name}
                    />
                    <input
                        className={styles.input}
                        name="email"
                        type="text"
                        placeholder="Почта"
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