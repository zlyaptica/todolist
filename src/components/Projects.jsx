'use client'
import Link from "next/link";
import createProject from "./../../public/Plus.svg"
import Image from "next/image";
import styles from "./../styles/Projects.module.css"
import {useState} from "react";
import {Popup} from "@/components/Popup";
import {CreateProject} from "@/components/CreateProject";

export default function Projects() {
    const [createProjectPopupActive, setCreateProjectPopupActive] = useState(false)
    let my_projects = [
        {name:"Проект 1"},
        {name:"Проект 2"}
    ]
    let Project_elements = my_projects
        .map(p => <div><Link href={"/project"}>{p.name}</Link></div>)

    return (
        <div>
            <div className={styles.projects}>
                <h2 className={styles.myProjects}>МОИ ПРОЕКТЫ</h2>
                <div onClick={() => setCreateProjectPopupActive(true)}>
                    <Link href={"/"}>
                        <Image width={30} height={30} src={createProject} alt={"to create project page"}/>
                    </Link>
                </div>
            </div>
            <div>
                {Project_elements}
            </div>
            <Popup active={createProjectPopupActive} setActive={setCreateProjectPopupActive}>
                <CreateProject setCreateProjectPopupActive={setCreateProjectPopupActive}/>
            </Popup>
        </div>
    )
}