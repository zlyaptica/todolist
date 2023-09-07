import styles from "../styles/SwitchType.module.css"

const SwitchType = ({type, setType}) => {
    const changeType = (type) => {
        setType(type.target.defaultValue)
    }
    return (
        <div className={styles.switchType}>
            <div className={styles.formToggle}>
                <div className={styles.formToggleItem + ' ' + styles.itemFirst}>
                    <input id="fid-1" type="radio" name="radio" value="Gantt"
                           checked={type === "Gantt"} onChange={changeType}/>
                    <label htmlFor="fid-1">Диаграмма Ганта</label>
                </div>
                <div className={styles.formToggleItem + ' ' + styles.itemSecond}>
                    <input id="fid-2" type="radio" name="radio" value="Canban"
                           checked={type === "Canban"} onChange={changeType}/>
                    <label htmlFor="fid-2">Доска Канбан</label>
                </div>
            </div>
        </div>
    )
}

export {SwitchType}