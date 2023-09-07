import styles from '../styles/welcome.module.css'
import Link from "next/link";
import {MainContainer} from "@/components/MainContainer";

export default function Home() {
    const isAuthenticatedUser = false
    return (
        <MainContainer isAuthenticatedUser={isAuthenticatedUser}>
            <main className={styles.main}>
                <h1 className={styles.description}>
                    Используйте ToDOList для управления своими проектами с использованием досок Канбан и диаграмм Ганта.
                    Общайтесь с коллегами во внутрипроектном чате.
                </h1>
                <h1 className={styles.linkToSignIn}>
                    <Link href="/signin">Начать пользоваться</Link>
                </h1>
            </main>
        </MainContainer>
    )
}
