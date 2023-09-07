import Link from "next/link";
import {MainContainer} from "@/components/MainContainer";

export default function Projects() {
    return (
        <MainContainer>
            <Link href={"/create_project"}>Новый проект</Link>
            <h2>МОИ ПРОЕКТЫ</h2>
            <Link href={"/project"}>Проект1</Link>
        </MainContainer>
    )
}