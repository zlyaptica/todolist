// 'use client'

import {MainContainer} from "@/components/MainContainer";
import {Canban} from "@/components/Canban";
import styles from "../../styles/Project.module.css"

// export async function getServerSideProps(context) {
//     const [userInfo, setUserInfo] = useState(null)
//     const {id} = context.query
//     let user
//     if (typeof window !== "undefined") {
//         user = JSON.parse(localStorage.getItem("user"))
//         setUserInfo(user)
//     }
//     const res = await fetch(`http://localhost:3000/api/get/board/${userInfo.nickname}/${id}`)
//     const board = await res.json()
//     return {props: {board}}
// }


export default function Project() {
    // const router = useRouter()

    // console.log(board)
    const isAuthenticatedUser = true


    // useEffect(() => {
    //     const getBoardDataFromServer = async (nickname) => {
    //         const {id} = router.query
    //         const response = await fetch(`/api/get/board/${nickname}/${id}`)
    //     }
    //     let user
    //     if (typeof window !== "undefined") {
    //         user = JSON.parse(localStorage.getItem("user"))
    //         setUserInfo(user)
    //     }
    //     getBoardDataFromServer(user.nickname)
    // }, []);

    return (
        <MainContainer isAuthenticatedUser={isAuthenticatedUser}>
            <div className={styles.project}>
                <div className={styles.boardHeader}>
                    <h1>Доска Канбан </h1>
                </div>
                <Canban/>
            </div>
        </MainContainer>
    )
}

