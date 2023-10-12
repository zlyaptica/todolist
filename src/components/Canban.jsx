'use client'

import styles from "./../styles/Canban.module.css"
import {useState} from "react";
import Rubbish from "./../../public/Rubbish.png"
import Image from "next/image";

const Canban = ({id, tasks}) => {

    const states = [
        {id: 0, title: "Сделать", tasks: []},
        {id: 1, title: "Делается", tasks: [] },
        {id: 2, title: "Сделано", tasks: []}
    ]
    for (let i = 0; i < tasks.length; i++) {
        const taskState = tasks[i].state
        const stateIndex = states.findIndex(item => item.title === taskState)
        if (!(stateIndex === -1)) {
            states[stateIndex].tasks.push(tasks[i])
        }
    }

    const [currentTask, setCurrentTask] = useState(null)

    const updateTaskState = async (state) => {
        const URL = `http://localhost:3000/api/update/task/state/${id}/${currentTask._id}/${state}`
        debugger
        await fetch(URL)
    }

    async function dropCardHandler(e, board) {
        debugger
        await updateTaskState(board.title)
    }
    function dragOverHandler(e) {
        e.preventDefault()

        if (e.target.className === styles.task) {
            e.target.style.boxShadow = '0 4px 3px gray'
        }
    }
    function dragLeaveHandler(e) {
        e.target.style.boxShadow = 'none'
    }
    function dragStartHandler(e, board, task) {
        setCurrentTask(task)
    }
    function dragEndHandler(e) {
        e.target.style.boxShadow = 'none'
    }
    async function dropHandler(e, board, task) {
        e.preventDefault()
        await updateTaskState(task.state)
    }

    return (
        <div className={styles.canban}>
            {states.map(board =>
                <div
                    key={board.id}
                    onDragOver={(e) => dragOverHandler(e)}
                    onDrop={(e) => dropCardHandler(e, board)}
                    className={styles.board}
                >
                    <h2 className={styles.boardTitle}>{board.title}</h2>
                    {board.tasks.map(task =>
                        <div
                            key={task._id}
                            draggable={true}
                            onDragOver={(e) => dragOverHandler(e)}
                            onDragLeave={(e) => dragLeaveHandler(e)}
                            onDragStart={(e) => dragStartHandler(e, board, task)}
                            onDragEnd={(e) => dragEndHandler(e)}
                            onDrop={(e) => dropHandler(e, board, task)}
                            className={styles.task}
                        >
                            {task.name}
                        </div>)}
                </div>)}
        </div>
    )
}

export {Canban}