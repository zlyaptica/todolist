import {Header} from "@/components/Header";


const MainContainer = ({children, isAuthenticatedUser}) => {
    return (
        <div>
            <Header isAuthenticatedUser={isAuthenticatedUser}/>
            <div>
                {children}
            </div>
        </div>
    )
}

export {MainContainer}