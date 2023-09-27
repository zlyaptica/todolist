import {MainContainer} from "@/components/MainContainer";
import Welcome from "@/components/Welcome";
import {useRouter} from "next/navigation";
import useLocalStorage from "@/hooks/useLocalStorage";

export default function Home() {
    const router = useRouter()

    const [isAuthenticatedUser, setIsAuthenticatedUser] = useLocalStorage("isAuthenticatedUser", "")
    const [user, setUserData] = useLocalStorage("user", "")

    if (isAuthenticatedUser) {
        router.push(`/${user.nickname}/projects`)
    }
    return (
        <MainContainer>
            <Welcome/>
        </MainContainer>
    )
}
