import {MainContainer} from "@/components/MainContainer";
import {Canban} from "@/components/Canban";
import styles from "../../styles/Project.module.css"
import {useEffect} from "react";

export async function getServerSideProps() {
    const res = await fetch('http:localhost:3000/api/user/dpialkin')
    const user = await res.json()
    return { props: { user } }
}

export default function Project({user}) {
    const isAuthenticatedUser = true
    const den = user

    if (typeof window !== 'undefined') {
        let name = localStorage.getItem('name')
        console.log(name)
    }
    return (
        <MainContainer isAuthenticatedUser={isAuthenticatedUser}>
            <div className={styles.project}>
                <div className={styles.boardHeader}>
                    <h1 >Доска Канбан {den.Name}</h1>
                </div>
                <Canban/>
            </div>
        </MainContainer>
    )
}

