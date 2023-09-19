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
            <Link href={"/project"}>Проект1</Link>
            <Popup active={createProjectPopupActive} setActive={setCreateProjectPopupActive}>
                <CreateProject setCreateProjectPopupActive={setCreateProjectPopupActive}/>
            </Popup>
        </div>
    )
}