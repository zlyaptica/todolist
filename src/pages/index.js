import {MainContainer} from "@/components/MainContainer";
import Welcome from "@/components/Welcome";
import Projects from "@/components/Projects";
import {useEffect} from "react";
export default function Home() {
    const isAuthenticatedUser = false

    if (typeof window !== 'undefined') {
        localStorage.setItem('name', 'Denis')
        localStorage.setItem('isAuthenticatedUser', 'false')
        console.log("create!")
    }

    return (
        <MainContainer>

            {(typeof window !== 'undefined') &&(localStorage.getItem('isAuthenticatedUser') === 'true')
                ?
                <Projects/>
                :
                <Welcome/>
            }
        </MainContainer>
    )
}
