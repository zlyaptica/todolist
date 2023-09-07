import Link from "next/link";
import {MainContainer} from "@/components/MainContainer";

export default function SignIn() {
    return (
        <MainContainer>
            <div>
                <Link href="/signup">Зарегистрироваться</Link>
            </div>
        </MainContainer>
    )
}

