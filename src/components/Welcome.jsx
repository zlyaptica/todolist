'use client'

import styles from "./../styles/Welcome.module.css"
import Link from "next/link";
import {Popup} from "@/components/Popup";
import {SignIn} from "@/components/SignIn";
import {SignUp} from "@/components/SignUp";
import {useState} from "react";

export default function Welcome() {
    const [SignInPopupActive, setSignInPopupActive] = useState(false)
    const [SignUpPopupActive, setPopupSignUpActive] = useState(false)

    return (
        <main className={styles.main}>
            <h1 className={styles.description}>
                Используйте ToDOList для управления своими проектами с использованием досок Канбан и диаграмм Ганта.
                Общайтесь с коллегами во внутрипроектном чате.
            </h1>
            <h1 className={styles.linkToSignIn} onClick={() => setSignInPopupActive(true)}>
                <Link href="/">Начать пользоваться</Link>
            </h1>
            <Popup active={SignInPopupActive} setActive={setSignInPopupActive}>
                <SignIn setPopupSignUpActive={setPopupSignUpActive}
                        setPopupSignInActive={setSignInPopupActive}/>
            </Popup>
            <Popup active={SignUpPopupActive} setActive={setPopupSignUpActive}>
                <SignUp/>
            </Popup>
        </main>
    )
}