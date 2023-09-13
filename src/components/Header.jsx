import Link from "next/link";
import styles from "../styles/Header.module.css"
import logo from "../../public/ToDoList.svg"
import profileIco from "../../public/ProfileIco.svg"
import Image from "next/image";

const Header = ({isAuthenticatedUser}) => {
    return (
        <div className={styles.header}>
            <div className={styles.wrapper}>
                <div className={styles.info}>
                    <Link href={"/"} className={styles.headerLink}>
                        <Image src={logo} alt={"logo"}/>
                    </Link>

                    {isAuthenticatedUser && <Link href={"/profile"} className={styles.headerLink}>
                        <Image src={profileIco} alt={"profile ico"}/>
                    </Link>}
                </div>
            </div>
        </div>
    )
}

export {Header}

