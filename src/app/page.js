import {MainContainer} from "@/components/MainContainer";
import Welcome from "@/components/Welcome";
import Projects from "@/components/Projects";


export default function Home() {
    const isAuthenticatedUser = true
    return (
        <MainContainer isAuthenticatedUser={isAuthenticatedUser}>
            {isAuthenticatedUser
                ?
                <Projects/>
                :
                <Welcome/>
            }
        </MainContainer>
    )
}
