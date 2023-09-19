import styles from "./../styles/CreateProject.module.css"
import React from "react";
const CreateProject = ({setCreateProjectPopupActive}) => {
    const createProject = () => {
        console.log("create")
    }

    const popupHandle = () => {
        setCreateProjectPopupActive(true)
    }
    return (
        <div className={styles.createProject}>
            <div className={styles.wrapper}>
                <div className={styles.header}>Войти</div>
                <form onSubmit={createProject}>
                    <div>
                        <input className={styles.formInput} type="text" name="projectName" placeholder="Название проекта"/>
                    </div>
                    <div>
                        <input className={styles.formInput} type="text" name="friends" placeholder="Участники проекта"/>
                    </div>
                    <div>
                        <button onClick={() => popupHandle()}>Создать</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export {CreateProject}