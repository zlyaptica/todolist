"use client"
import styles from '../styles/welcome.module.css'
import Link from "next/link";
import {MainContainer} from "@/components/MainContainer";
import {Popup} from "@/components/Popup";
import {useState} from "react";
import {Signin} from "@/components/Signin";
import {SignUp} from "@/components/SignUp";


export default function Home() {
    const [SigninPopupActive, setPopupSigninActive] = useState(false)
    const [SignUpPopupActive, setPopupSignUpActive] = useState(false)
    const isAuthenticatedUser = true
    return (
        <MainContainer isAuthenticatedUser={isAuthenticatedUser}>
            <main className={styles.main}>
                <h1 className={styles.description}>
                    Используйте ToDOList для управления своими проектами с использованием досок Канбан и диаграмм Ганта.
                    Общайтесь с коллегами во внутрипроектном чате.
                </h1>
                <h1 className={styles.linkToSignIn} onClick={() => setPopupSigninActive(true)}>
                    <Link href="/">Начать пользоваться
                    </Link>
                </h1>
                <Popup active={SigninPopupActive} setActive={setPopupSigninActive}>
                    <Signin setPopupSignUpActive={setPopupSignUpActive} setPopupSigninActive={setPopupSigninActive}/>
                </Popup>
                <Popup active={SignUpPopupActive} setActive={setPopupSignUpActive}>
                    <SignUp/>
                </Popup>

            </main>
        </MainContainer>
    )
}
