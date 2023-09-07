import {Header} from "@/components/Header";
import Head from "next/head";

const MainContainer = ({children, isAuthenticatedUser}) => {
    return (
        <>
            <Head>
                <title>Добро пожаловать!</title>
            </Head>

            <Header isAuthenticatedUser={isAuthenticatedUser}/>
            <div>
                {children}
            </div>
        </>
    )
}

export {MainContainer}