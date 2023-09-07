import Link from "next/link";
import styles from "../styles/Header.module.css"
import logo from "../img/ToDoList.svg"
import profileIco from "../img/ProfileIco.svg"
import Image from "next/image";

const Header = ({isAuthenticatedUser}) => {
    return (
        <div className={styles.header}>
            <div className={styles.info}>
                <Link href={"/"} className={styles.headerLink}>
                    <Image src={logo} alt={"logo"}/>
                </Link>
                {isAuthenticatedUser
                ?
                    <Link href={"/profile"} className={styles.headerLink}>
                        <Image src={profileIco} alt={"profile ico"}/>
                    </Link>
                :
                    <Link href={"/signin"} className={styles.navLink}>Войти</Link>
                }
            </div>
        </div>
    )
}

export {Header}