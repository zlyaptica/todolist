import {Header} from "@/components/Header";


const MainContainer = ({children}) => {
    return (
        <div>
            <Header/>
            <div>
                {children}
            </div>
        </div>
    )
}

export {MainContainer}