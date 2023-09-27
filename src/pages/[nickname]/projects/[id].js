import {useRouter} from "next/navigation";
import {useEffect, useState} from "react";
import styles from "@/styles/Project.module.css";
import {Canban} from "@/components/Canban";
import {MainContainer} from "@/components/MainContainer";

export async function getServerSideProps(context) {
    const {nickname, id} = context.query
    const boardDataRes = await fetch(`http://localhost:3000/api/get/board/${nickname}/${id}`)
    const data = await boardDataRes.json()
    const boardName = data.name
    let boardTasks = data.tasks
    let tasks = []
    let taskCount = 0
    for (const task in boardTasks) {
        taskCount++
    }
    for (let i = 0; i < taskCount; i++) {
        const URL = `http://localhost:3000/api/get/task/${nickname}/${id}/${boardTasks[i]}`
        const tasksDataRes = await fetch(URL)
        tasks.push(await tasksDataRes.json())
    }

    return {props: {nickname, id, tasks, boardName}}
}

export default function Project({nickname, id, tasks, boardName}) {
    const router = useRouter()

    const [taskName, setTaskName] = useState('')
    const createTaskSubmit = async () => {
        let URL = `http://localhost:3000/api/new/task/${nickname}/${id}/${taskName}`
        await fetch(URL)
    }
    useEffect(() => {
        if (typeof window !== "undefined") {
            if (!JSON.parse(localStorage.getItem("isAuthenticatedUser"))) {
                router.push('/')
            }
        }
    }, []);

    return (
        <MainContainer>
            <div className={styles.project}>
                <div className={styles.boardHeader}>
                    <h1>{boardName}</h1>
                </div>
                <form onSubmit={createTaskSubmit} className={styles.newTaskForm}>
                    <input onChange={(e) => setTaskName(e.target.value)}
                           name="taskName"
                           type="text"
                           placeholder="Названия таска"
                           required
                           value={taskName}/>
                    <button>Создать</button>
                </form>
                <Canban id={id} tasks={tasks}/>
            </div>
        </MainContainer>
    )
}