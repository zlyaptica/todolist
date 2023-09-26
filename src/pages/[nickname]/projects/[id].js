import {useRouter} from "next/navigation";
import {useEffect} from "react";
import styles from "@/styles/Project.module.css";
import {Canban} from "@/components/Canban";
import {MainContainer} from "@/components/MainContainer";

export async function getServerSideProps(context) {
    const {nickname, id} = context.query
    const boardDataRes = await fetch(`http://localhost:3000/api/get/board/${nickname}/${id}`)
    const data = await boardDataRes.json()
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

    return {props: {tasks}}
}

export default function Project({tasks}) {
    const router = useRouter()

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
                    <h1>Доска Канбан </h1>
                </div>
                <Canban tasks={tasks}/>
            </div>
        </MainContainer>
    )
}