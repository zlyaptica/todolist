import Link from "next/link";
import styles from "../styles/Header.module.css"
import logo from "../img/ToDoList.svg"
import profileIco from "../img/ProfileIco.svg"
import Image from "next/image";
import {useState} from "react";
import {FallOutMenu} from "@/components/FallOutMenu";
import classes from "@/styles/FallOutMenu.module.css";

const Header = ({isAuthenticatedUser}) => {
    const [FallOutActive, setFallOutActive] = useState(false)
    return (
        <div className={styles.header}>
            <div className="wrapper">
                <div className={styles.info}>
                    <Link href={"/"} className={styles.headerLink}>
                        <Image src={logo} alt={"logo"}/>
                    </Link>
                    {isAuthenticatedUser
                        ?
                        <div>
                            <Link href={"/"} className={styles.headerLink} onClick={() => setFallOutActive(!FallOutActive)}>
                                <Image src={profileIco} alt={"profile ico"}/>
                            </Link>
                            <FallOutMenu active={FallOutActive}>
                                <div className={styles.menu__item}>
                                    <Link href={"/settings"}>настройки</Link>
                                </div>
                                <div className={styles.menu__item}>
                                    <Link href={"/"}>Выйти</Link>
                                </div>
                            </FallOutMenu>
                        </div>
                        :
                        <Link href={"/signin"} className={styles.navLink}>Войти</Link>
                    }

                </div>

            </div>
        </div>
    )
}

export {Header}