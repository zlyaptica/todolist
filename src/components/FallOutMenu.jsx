import classes from "../styles/FallOutMenu.module.css";


const FallOutMenu = ({active,children}) => {
    const FallOutContentActive = classes.menuContent + ' ' + classes.active
    return (
            <div className={active ? FallOutContentActive : classes.menuContent} onClick={e => e.stopPropagation()}>
                {children}
            </div>
    )
}

export {FallOutMenu}