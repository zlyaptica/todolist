import {MainContainer} from "@/components/MainContainer";
import Welcome from "@/components/Welcome";
import Projects from "@/components/Projects";
import {useEffect} from "react";
export default function Home() {
    const isAuthenticatedUser = true

    if (typeof window !== 'undefined') {
        localStorage.setItem('name', 'Denis')
        console.log("create!")
    }

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
