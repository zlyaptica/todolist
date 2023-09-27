import Link from "next/link";
import styles from "../styles/Header.module.css"
import logo from "../../public/ToDoList.svg"
import Image from "next/image";

const Header = () => {
    return (
        <div className={styles.header}>
            <div className="wrapper">
                <div className={styles.info}>
                    <Link href={"/"} className={styles.headerLink}>
                        <Image src={logo} alt={"logo"}/>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export {Header}
