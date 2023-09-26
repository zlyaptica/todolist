'use client'

import styles from "./../styles/Canban.module.css"
import {useState} from "react";

const Canban = ({tasks}) => {
    // const [boards, setBoards] = useState([
    //     { id: 1, title: "Сделать", tasks: [{ id: 1, title: "Удалить диаграммы Ганта" }, { id: 2, title: "Авторизацию" }] },
    //     { id: 2, title: "В работе", tasks: [{ id: 3, title: "Доска Канбан" }, { id: 4, title: "Профиль" }] },
    //     { id: 3, title: "Сделано", tasks: [{ id: 5, title: "Дизайн страниц" }, { id: 6, title: "База данных" }] }
    // ])
    // const states = ["To do", "In progress", "Done"]
    let taskStates = []
    const groupByState = (arr) => {
        const stateGroups = {}

        arr.forEach(obj => {
            const state = obj.state
            if (!stateGroups[state]) {
                stateGroups[state] = []
                taskStates.push(state)
            }
            stateGroups[state].push(obj)
        })

        return Object.values(stateGroups)
    }
    const boards = [groupByState(tasks)]



    console.log("sortedTasks", boards)
    console.log("taskStates", taskStates)
    debugger
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
            {/*{states.map((state, index) => <div key={index} className={styles.board}>*/}
            {/*    <h2 className={styles.boardTitle}>{state}</h2>*/}
            {/*    {*/}
            {/*        boards[0][index].map(board => <div key={board._id} className={styles.task}>*/}
            {/*            {board.name}*/}
            {/*        </div>)*/}
            {/*    }*/}
            {/*</div>)}*/}

            {taskStates.map((taskState, index) => <div key={index} className={styles.board}>
                <h2 className={styles.boardTitle}>{taskState}</h2>
                {
                    boards[0][index].map(board => <div key={board._id} className={styles.task}>
                        {board.name}
                    </div>)
                }
            </div>)}
        </div>
        // <div className={styles.canban}>
        //     {boards.map(board =>
        //         <div
        //             key={board.id}
        //             onDragOver={(e) => dragOverHandler(e)}
        //             onDrop={(e) => dropCardHandler(e, board)}
        //             className={styles.board}
        //         >
        //             <h2 className={styles.boardTitle}>{board.title}</h2>
        //             {board.tasks.map(task =>
        //                 <div
        //                     key={task.id}
        //                     draggable={true}
        //                     onDragOver={(e) => dragOverHandler(e)}
        //                     onDragLeave={(e) => dragLeaveHandler(e)}
        //                     onDragStart={(e) => dragStartHandler(e, board, task)}
        //                     onDragEnd={(e) => dragEndHandler(e)}
        //                     onDrop={(e) => dropHandler(e, board, task)}
        //                     className={styles.task}
        //                 >
        //                     {task.title}
        //                 </div>)}
        //         </div>)}
        // </div>
    )
}

export {Canban}