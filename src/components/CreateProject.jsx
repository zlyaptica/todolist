import styles from "./../styles/CreateProject.module.css"
import React from "react";
const CreateProject = ({setCreateProjectPopupActive, setCreateProjectFormProjectName, createProjectSubmit}) => {
    return (
        <div className={styles.createProject}>
            <div className={styles.header}>Создать проект</div>
            <form onSubmit={createProjectSubmit}>
                <div>
                    <input className={styles.formInput} type="text" name="projectName" placeholder="Название проекта"
                           onChange={(e) => setCreateProjectFormProjectName(e.target.value)}/>
                </div>
                <div>
                    <button type="submit" onClick={() => setCreateProjectPopupActive(false)}>Создать</button>
                </div>
            </form>
        </div>
    )
}

export {CreateProject}