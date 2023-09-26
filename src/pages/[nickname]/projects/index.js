import {useEffect, useState} from "react";
import styles from "@/styles/Projects.module.css";
import Link from "next/link";
import Image from "next/image";
import createProject from "../../../../public/Plus.svg";
import {Popup} from "@/components/Popup";
import {CreateProject} from "@/components/CreateProject";
import {MainContainer} from "@/components/MainContainer";
import {useRouter} from "next/router";

export default function Projects() {
    const router = useRouter()
    const {nickname} = router.query
    const [createProjectPopupActive, setCreateProjectPopupActive] = useState(false)
    const [projects, setProjects] = useState(null)
    const [userInfo, setUserInfo] = useState(null)
    const [createProjectFormProjectName, setCreateProjectFormProjectName] = useState(null)

    const createProjectSubmit = async (e) => {
        e.preventDefault()
        await fetch('api/new/board', {
            method: 'POST',
            body: JSON.stringify({
                doer: userInfo.nickname,
                name: createProjectFormProjectName
            })
        })
    }

    useEffect(() => {
        const getUserProjects = async (userBoards) => {
            const boards = []

            for (let i = 0; i < userBoards.length; i++) {
                const URL = `http://localhost:3000/api/get/board/${user.nickname}/${userBoards[i]}`
                const res = await fetch(URL)
                boards.push(await res.json())
            }
            setProjects(boards)
            debugger
        }
        let user
        if (typeof window !== "undefined") {
            user = JSON.parse(localStorage.getItem("user"))
            console.log("user", user)
            setUserInfo(user)
        }
        getUserProjects(user.boards)
    }, []);

    return (
        <MainContainer>
            {userInfo
                ?
                <div className={styles.projects}>
                    <div className={styles.projectsHeader}>
                        <h1 className={styles.myProjects}>МОИ ПРОЕКТЫ</h1>
                        <div onClick={() => setCreateProjectPopupActive(true)}>
                            <Link href={"/"}>
                                <Image width={30} height={30} src={createProject} alt={"to create project page"}/>
                            </Link>
                        </div>
                    </div>
                    {projects
                        ?
                        projects.map(project =>
                            <div key={project._id}>
                                <Link href={`/${nickname}/projects/${project._id}`}>{project.name}</Link>
                            </div>)
                        :
                        <div>У вас нет проектов</div>}
                    <Popup active={createProjectPopupActive} setActive={setCreateProjectPopupActive}>
                        <CreateProject setCreateProjectPopupActive={setCreateProjectPopupActive}
                                       setCreateProjectFormProjectName={setCreateProjectFormProjectName}
                                       createProjectSubmit={createProjectSubmit}/>
                    </Popup>
                </div>
                :
                <div></div>
            }
        </MainContainer>
    )
}