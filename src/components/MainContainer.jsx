import {Header} from "@/components/Header";
import styles from '@/styles/MainContainer.module.css'

const MainContainer = ({children}) => {
    return (
        <div>
            <Header/>
            <div className={styles.children}>
                {children}
            </div>
        </div>
    )
}

export {MainContainer}