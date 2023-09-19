import {MainContainer} from "@/components/MainContainer";
import {Canban} from "@/components/Canban";
import styles from "./../../styles/Project.module.css"

export default function Project() {
    const isAuthenticatedUser = true
    return (
        <MainContainer isAuthenticatedUser={isAuthenticatedUser}>
            <div className={styles.project}>
                <div className={styles.boardHeader}>
                    <h1 >Доска Канбан</h1>
                </div>
                <Canban/>
            </div>
        </MainContainer>
    )
}

