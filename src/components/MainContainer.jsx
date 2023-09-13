import {Header} from "@/components/Header";
import styles from "./../styles/mainContainer.module.css"

const MainContainer = ({children, isAuthenticatedUser}) => {
    return (
        <div className={styles.mainContainer}>
            <Header isAuthenticatedUser={isAuthenticatedUser}/>
            <div>
                {children}
            </div>
        </div>
    )
}

export {MainContainer}