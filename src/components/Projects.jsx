// 'use client'
// import Link from "next/link";
// import createProject from "./../../public/Plus.svg"
// import Image from "next/image";
// import styles from "./../styles/Projects.module.css"
// import {useEffect, useState} from "react";
// import {Popup} from "@/components/Popup";
// import {CreateProject} from "@/components/CreateProject";
//
// export default function Projects() {
//     const [createProjectPopupActive, setCreateProjectPopupActive] = useState(false)
//     const [projects, setProjects] = useState(null)
//     const [userInfo, setUserInfo] = useState(null)
//     const [createProjectFormProjectName, setCreateProjectFormProjectName] = useState(null)
//
//
//     const createProjectSubmit = async (e) => {
//         e.preventDefault()
//         await fetch('api/new/board', {
//             method: 'POST',
//             body: JSON.stringify({
//                 doer: userInfo.nickname,
//                 name: createProjectFormProjectName
//             })
//         })
//     }
//     useEffect(() => {
//         const getUserProjects = async (userBoards) => {
//             const boards = []
//
//             for (let i = 0; i < userBoards.length; i++) {
//                 const URL = `http://localhost:3000/api/get/board/${user.nickname}/${userBoards[i]}`
//                 const res = await fetch(URL)
//                 boards.push(await res.json())
//             }
//             setProjects(boards)
//         }
//         let user
//         if (typeof window !== "undefined") {
//             user = JSON.parse(localStorage.getItem("user"))
//             console.log("user", user)
//             setUserInfo(user)
//         }
//         getUserProjects(user.boards)
//     }, []);
//
//     return (
//         <div>
//             {userInfo
//                 ?
//                 <div>
//                     <div className={styles.projects}>
//                         <h2 className={styles.myProjects}>МОИ ПРОЕКТЫ</h2>
//                         <div onClick={() => setCreateProjectPopupActive(true)}>
//                             <Link href={"/"}>
//                                 <Image width={30} height={30} src={createProject} alt={"to create project page"}/>
//                             </Link>
//                         </div>
//                     </div>
//                     {projects
//                         ?
//                         projects.map(project =>
//                             <div key={project._id}>
//                                 <Link href={`/project/${project._id}`}>{project.name}</Link>
//                             </div>)
//                         :
//                         <div>У вас нет проектов</div>}
//                     <Popup active={createProjectPopupActive} setActive={setCreateProjectPopupActive}>
//                         <CreateProject setCreateProjectPopupActive={setCreateProjectPopupActive}
//                                        setCreateProjectFormProjectName={setCreateProjectFormProjectName}
//                                        createProjectSubmit={createProjectSubmit}/>
//                     </Popup>
//                 </div>
//                 :
//                 <div></div>
//             }
//         </div>
//     )
// }