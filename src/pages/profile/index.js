import {MainContainer} from "@/components/MainContainer";
import styles from '../../styles/Profile.module.css'
import Projects from "@/components/Projects";
export default function Profile(props) {
let name ="имя кароче"

    return (
        <MainContainer>
            <div>{name}</div>
            <Projects/>
        </MainContainer>
    )
}
