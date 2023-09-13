'use client'

import {SwitchType} from "@/components/SwitchType";
import {useState} from "react";
import {MainContainer} from "@/components/MainContainer";
import styles from '../../styles/Project.module.css'
import {GanttChart} from "@/components/GanttChart";
import {Canban} from "@/components/Canban";

export default function Project() {
    const [type, setType] = useState("Gantt")
    return (
        <MainContainer>
            <div className={styles.switchType}>
                <SwitchType setType={setType} type={type}/>
            </div>
            <div>
                {type === "Gantt" ? <GanttChart/> : <Canban/>}
            </div>
        </MainContainer>
    )
}

