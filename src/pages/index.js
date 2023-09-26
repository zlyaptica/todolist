'use client'

import {MainContainer} from "@/components/MainContainer";
import Welcome from "@/components/Welcome";
import {useEffect, useState} from "react";
import {useRouter} from "next/navigation";

export default function Home() {
    const router = useRouter()
    const [isAuthenticatedUser, setIsAuthenticatedUser] = useState(false)
    const [user, setUserData] = useState(null)

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const value = JSON.parse(localStorage.getItem('isAuthenticatedUser'))
            const userData = JSON.parse(localStorage.getItem('user'))
            setUserData(userData)
            if (value) {
                setIsAuthenticatedUser(true)
            }
        }
    }, []);
    if (isAuthenticatedUser) {
        router.push(`/${user.nickname}/projects`)
    }
    return (
        <MainContainer>
            <Welcome/>
        </MainContainer>
    )
}
