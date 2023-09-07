'use client'

import {SwitchType} from "@/components/SwitchType";
import GanttCharts from "@/app/GanttCharts/page";
import Canban from "@/app/Canban/page";
import {useState} from "react";
import {MainContainer} from "@/components/MainContainer";
import styles from '../../styles/project.module.css'

export default function Project() {
    const [type, setType] = useState("Gantt")
    return (
        <MainContainer>
            <div className={styles.switchType}>
                <SwitchType setType={setType} type={type}/>
            </div>
            <div>
                {type === "Gantt" ? <GanttCharts/> : <Canban/>}
            </div>
        </MainContainer>
    )
}

