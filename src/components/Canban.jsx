'use client'

import styles from "./../styles/Canban.module.css"
import {useState} from "react";

const Canban = () => {
    const [boards, setBoards] = useState([
        { id: 1, title: "Сделать", tasks: [{ id: 1, title: "Удалить диаграммы Ганта" }, { id: 2, title: "Авторизацию" }] },
        { id: 2, title: "В работе", tasks: [{ id: 1, title: "Доска Канбан" }, { id: 2, title: "Профиль" }] },
        { id: 3, title: "Сделано", tasks: [{ id: 1, title: "Дизайн страниц" }, { id: 2, title: "База данных" }] }
    ])

    const [currentBoard, setCurrentBoard] = useState(null)
    const [currentTask, setCurrentTask] = useState(null)

    function dropCardHandler(e, board) {
        board.tasks.push(currentTask)
        const currentIndex = currentBoard.tasks.indexOf(currentTask)
        currentBoard.tasks.splice(currentIndex, 1)
        setBoards(boards.map(b => {
            if (b.id === board.id) {
                return board
            }
            if (b.id === currentBoard.id) {
                return currentBoard
            }

            return b
        }))
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
        setCurrentBoard(board)
        setCurrentTask(task)
    }

    function dragEndHandler(e) {
        e.target.style.boxShadow = 'none'
    }

    function dropHandler(e, board, task) {
        e.preventDefault()
        const currentIndex = currentBoard.tasks.indexOf(currentTask)
        currentBoard.tasks.splice(currentIndex, 1)
        const dropIndex = board.tasks.indexOf(task)
        board.tasks.splice(dropIndex + 1, 0, currentTask)
        setBoards(boards.map(b => {
            if (b.id === board.id) {
                return board
            }
            if (b.id === currentBoard.id) {
                return currentBoard
            }

            return b
        }))
    }

    return (
        <div className={styles.canban}>
            {boards.map(board =>
                <div
                    onDragOver={(e) => dragOverHandler(e)}
                    onDrop={(e) => dropCardHandler(e, board)}
                    className={styles.board}
                >
                    <h2 className={styles.boardTitle}>{board.title}</h2>
                    {board.tasks.map(task =>
                        <div
                            draggable={true}
                            onDragOver={(e) => dragOverHandler(e)}
                            onDragLeave={(e) => dragLeaveHandler(e)}
                            onDragStart={(e) => dragStartHandler(e, board, task)}
                            onDragEnd={(e) => dragEndHandler(e)}
                            onDrop={(e) => dropHandler(e, board, task)}
                            className={styles.task}
                        >
                            {task.title}
                        </div>)}
                </div>)}
        </div>
    )
}

export {Canban}